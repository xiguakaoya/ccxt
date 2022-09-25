"use strict";

const ccxt = require("../../ccxt");

console.log("CCXT Version:", ccxt.version);

// https://github.com/ccxt/ccxt/issues/10179

async function main() {
  const exchange = new ccxt.okex({
    apiKey: "77174146-df8f-400d-a993-c12ef56f8d81",
    secret: "80CDF592F8216D15E4CF6CD1E70598C2",
    password: "19960226xiD@",
    options: {
      fetchClosedOrders: {
        method: "privateGetTradeOrdersHistoryArchive",
      },
      rateLimit: false,
    },
  });
  // id暂时没法统一化
  const newMarket = ccxt.makeNewMarket({
    base: "EOS",
    quto: "USDT",
    id: "EOS-USDT",
  });

  const markets = await exchange.loadMarkets(false, {});

  exchange.verbose = true;

  const orders = await exchange.fetchOrderBook("EOS/USDT");
  console.log(orders);
}

main();
