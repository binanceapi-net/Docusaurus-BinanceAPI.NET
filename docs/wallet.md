---
sidebar_position: 4
title: Wallet
---

### ![](https://i.imgur.com/6W7CF1y.png) [GetFundingWallet](https://developers.binance.com/docs/wallet/asset/funding-wallet)

Get funding wallet assets

```cs
restClient.Wallet.GetFundingWallet();
```

----

### ![](https://i.imgur.com/6W7CF1y.png) [Transfer](https://developers.binance.com/docs/wallet/asset/user-universal-transfer)

Transfers between accounts

```cs
restClient.Wallet.Transfer();
```

----

### ![](https://i.imgur.com/6W7CF1y.png) [DustTransfer](https://developers.binance.com/docs/wallet/asset/dust-transfer)

Converts dust (small amounts of) assets to `BNB`

```cs
restClient.Wallet.DustTransfer();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetDailySpotAccountSnapshot](https://developers.binance.com/docs/wallet/account/daily-account-snapshoot)

Get a daily account snapshot (balances)

```cs
restClient.Wallet.GetDailySpotAccountSnapshot();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetAccountStatus](https://developers.binance.com/docs/wallet/account/account-status)

Gets the status of the account associated with the `API Key/Secret`

```cs
restClient.Wallet.GetAccountStatus();
```

----
  
### ![](https://i.imgur.com/xn2XyYw.png) [GetAccountInfo](https://developers.binance.com/docs/binance-spot-api-docs/rest-api#account-information-user_data)

Gets the account information, including balances

```cs
restClient.Wallet.GetAccountInfo();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetUserCoins](https://developers.binance.com/docs/wallet/capital/all-coins-info)

Get information for all coins for a user

```cs
restClient.Wallet.GetUserCoins();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetUserAsset](https://developers.binance.com/docs/wallet/asset/user-assets)

Get information for a single user asset, positive results only

```cs
restClient.Wallet.GetUserAsset();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetAssetDividendRecords](https://developers.binance.com/docs/wallet/asset/assets-divided-record)

Get asset dividend records

```cs
restClient.Wallet.GetAssetDividendRecords();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetDustLog](https://developers.binance.com/docs/wallet/asset/dust-log)

Gets the history of dust conversions

```cs
restClient.Wallet.GetDustLog();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetTradingStatus](https://developers.binance.com/docs/wallet/account/account-api-trading-status)

Gets the trading status for the current account

```cs
restClient.Wallet.GetTradingStatus();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetDepositAddress](https://developers.binance.com/docs/wallet/capital/deposite-address)

Fetch deposit address with network.

```cs
restClient.Wallet.GetDepositAddress();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetTradeFee](https://developers.binance.com/docs/wallet/asset/trade-fee)

Gets the trade fee for a symbol

```cs
restClient.Wallet.GetTradeFee();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetTransfers](https://developers.binance.com/docs/wallet/asset/query-user-universal-transfer)

Get universal transfer history

```cs
restClient.Wallet.GetTransfers();
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)