---
sidebar_position: 2
title: Market
---

## Spot

### ![](https://i.imgur.com/xn2XyYw.png) [GetTicker](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#24hr-ticker-price-change-statistics)

Get data regarding the last `24` hours for the provided symbol

```cs
restClient.Spot.Market.GetTicker();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetTickers](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#24hr-ticker-price-change-statistics)

Get data regarding the last `24` hours for all symbols

```cs
restClient.Spot.Market.GetTickers();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetAggTradeHistory](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#compressedaggregate-trades-list)

Gets compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated.

```cs
restClient.Spot.Market.GetAggregatedTradeHistory();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetCurrentAvgPrice](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#current-average-price)

Gets current average price for a symbol

```cs
restClient.Spot.Market.GetCurrentAvgPrice();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetKlines](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#klinecandlestick-data)

Get candlestick data for the provided symbol

```cs
restClient.Spot.Market.GetKlines();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetTradeHistory](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#old-trade-lookup)

Gets the historical  trades for a symbol

```cs
restClient.Spot.Market.GetTradeHistory();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetRecentTradeHistory](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#recent-trades-list)

Gets the recent trades for a symbol

```cs
restClient.Spot.Market.GetRecentTradeHistory();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetBookPrice](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#symbol-order-book-ticker)

Gets the best price/quantity on the order book for a symbol.

```cs
restClient.Spot.Market.GetBookPrice();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetAllBookPrices](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#symbol-order-book-ticker)

Gets the best price/quantity on the order book for all symbols.

```cs
restClient.Spot.Market.GetAllBookPrices();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetPrice](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#symbol-price-ticker)

Gets the price of a symbol

```cs
restClient.Spot.Market.GetPrice();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetAllPrices](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#symbol-price-ticker)

Get a list of the prices of all symbols

```cs
restClient.Spot.Market.GetAllPrices();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetTradingDay](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#trading-day-ticker)

Price change statistics for a trading day

```cs
restClient.Spot.Market.GetTradingDay();
```

----

## Margin

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginAsset](https://developers.binance.com/docs/margin_trading/market-data/Get-All-Margin-Assets)

Get a margin asset

```cs
restClient.Margin.Market.GetMarginAsset();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetAllMarginAssets](https://developers.binance.com/docs/margin_trading/market-data/Get-All-Margin-Assets)

Get all assets available for margin trading

```cs
restClient.Margin.Market.GetAllMarginAssets();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginPair](https://developers.binance.com/docs/margin_trading/market-data/Get-All-Cross-Margin-Pairs)

Get a margin pair

```cs
restClient.Margin.Market.GetMarginPair();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetAllMarginPairs](https://developers.binance.com/docs/margin_trading/market-data/Get-All-Cross-Margin-Pairs)

Get all asset pairs available for margin trading

```cs
restClient.Margin.Market.GetAllMarginPairs();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginPriceIndex](https://developers.binance.com/docs/margin_trading/market-data/Query-Margin-PriceIndex)

Get margin price index

```cs
restClient.Margin.Market.GetMarginPriceIndex();
```

----

## Isolated


### ![](https://i.imgur.com/xn2XyYw.png) [GetIsolatedSymbol](https://developers.binance.com/docs/margin_trading/market-data/Get-All-Isolated-Margin-Symbol)

Isolated margin symbol info for a specific symbol

```cs
restClient.Margin.Market.GetIsolatedMarginSymbol();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetAllIsolatedSymbols](https://developers.binance.com/docs/margin_trading/market-data/Get-All-Isolated-Margin-Symbol)

Isolated margin symbol info for all symbols

```cs
restClient.Margin.Market.GetAllIsolatedMarginSymbols();
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)
