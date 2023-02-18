fetch(
  "https://www.worldcoinindex.com/apiservice/ticker?key=MYHmBIKDduZOFiLV30ZX4pFfjvee1So7arK&label=ethbtc-ltcbtc&fiat=btc"
)
  .then((data) => data.json())
  .then((cryptoPrices) => {
    const label = cryptoPrices.Markets[0]["Label"];
    const cryptoPrice = cryptoPrices.Markets[0]["Price"];
    const name = cryptoPrices.Markets[0]["Name"];
    const volume24H = cryptoPrices.Markets[0]["Volume_24h"];
    const crypto = document.getElementById("crypto");
    crypto.innerHTML = `${label} Price:${cryptoPrice} Vol24H:${volume24H}`;
  });
