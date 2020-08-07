const axios = require("axios");
const cheerio = require("cheerio");

const USD_CURRENCY_API_ENDPOINT =
  "https://rate.bot.com.tw/xrt/quote/l6m/USD-TWD";

let CURRENCY_HISTORY = [];

axios({
  method: "GET",
  url: USD_CURRENCY_API_ENDPOINT,
  responseType: "json",
})
  .then((response) => {
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      $("tbody > tr").each(function () {
        let currentInfo = {
          date: undefined,
          buyPrice: undefined,
          sellPrice: undefined,
        };

        $(this)
          .find("td")
          .each(function (tdIndex) {
            if (tdIndex === 0) {
              currentInfo["date"] = $(this).text();
            }
            if (tdIndex === 2) {
              currentInfo["buyPrice"] = $(this).text();
            }
            if (tdIndex === 3) {
              currentInfo["sellPrice"] = $(this).text();
            }
          });

        if (
          currentInfo["date"] &&
          currentInfo["buyPrice"] &&
          currentInfo["sellPrice"]
        ) {
          CURRENCY_HISTORY.push(currentInfo);
        }
      });

      console.log("CURRENCY_HISTORY, ", CURRENCY_HISTORY);
    }
  })
  .catch((err) => {
    throw err;
  });
