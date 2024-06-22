---
title: User Data Stream
sidebar_position: 10
---

These are used to manage `Listen Keys` that are used to receive `User Data Stream Updates` in real time

## Spot

### ![](https://i.imgur.com/6W7CF1y.png) [StartUserStream](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#start-user-data-stream-user_stream)

Starts a user stream by requesting a listen key. 

This listen key can be used in subsequent requests to `SubscribeToUserDataUpdates`

The stream will close after `60` minutes unless a keep alive is send.

```cs
string listenKey = restClient.Spot.UserStream.StartUserStream();

socketClient.UserDataStreams.Updates(listenKey, ...);
```

----

### ![](https://i.imgur.com/HrdcHNA.png) [KeepAliveUserStream](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#keepalive-user-data-stream-user_stream)

Sends a keep alive for the current user stream listen key to keep the stream from closing. 

Stream auto closes after `60` minutes if no keep alive is send. 

`30` minute interval for keep alive is recommended.

```cs
restClient.Spot.UserStream.KeepAliveUserStream();
```

----

### ![](https://i.imgur.com/Odmg0pB.png) [StopUserStream](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#close-user-data-stream-user_stream)

Stops the current user stream

```cs
restClient.Spot.UserStream.StopUserStream();
```

----

## Margin

### ![](https://i.imgur.com/6W7CF1y.png) [StartUserStream](https://developers.binance.com/docs/margin_trading/trade-data-stream/Start-Margin-User-Data-Stream)

Starts a user stream  for margin account by requesting a listen key.

This listen key can be used in subsequent requests to `SubscribeToUserDataUpdates`

The stream will close after `60` minutes unless a keep alive is send.

```cs
string listenKey = restClient.Margin.UserStream.StartUserStream();

socketClient.UserDataStreams.Updates(listenKey, ...);
```

----

### ![](https://i.imgur.com/HrdcHNA.png) [KeepAliveUserStream](https://developers.binance.com/docs/margin_trading/trade-data-stream/Keepalive-Margin-User-Data-Stream)

Sends a keep alive for the current user stream for margin account listen key to keep the stream from closing.

Stream auto closes after `60` minutes if no keep alive is send. `30` minute interval for keep alive is recommended.

```cs
restClient.Margin.UserStream.KeepAliveUserStream();
```

----

### ![](https://i.imgur.com/Odmg0pB.png) [StopUserStream](https://developers.binance.com/docs/margin_trading/trade-data-stream/Close-Margin-User-Data-Stream)

Close the user stream for the cross margin account

```cs
restClient.Margin.UserStream.StopUserStream();
```

----

## Isolated

### ![](https://i.imgur.com/6W7CF1y.png) [StartIsolatedUserStream](https://developers.binance.com/docs/margin_trading/trade-data-stream/Start-Isolated-Margin-User-Data-Stream)

Starts a user stream  for margin account by requesting a listen key.

This listen key can be used in subsequent requests to `SubscribeToUserDataUpdates`

The stream will close after `60` minutes unless a keep alive is send.

```cs
string listenKey = restClient.Margin.IsolatedUserStream.StartIsolatedMarginUserStream();

socketClient.UserDataStreams.Updates(listenKey, ...);
```

----

### ![](https://i.imgur.com/HrdcHNA.png) [KeepAliveIsolatedUserStream](https://developers.binance.com/docs/margin_trading/trade-data-stream/Keepalive-Isolated-Margin-User-Data-Stream)

Sends a keep alive for the current user stream for margin account listen key to keep the stream from closing.

Stream auto closes after `60` minutes if no keep alive is send. `30` minute interval for keep alive is recommended.

```cs
restClient.Margin.IsolatedUserStream.KeepAliveIsolatedMarginUserStream();
```

----

### ![](https://i.imgur.com/Odmg0pB.png) [CloseIsolatedUserStream](https://developers.binance.com/docs/margin_trading/trade-data-stream/Close-Isolated-Margin-User-Data-Stream)

Close the user stream for the isolated margin account

```cs
restClient.Margin.IsolatedUserStream.StopIsolatedMarginUserStream();
```

----

## User Data Websocket Stream

### ![](https://i.imgur.com/IYnDSvL.png) [Updates](https://developers.binance.com/docs/binance-spot-api-docs/user-data-stream)

Subscribes to the account update stream. Prior to using this, one of the `StartUserStream` methods should be called.

```cs
socketClient.UserDataStreams.Updates();
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)