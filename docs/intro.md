---
slug: /
sidebar_position: 1
title: Getting Started
---

[`BinanceAPI.NET`](https://www.nuget.org/packages/BinanceAPI.NET) is a High Performance Rest API/Websocket Wrapper for [`Binance.com`](https://www.binance.com) with an emphasis on creating requests quickly and caching data when possible so requests are more responsive,

This library the best option if you want to trade `Spot` or `Margin`.

-----

### ![](https://i.imgur.com/6uMKm3t.png) Authentication

Create an `Authentication Provider` that can be used by multiple `Rest Clients`

```csharp
AuthenticationProvider authenticationProvider = new AuthenticationProvider(api_key, api_secret);
```

-----

### ![](https://i.imgur.com/6uMKm3t.png) Create Rest Client

Change the `Rest Client Options` and create a new `Rest Client` using the `Authentication Provider` above

```csharp
RestClientOptions restClientOptions = new()
{
    SyncUpdateTime = 5,
    GetCacheSize = 2048,
    PutCacheSize = 2048,
    PostCacheSize = 2048,
    DeleteCacheSize = 2048,
    ReceiveWindow = TimeSpan.FromMilliseconds(1000),
    DefaultApiController = BinanceApiController.DEFAULT
};

RestClient restClient = new RestClient(authenticationProvider, restClientOptions, CancellationToken.None);
```

-----

### ![](https://i.imgur.com/6uMKm3t.png) Create Socket Client

Create a `Socket Client` that can be used to `Connect/Subscribe` to `Websocket Streams`

Returns a `SocketClientHost` that can be used to manage the connection.

```cs
SocketClient socketClient = new SocketClient(50);

SocketClientHost example = socketClient.SymbolMiniTickerUpdates(...);
example.ConnectionStatusChanged += BinanceSocket_StatusChanged;
example.ReconnectSocket();
example.DestroySocket();
```

`50` is the default number of `Reconnect Attempts` before the socket will `Fail`

-----

### ![](https://i.imgur.com/6uMKm3t.png) Simple Ticker Example

Subscribe to `Real Time LastPrice Updates` for a particular symbol

```cs
using BinanceAPI;
using BinanceAPI.Hosts;

namespace FullSocketExample
{
    public class LastPriceTicker
    {
        private readonly SocketClientHost TickerHost;

        public decimal LastPrice = decimal.Zero;

        public LastPriceTicker(string symbol, ref RestClient restClient, ref SocketClient socketClient)
        {
            LastPrice = restClient.Spot.Market.GetPrice(symbol).Data?.Price ?? decimal.Zero;

            TickerHost = socketClient.RealTimeLastPriceUpdates(symbol, (update) =>
            {
                if (update != null)
                {
                    LastPrice = update.LastPrice;
                }
            });
        }

        public void Dispose()
        {
            TickerHost.DestroySocket();

            TickerHost.Dispose();
        }
    }
}
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)
