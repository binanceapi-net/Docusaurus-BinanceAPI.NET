---
title: Websocket Streams
sidebar_position: 11
---

### ![](https://i.imgur.com/IYnDSvL.png) [User Data Streams](https://developers.binance.com/docs/binance-spot-api-docs/user-data-stream)

Subscribes to the account update stream. Prior to using this, one of the `StartUserStream` methods should be called.

```cs
socketClient.UserDataStreams.Updates();
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [BookTickerUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#individual-symbol-book-ticker-streams)

Subscribes to the book ticker update stream for the provided symbol or symbols

```cs
socketClient.BookTickerUpdates()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [TradeUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#trade-streams)

Subscribes to the trades update stream for the provided symbol

```cs
socketClient.TradeUpdates()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [RealTimeLastPriceUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#trade-streams)

Subscribes to real time last price information for a symbol

```cs
socketClient.RealTimeLastPriceUpdates()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [SymbolTickerUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#individual-symbol-ticker-streams)

Subscribes to ticker updates stream for a specific symbol

```cs
socketClient.SymbolTickerUpdates()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [AggregatedTradeUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#aggregate-trade-streams)

Subscribes to the aggregated trades update stream for the provided symbol

```cs
socketClient.AggregatedTradeUpdates()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [KlineUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#klinecandlestick-streams-for-utc)

Subscribes to the candlestick update stream for the provided symbols and intervals, `UTC+0 Day` 

```cs
socketClient.KlineUpdates()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [KlineUpdatesUtc8](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#klinecandlestick-streams-with-timezone-offset)

Subscribes to the candlestick update stream for the provided symbols and intervals, `UTC+8 Day`

Note that `Event Time`, `Start Time` and `Close Time` are always in `UTC+0`.

```cs
socketClient.KlineUpdatesUtc8()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [SymbolMiniTickerUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#individual-symbol-mini-ticker-stream)

Subscribes to mini ticker updates stream for a specific symbol or symbols

```cs
socketClient.SymbolMiniTickerUpdates()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [SymbolTickerUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#individual-symbol-ticker-streams)

Subscribes to ticker updates stream for a specific symbol or symbols

```cs
socketClient.SymbolTickerUpdates()
```

-----

### ![](https://i.imgur.com/IYnDSvL.png) [AllSymbolTickerUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#all-market-tickers-stream)

Subscribes to ticker updates stream for all symbols

```cs
socketClient.AllSymbolTickerUpdates()
```

------------

### ![](https://i.imgur.com/IYnDSvL.png) [AllSymbolMiniTickerUpdates](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#all-market-mini-tickers-stream)

Subscribes to mini ticker updates stream for all symbols

```cs
socketClient.AllSymbolMiniTickerUpdates()
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)