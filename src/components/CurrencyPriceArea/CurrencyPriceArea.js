import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import * as UTILS from "../../utils";

const CurrencyPriceArea = () => {
  const [dateHistory, setDateHistory] = useState([]);
  const [buyPriceHistory, setBuyPriceHistory] = useState([]);
  const [sellPriceHistory, setSellPriceHistory] = useState([]);

  useEffect(() => {
    const init = async () => {
      const USD_HISTORY = await UTILS.getUSDHistoryPrice();

      setDateHistory(USD_HISTORY.map((item) => item.date).reverse());
      setBuyPriceHistory(USD_HISTORY.map((item) => item.buyPrice));
      setSellPriceHistory(USD_HISTORY.map((item) => item.sellPrice));
    };

    init();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="currency-price-area">
      <h3>即時匯率 - 臺灣銀行</h3>

      <div className="content-wrapper">
        <div className="exchange-section">匯率換算</div>
        <div className="chart-section">
          <Chart
            options={{
              chart: {
                id: "basic-bar",
              },
              xaxis: {
                categories: dateHistory,
              },
            }}
            series={[
              {
                name: "買入價格",
                data: buyPriceHistory,
              },
              {
                name: "賣出價格",
                data: sellPriceHistory,
              },
            ]}
            type="line"
            width="100%"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyPriceArea;
