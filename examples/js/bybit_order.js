"use strict";

const ccxt = require("../../ccxt");

console.log("CCXT Version:", ccxt.version);

// https://github.com/ccxt/ccxt/issues/10179

async function main() {
  const exchange = new ccxt.ftx({
    apiKey: "V5W5CzqSZadmsKBV3Xx31ypApG5Bbb1-T_uH_-qF",
    secret: "qcK471F2PYrvcwYEr1OSsPesoXlcNLbcQcfaSOOe",
  });

  const newMarket = ccxt.makeNewMarket({
    base: "BTC",
    quto: "USD",
    id: "BTC/USD",
  });

  const markets = await exchange.loadMarkets(false, {}, newMarket);

  exchange.verbose = true;

  const orders = await exchange.fetchOrderBook("BTC/USD");
  console.log(orders);
}

main();
