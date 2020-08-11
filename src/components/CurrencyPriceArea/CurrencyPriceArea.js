import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Chart from "react-apexcharts";

import Converter from "./converter";
import * as UTILS from "../../utils";

const CurrencyPriceArea = ({ mode }) => {
  const [lastDate, setLastDate] = useState("");
  const [lastSellPrice, setLastSellPrice] = useState(0);
  const [dateHistory, setDateHistory] = useState([]);
  const [buyPriceHistory, setBuyPriceHistory] = useState([]);
  const [sellPriceHistory, setSellPriceHistory] = useState([]);

  useEffect(() => {
    const init = async () => {
      const USD_HISTORY = await UTILS.getUSDHistoryPrice();

      const {
        lastDate,
        lastSellPrice,
        dateHistory,
        buyPriceHistory,
        sellPriceHistory,
      } = UTILS.priceHistoryFormatter(USD_HISTORY);

      setLastDate(lastDate);
      setLastSellPrice(lastSellPrice);
      setDateHistory(dateHistory);
      setBuyPriceHistory(buyPriceHistory);
      setSellPriceHistory(sellPriceHistory);
    };

    init();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={clsx(
        mode === "converter" && "showConverter",
        "currency-price-area"
      )}
    >
      <h3>臺灣銀行 - 每日匯率</h3>

      <div className="content-wrapper">
        <div className="chart-section">
          <Chart
            options={{
              xaxis: {
                categories: dateHistory,
              },
            }}
            series={[
              {
                name: "臺灣銀行買入價格",
                data: buyPriceHistory,
              },
              {
                name: "臺灣銀行賣出價格",
                data: sellPriceHistory,
              },
            ]}
            type="line"
            width="100%"
            height={250}
          />
        </div>

        <Converter lastDate={lastDate} lastSellPrice={lastSellPrice} />
      </div>
    </div>
  );
};

export default CurrencyPriceArea;
