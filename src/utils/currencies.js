import axios from "axios";
import { gantt } from "dhtmlx-gantt";
import cheerio from "cheerio";

const CORS = "https://cors-anywhere.herokuapp.com";
const USD_CURRENCY_API_ENDPOINT =
  "https://rate.bot.com.tw/xrt/quote/l6m/USD-TWD";

const hasLocalHistoryPrice = (LOCAL_HISTORY_PRICE) => {
  if (!LOCAL_HISTORY_PRICE) return false;

  const lastDate = LOCAL_HISTORY_PRICE[0]["date"];
  const currentWeekDay = new Date().getDay();
  const gapDays =
    Math.ceil(
      Math.abs(new Date(lastDate) - new Date()) / (1000 * 60 * 60 * 24)
    ) - 1;

  // 超過一天
  if (gapDays > 0) {
    return false;
  }
  // 週末
  if (currentWeekDay === 6 && gapDays > 1) {
    return false;
  }
  if (currentWeekDay === 0 && gapDays > 2) {
    return false;
  }

  return true;
};

export const getUSDHistoryPrice = () => {
  const LOCAL_HISTORY_PRICE = JSON.parse(
    localStorage.getItem("hiifx_history_price")
  );

  if (hasLocalHistoryPrice(LOCAL_HISTORY_PRICE)) {
    return LOCAL_HISTORY_PRICE;
  }
  gantt.message({
    type: "info",
    text: "更新匯率中~~",
  });
  console.log("Fetch price history");

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

          localStorage.setItem(
            "hiifx_history_price",
            JSON.stringify(CURRENCY_HISTORY)
          );
          gantt.message({
            type: "info",
            text: "匯率已更新~~🎉🎉",
          });
          resolve(CURRENCY_HISTORY);
        }
      })
      .catch((error) => {
        gantt.message({
          type: "error",
          text: "匯率未更新~~🎉🎉",
        });
        reject(error);
      });
  });
};

export const priceHistoryFormatter = (USD_HISTORY) => {
  const data = USD_HISTORY.reverse();

  return {
    lastDate: data[data.length - 1].date,
    lastSellPrice: data[data.length - 1].sellPrice,
    dateHistory: data.map((item) => item.date),
    buyPriceHistory: data.map((item) => item.buyPrice),
    sellPriceHistory: data.map((item) => item.sellPrice),
  };
};
