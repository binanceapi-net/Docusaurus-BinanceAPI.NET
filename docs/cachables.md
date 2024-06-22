---
title: Cachable Requests 
sidebar_position: 13
---

`Caching` allows you to prepare requests `Ahead of Time` based on changes on the `UI` or other factors

You can use these objects as they are in some scenarios or you can use them to make a fully functional `Cache`

```cs
// This is a common scenario where a `Cached Request` is updated based on a `Setter` for a `Control`

CachableSpotRequestPartialMarket CachableMarketOrderPartial = CacheClientSpot.CreateOrderMarketPartial("Symbol", OrderSide.Buy, 1000); // init

private string CompletedRequest = string.Empty;

public decimal QuoteQuantity
{
    get => quoteQuantity;
    set
    {
        quoteQuantity = value;

        CompletedRequest = CachableMarketOrderPartial.Complete(value, true); // complete/update

        Set();
    }
}

// Later on Click etc
restClient.Spot.Order.PlaceOrderSpot(ref CompletedRequest);

```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)