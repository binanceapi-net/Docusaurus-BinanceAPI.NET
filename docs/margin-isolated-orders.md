---
sidebar_position: 9
title: Margin/Isolated Orders
---

### ![](https://i.imgur.com/3qMJlbC.png) [CreateOrderLimit](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade)

Create a new cachable limit order that can be used in multiple future requests

This object can be cached and reused

```cs
CachableMarginRequest order = CacheClientMargin.CreateMarginOrderLimit();
```

----

### ![](https://i.imgur.com/3qMJlbC.png) [CreateOrderMarket](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade)

Create a new cachable market order that can be used in multiple future requests

This object can be cached and reused

```cs
CachableMarginRequest order = CacheClientMargin.CreateMarginOrderMarket();

CachableMarginRequest order = CacheClientMargin.CreateMarginOrderMarketQuote();
```

----

### ![](https://i.imgur.com/6W7CF1y.png) [PlaceOrderMarginCached](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade)

Place a `Margin Order` from data that can be cached

```cs
CachableMarginRequest order = CacheClientMargin.CreateMarginOrderMarket(symbolName, orderSide, orderQuantity, recvWindow);

RestResult<BinancePlacedOrderMargin> result = restClient.Margin.Order.PlaceOrderMargin(ref order, CancellationToken.None);
```

Place a `Margin Order` from data that can be cached and also return a copy of the raw response

```cs
RestResultRaw<BinancePlacedOrderMargin> result = restClient.Margin.Order.PlaceOrderMarginRaw(ref order, default);
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginAccountOrder](https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Order)

Retrieves data for a specific margin account order. 

Either `orderId` or `origClientOrderId` should be provided.

```cs
restClient.Margin.Order.GetMarginAccountOrder();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginAccountOrders](https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-All-Orders)

Gets all margin account orders for the provided symbol

```cs
restClient.Margin.Order.GetMarginAccountOrders();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginAccountOpenOrders](https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Open-Orders)

Gets a list of open margin account orders

```cs
restClient.Margin.Order.GetMarginAccountOpenOrders();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginAccountUserTrades](https://developers.binance.com/docs/margin_trading/trade/Query-Margin-Account-Trade-List)

Gets all user margin account trades for provided symbol

```cs
restClient.Margin.Order.GetMarginAccountUserTrades();
```

----

### ![](https://i.imgur.com/Odmg0pB.png) [CancelMarginOrder](https://developers.binance.com/docs/margin_trading/trade/Margin-Account-Cancel-Order)

Cancel an active order for margin account

```cs
restClient.Margin.Order.CancelMarginOrder();
```

----

### ![](https://i.imgur.com/Odmg0pB.png) [CancelOpenMarginOrders](https://developers.binance.com/docs/margin_trading/trade/Margin-Account-Cancel-All-Open-Orders)

Cancel all active orders for a symbol

```cs
restClient.Margin.Order.CancelOpenMarginOrders();
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)
