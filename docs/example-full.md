---
title: Example Demonstration
sidebar_position: 15
---

Automates modifying the last open order or creating a new open order with a specified `PnL`

This should be copy pasted into a new `Console Project` in `Visual Studio`

```cs
// Please make sure you understand before you run this example.
// This example is solely intended to demonstrate how to use various aspects of the library.
// I am not responsible for your usage of this functional example.

// Command Line Arguments
// MODE    - create new/add last, eg. true
// SYMBOL  - symbol name,         eg. 1000SATSUSDT
// ASSET   - symbol asset,        eg. 1000SATS
// QUOTE   - quote quantity,      eg. 1 USDT
// PERCENT - pnl percent,         eg. 0.4%

// eg.
// SimpleExample.exe true 1000SATSUSDT 1000SATS 1 0.4 // Create new with PnL Percent
// SimpleExample.exe false 1000SATSUSDT 1000SATS 1 // Add to Last Open Order

using BinanceAPI;
using BinanceAPI.Authentication;
using BinanceAPI.Enums;
using BinanceAPI.Hosts;
using BinanceAPI.MarketData;
using BinanceAPI.Rest;
using BinanceAPI.SharedObjects;
using BinanceAPI.SpotData;
using BinanceAPI.UserData;
using BinanceAPI.UserStream;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace FullRestExample
{
    internal class Program
    {
        private const int RECV_WINDOW = 2000;

        private static decimal QuoteQunatity = 1; // eg. 1 USDT

        private static decimal PnlPercent = 0.4m; // eg. 0.4%

        private static string Symbol = "symbol"; // eg. 1000SATSUSDT

        private static string Asset = "asset"; // eg. 1000SATS

        private static RestClient RestClient = null!;

        private static SocketClient SocketClient = null!;

        private static UserDataUpdate UserDataUpdate = null!;

        private static AuthenticationProvider AuthenticationProvider = null!;

        private static CachableSpotRequest AdjustMarketOrder = null!;

        private static CachableSpotRequestPartial CachableSpotRequestPartial = null!;

        private static BinanceSymbol? BinanceSymbol = null!;

        private static decimal QuantityStepSize;

        private static byte QuantityStepSizeScale;

        private static int PriceTickScale;

        private static bool createNewMode = false;

        private static volatile int singleEntry = 0;

        public static decimal AvailableN = decimal.Zero;

        private static readonly Action<BinanceStreamPositionsUpdate?> PositionUpdateAction = (message) =>
        {
            if (message != null)
            {
                foreach (var position in message.Balances)
                {
                    if (position.Asset == Asset)
                    {
                        AvailableN = position.Free.Scale(QuantityStepSizeScale);
                    }
                }
            }

            UserDataUpdate.Signal();
        };

        private static void Main(string[] args)
        {
            SetupConsole();

            if (CheckArgumentsValid(args))
            {
                AdjustMarketOrder = CacheClientSpot.CreateOrderMarketQuote(Symbol, OrderSide.Buy, QuoteQunatity, RECV_WINDOW);

                CachableSpotRequestPartial = CacheClientSpot.CreateOrderLimitPartial(Symbol, OrderSide.Sell, OrderType.Limit, RECV_WINDOW, TimeInForce.GoodTillCancel, OrderResponseType.ACK);

                AuthenticationProvider = new("YOUR HMAC API KEY", "YOUR HMAC API SECRET KEY");

                RestClient = new RestClient(AuthenticationProvider, RestClientOptions);

                SocketClient = new SocketClient();

                BinanceSymbol = RestClient.Spot.System.GetExchangeInfo(Symbol).Data?.Symbols.FirstOrDefault();

                UserDataUpdate = new UserDataUpdate(SocketClient, RestClient, PositionUpdateAction);

                if (BinanceSymbol != null)
                {
                    QuantityStepSize = BinanceSymbol.LotSizeFilter?.StepSize ?? decimal.Zero;

                    QuantityStepSizeScale = new DecimalHelper(QuantityStepSize.Normalize()).Scale;

                    PriceTickScale = new DecimalHelper(BinanceSymbol.PriceFilter?.TickSize.Normalize() ?? 1).Scale;

                    Console.WriteLine("Server Time Ticks: " + ServerTimeClient.ServerTimeTicks);

                    if (ServerTimeClient.ServerTimeTicks > 0)
                    {
                        Console.WriteLine("--------CLOSE APPLICATION TO STOP--------");

                        WaitForInputLoop();
                    }
                    else
                    {
                        Console.WriteLine("--------NETWORK ERROR--------");
                    }
                }
                else
                {
                    Console.WriteLine("Exchange Information Not Found for: " + Symbol);
                }
            }

            WaitCleanupConsole();
        }

        private static void WaitForInputLoop()
        {
            if (createNewMode)
            {
                Console.WriteLine("Press any key to:\n1. Buy [" + QuoteQunatity + " USDT] of [" + Symbol + "]\n2. Create a new order with pnl of [" + PnlPercent + "%]");
            }
            else
            {
                Console.WriteLine("Press any key to:\n1. Buy [" + QuoteQunatity + " USDT] of [" + Symbol + "]\n2. Add the quantity to the last open order");
            }

            while (true)
            {
                Console.ReadLine();

                if (Interlocked.Exchange(ref singleEntry, 1) == 0)
                {
                    if (!createNewMode)
                    {
                        ThreadPool.UnsafeQueueUserWorkItem((_) =>
                        {
                            RestResult<List<BinanceOrderSpot>> openOrders = RestClient.Spot.Order.GetOpenOrders(Symbol);

                            if (openOrders.Data != null)
                            {
                                int openOrderCount = openOrders.Data.Count() - 1;

                                if (openOrderCount >= 0)
                                {
                                    BinanceOrderSpot lastOrder = openOrders.Data.ElementAtOrDefault(openOrderCount);

                                    if (lastOrder != null)
                                    {
                                        if (AdjustOrder(ref lastOrder))
                                        {
                                            Console.WriteLine("OKAY");

                                            Interlocked.Exchange(ref singleEntry, 0);

                                            return;
                                        }
                                    }
                                }
                            }

                            Console.WriteLine("FAILED");

                            Interlocked.Exchange(ref singleEntry, 0);
                        }, null);
                    }
                    else
                    {
                        ThreadPool.UnsafeQueueUserWorkItem((_) =>
                        {
                            if (AddOrder())
                            {
                                Console.WriteLine("OKAY");
                            }
                            else
                            {
                                Console.WriteLine("FAILED");
                            }

                            Interlocked.Exchange(ref singleEntry, 0);
                        }, null);
                    }
                }
                else
                {
                    Console.WriteLine("Still waiting for last request");
                }
            }
        }

        private static bool AddOrder()
        {
            RestResult<BinancePlacedOrderSpot> addOrder = RestClient.Spot.Order.PlaceOrderSpot(ref AdjustMarketOrder);

            if (addOrder.Data != null)
            {
                UserDataUpdate.WaitForUpdate();

                if (AvailableN >= QuantityStepSize)
                {
                    string completedRequest = CachableSpotRequestPartial.Complete((addOrder.Data.Price + (addOrder.Data.Price / 100 * PnlPercent)).Scale(PriceTickScale), AvailableN);

                    RestResult<BinancePlacedOrderSpot> newOrder = RestClient.Spot.Order.PlaceOrderSpot(ref completedRequest);

                    if (newOrder.Data != null)
                    {
                        AvailableN = decimal.Zero;

                        return true;
                    }
                    else
                    {
                        Error(newOrder.Error, "New Order");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid Available Amount");
                }
            }
            else
            {
                Error(addOrder.Error, "Adjust Order");
            }

            AvailableN = decimal.Zero;

            return false;
        }

        private static bool AdjustOrder(ref BinanceOrderSpot bos)
        {
            RestResult<BinancePlacedOrderSpot> adjustOrder = RestClient.Spot.Order.PlaceOrderSpot(ref AdjustMarketOrder);

            if (adjustOrder.Data != null)
            {
                RestResult<BinanceCancelledId> cancelled = RestClient.Spot.Order.CancelOrder(Symbol, bos.OrderId);

                if (cancelled.Data != null)
                {
                    UserDataUpdate.WaitForUpdate();

                    if (AvailableN >= QuantityStepSize)
                    {
                        decimal pricePercent = bos.Price / 100 * PnlPercent;

                        decimal lastPriceNegative = bos.Price - pricePercent;

                        string req = CachableSpotRequestPartial.Complete((adjustOrder.Data.Price <= lastPriceNegative ? bos.Price : bos.Price + pricePercent).Scale(PriceTickScale), AvailableN);

                        RestResult<BinancePlacedOrderSpot> newOrder = RestClient.Spot.Order.PlaceOrderSpot(ref req);

                        if (newOrder.Data != null)
                        {
                            AvailableN = decimal.Zero;

                            return true;
                        }
                        else
                        {
                            Error(newOrder.Error, "New Order");
                        }
                    }
                    else
                    {
                        Console.WriteLine("Invalid Available Amount");
                    }
                }
                else
                {
                    Error(cancelled.Error, "Cancelled");
                }
            }
            else
            {
                Error(adjustOrder.Error, "Adjust Order");
            }

            AvailableN = decimal.Zero;

            return false;
        }

        private static void Error(RestError? error, string location)
        {
            if (error != null)
            {
                if (error.Exception != null)
                {
                    Console.WriteLine("Exception " + location + " | " + error.Exception.Message);
                }
                else
                {
                    Console.WriteLine("Error " + location + " | " + error.ErrorMessage);
                }
            }
        }

        private static bool CheckArgumentsValid(string[] args)
        {
            bool success = false;

            if (args.Length > 0)
            {
                if (args[0] == "true")
                {
                    if (args.Length == 5)
                    {
                        createNewMode = true;

                        try
                        {
                            Symbol = args[1];

                            Asset = args[2];

                            QuoteQunatity = decimal.Parse(args[3]);

                            PnlPercent = decimal.Parse(args[4]);

                            success = true;
                        }
                        catch
                        {
                            success = false;
                        }
                    }
                }
                else if (args[0] == "false")
                {
                    if (args.Length == 4)
                    {
                        try
                        {
                            Symbol = args[1];

                            Asset = args[2];

                            QuoteQunatity = decimal.Parse(args[3]);

                            success = true;
                        }
                        catch
                        {
                            success = false;
                        }
                    }
                }
            }

            if (!success)
            {
                Console.WriteLine("Invalid Argument, Fix and Restart\n\nValid Examples:\n\nAdd to Last Open Order\nSimpleExample.exe false 1000SATSUSDT 1000SATS 1\n\nCreate new with PnL Percent\nSimpleExample.exe true 1000SATSUSDT 1000SATS 1 0.4");
            }

            return success;
        }

        // ---------------------------------

        private static void SetupConsole()
        {
            Console.CursorVisible = false;
            Console.WindowWidth = (int)(Console.LargestWindowWidth / 2.5);
            Console.WindowHeight = (int)(Console.LargestWindowHeight / 2.5);
        }

        private static void WaitCleanupConsole()
        {
            Console.ReadLine();

            Console.WriteLine("Cleaning up.. Please wait..");

            RestClient.Dispose();
            UserDataUpdate.Dispose();

            Console.WriteLine("Press any key to exit");

            Console.ReadLine();
        }

        private static readonly RestClientOptions RestClientOptions = new()
        {
            SyncUpdateTime = 5,
            GetCacheSize = 2048,
            PutCacheSize = 2048,
            PostCacheSize = 2048,
            DeleteCacheSize = 2048,
            ReceiveWindow = TimeSpan.FromMilliseconds(RECV_WINDOW),
            DefaultApiController = BinanceApiController.DEFAULT
        };
    }

    public class UserDataUpdate
    {
        public volatile int Waiting = 0;

        private readonly SocketClientHost SocketClientHost = null!;

        public UserDataUpdate(SocketClient socketClient, RestClient restCLient, Action<BinanceStreamPositionsUpdate?> onPositionUpdate)
        {
            RestResult<BinanceListenKey> listenKey = restCLient.Spot.UserStream.StartUserStream();

            if (listenKey.Data != null)
            {
                SocketClientHost = socketClient.UserDataStreams.Updates(listenKey.Data.ListenKey, null, (positionUpdate) => { onPositionUpdate(positionUpdate); });
            }
        }

        public void Signal()
        {
            Interlocked.Exchange(ref Waiting, 0);
        }

        public void WaitForUpdate()
        {
            Interlocked.Exchange(ref Waiting, 1);

            while (Waiting == 1)
            {
                Delay.Wait(50);
            }
        }

        public void Dispose()
        {
            SocketClientHost?.Dispose();
        }
    }
}
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)