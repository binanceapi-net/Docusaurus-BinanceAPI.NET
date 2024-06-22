---
sidebar_position: 3
title: System
---

### ![](https://i.imgur.com/xn2XyYw.png) [GetExchangeInfo](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#exchange-information)

Gets information about the exchange including rate limits and information on the provided symbol or symbols

```cs
restClient.Spot.System.GetExchangeInfo();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetSystemStatus](https://developers.binance.com/docs/wallet/others/system-status)

Gets the status of the Binance platform

```cs
restClient.Spot.System.GetSystemStatus();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [Ping](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#test-connectivity)

Pings the Binance API

```cs
restClient.Spot.System.Ping();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) GetServerTimeTicks

Get the server time ticks

```cs
long? stt = ServerTimeClient.ServerTimeTicks;
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)