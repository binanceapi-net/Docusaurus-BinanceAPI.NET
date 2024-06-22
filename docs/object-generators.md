---
title: Object Generators 
sidebar_position: 14
---

[`Generators`](https://www.nuget.org/packages/ObjectGenerator.NET) are how the library turns `JSON` back into `Strongly Typed Objects` without requiring any external dependencies. 

This is done for you automatically and is a lot faster.

Some endpoints also return the `Raw Response` and all `Generators` are available for use in that case.

```cs
string websocketData = "" +
    "{" +
    "\"id\":\"4\"," +
    "\"status\":200," +
    "\"result\":" +
    "[[1712372100000,\"702.60000000\",\"702.80000000\",\"697.60000000\",\"699.60000000\",\"1634.78800000\",1712372399999,\"1144306.51160000\",2221,\"499.69000000\",\"349791.43160000\",\"0\"]," +
    "[1712372400000,\"699.60000000\",\"701.60000000\",\"696.80000000\",\"700.90000000\",\"2092.67500000\",1712372699999,\"1463135.03660000\",2371,\"1033.37300000\",\"722800.30360000\",\"0\"]]" +
    "}";

List<BinanceKline>? websocketTest = BinanceKlineGenerator.CreateEnumerableArrayResult(websocketData);
```

`Generators` can be found by adding the word `Generator` to the end of a `Type`

`Raw Responses` should be saved to file without modifications so they can be `Generated` later

[`ObjectGenerator.NET`](https://www.nuget.org/packages/ObjectGenerator.NET) is available for use in projects that don't include this library, You can get it [`Here`](https://www.nuget.org/packages/ObjectGenerator.NET)

[![Copyright S Christison ©2024](https://i.imgur.com/JfsfrPD.png)](https://www.nuget.org/profiles/Samuel)