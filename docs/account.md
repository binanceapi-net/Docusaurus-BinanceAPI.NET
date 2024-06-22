---
sidebar_position: 5
title: Account
---

## Margin

### ![](https://i.imgur.com/6W7CF1y.png) [Transfer](https://developers.binance.com/docs/sub_account/asset-management/Margin-Transfer-for-Sub-account)

Execute transfer between spot account and cross margin account.

```cs
restClient.Margin.System.Transfer();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginAccountInfo](https://developers.binance.com/docs/margin_trading/account/Query-Cross-Margin-Account-Details)

Query margin account details

```cs
restClient.Margin.System.GetMarginAccountInfo();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMarginLevelInformation](https://developers.binance.com/docs/margin_trading/account/Get-Summary-Of-Margin-Account)

Get personal margin level information for your account

```cs
restClient.Margin.System.GetMarginLevelInformation();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetTransferHistory](https://developers.binance.com/docs/margin_trading/transfer/Get-Cross-Margin-Transfer-History)

Get history of transfers

```cs
restClient.Margin.System.GetTransferHistory();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetForceLiquidationHistory](https://developers.binance.com/docs/margin_trading/trade/Get-Force-Liquidation-Record)

Get history of forced liquidations

```cs
restClient.Margin.System.GetForceLiquidationHistory();
```

-----

### ![](https://i.imgur.com/xn2XyYw.png) [GetMaxTransferAmount](https://developers.binance.com/docs/margin_trading/transfer/Query-Max-Transfer-Out-Amount)

Query max transfer-out amount

```cs
restClient.Margin.System.GetMaxTransferAmount();
```

----

## Isolated

### ![](https://i.imgur.com/6W7CF1y.png) [EnableIsolatedMarginAccount](https://developers.binance.com/docs/margin_trading/account/Enable-Isolated-Margin-Account)

Enable an isolated margin account

```cs
restClient.Margin.System.EnableIsolatedMarginAccount();
```

----

### ![](https://i.imgur.com/xn2XyYw.png6) [GetIsolatedMarginAccount](https://developers.binance.com/docs/margin_trading/account/Query-Isolated-Margin-Account-Info)

Isolated margin account info

```cs
restClient.Margin.System.GetIsolatedMarginAccount();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetEnabledIsolatedMarginAccountLimit](https://developers.binance.com/docs/margin_trading/account/Query-Enabled-Isolated-Margin-Account-Limit)

Get max number of enabled isolated margin accounts

```cs
restClient.Margin.System.GetEnabledIsolatedMarginAccountLimit();
```

----

### ![](https://i.imgur.com/xn2XyYw.png) [GetInterestIsolatedMarginData](https://developers.binance.com/docs/margin_trading/account/Query-Isolated-Margin-Fee-Data)

Get interest isolated margin data

```cs
restClient.Margin.System.GetInterestIsolatedMarginData();
```

----

### ![](https://i.imgur.com/Odmg0pB.png) [DisableIsolatedMarginAccount](https://developers.binance.com/docs/margin_trading/account/Disable-Isolated-Margin-Account)

Disable an isolated margin account

```cs
restClient.Margin.System.DisableIsolatedMarginAccount();
```

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)