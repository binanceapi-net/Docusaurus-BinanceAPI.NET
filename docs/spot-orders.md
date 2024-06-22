---
sidebar_position: 8
title: Spot Orders
---

### ![](https://i.imgur.com/3qMJlbC.png) [CreateOrderLimit](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade)

Create a new cachable limit order that can be used in multiple future requests

This object can be cached and reused

```cs
CachableSpotRequest order = CacheClientSpot.CreateOrderLimit();
```

----

### ![](https://i.imgur.com/3qMJlbC.png) [CreateOrderMarket](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade)

Create a new cachable market order that can be used in multiple future requests

This object can be cached and reused

```cs
CachableSpotRequest order = CacheClientSpot.CreateOrderMarket();

CachableSpotRequest order = CacheClientSpot.CreateOrderMarketQuote();
```

----

### ![](https://i.imgur.com/6W7CF1y.png) [PlaceOrderSpotCached](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade)

Place a `Spot Order` from data that can be cached

```cs
CachableSpotRequest order = CacheClientSpot.CreateOrderMarket(symbolName, orderSide, orderQuantity, recvWindow);

RestResult<BinancePlacedOrderSpot> result = restClient.Spot.Order.PlaceOrderSpot(ref order, CancellationToken.None);
```

Place a `Spot Order` from data that can be cached and also return a copy of the raw response

```cs
RestResultRaw<BinancePlacedOrderSpot> result = restClient.Spot.Order.PlaceOrderSpotRaw(ref order, default);
```

----

### ![](https://i.imgur.com/6W7CF1y.png) [PlaceTestOrder](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#test-new-order-trade)

Places a new test order. 

Test orders are not actually being executed and just test the functionality.

```cs
CachableSpotRequest spotRequest = CacheClientSpot.CreateOrderMarket("BTCUSDT", OrderSide.Sell, 1, 1000);

RestResult<BinancePlacedOrderSpot> result = restClient.Spot.Order.PlaceTestOrder(ref spotRequest, default);
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetOrder](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#query-order-user_data)

Retrieves data for a specific order. 

Either `orderId` or `origClientOrderId` should be provided.

```cs
restClient.Spot.Order.GetOrder();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetOrders](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#all-orders-user_data)

Gets all orders for the provided symbol

```cs
restClient.Spot.Order.GetOrders();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetOpenOrders](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#current-open-orders-user_data)

Gets a list of open orders

```cs
restClient.Spot.Order.GetOpenOrders();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetUserTrades](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#account-trade-list-user_data)

Gets all user trades for provided symbol

```cs
restClient.Spot.Order.GetUserTrades();
```

----

### ![](https://i.imgur.com/Odmg0pB.png) [CancelOrder](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#cancel-order-trade)

Cancels a pending order on a symbol

```cs
restClient.Spot.Order.CancelOrder();
```

----

### ![](https://i.imgur.com/Odmg0pB.png) [CancelAllOpenOrders](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#cancel-all-open-orders-on-a-symbol-trade)

Cancels all open orders on a symbol

```cs
restClient.Spot.Order.CancelAllOpenOrders()
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)
