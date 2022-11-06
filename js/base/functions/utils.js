const makeNewMarket = ({
  base: baseNmae,
  quto: qutoName,
  id: id,
  pricePrecision,
  type = "spot",
  amountPrecision = 0.01,
}) => {
  const base = baseNmae.toUpperCase();
  const quote = qutoName.toUpperCase();
  const symbol = base + "/" + quote;
  const market = {
    id: id,
    symbol: symbol,
    base: base,
    quote: quote,
    baseId: base,
    quoteId: quote,
    type: type,
    spot: type === "spot",
    swap: type === "swap",
    future: type === "future",
    option: type === "option",
    active: true,
    contract: false,
    precision: {
      amount: amountPrecision, // 写死数量
      price: pricePrecision,
    },
    limits: null,
    info: null,
  };
  return market;
};

module.exports = {
  makeNewMarket,
};
