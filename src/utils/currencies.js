import axios from "axios";
import cheerio from "cheerio";

const CORS = "https://cors-anywhere.herokuapp.com";
const USD_CURRENCY_API_ENDPOINT =
  "https://rate.bot.com.tw/xrt/quote/l6m/USD-TWD";

export const getUSDHistoryPrice = () => {
  let CURRENCY_HISTORY = [];

  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${CORS}/${USD_CURRENCY_API_ENDPOINT}`,
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

          resolve(CURRENCY_HISTORY);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
