import React, { useState, useEffect } from "react";
import Flag from "react-world-flags";

const Converter = ({ lastDate, lastSellPrice }) => {
  const [isReady, setIsReady] = useState(false);
  const [exchangeBase, setExchangeBase] = useState("USD");
  const [amount, setAmount] = useState(1500);

  const handleAmountUpdate = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
  };
  const handleFlagChange = () => {
    if (exchangeBase === "USD") {
      setExchangeBase("TWD");
    } else {
      setExchangeBase("USD");
    }
  };

  const renderResult = () => {
    if (exchangeBase === "USD") {
      return `${Math.round(amount * lastSellPrice * 100) / 100} TWD`;
    } else {
      return `${Math.round((amount / lastSellPrice) * 100) / 100} USD`;
    }
  };

  useEffect(() => {
    if ((lastDate, lastSellPrice)) {
      setIsReady(true);
    }
  }, [lastDate, lastSellPrice]);

  return (
    <div className="converter-section">
      <div className="info-section">
        <p>
          <a
            href="https://rate.bot.com.tw/xrt/quote/l6m/USD-TWD"
            className="bank-link"
          >
            臺灣銀行
          </a>
          美元對新台幣匯率
        </p>
        {isReady ? (
          <p>
            <b>{`${lastDate} ${lastSellPrice}`}</b>
          </p>
        ) : (
          <p>匯率載入中</p>
        )}
      </div>
      <div className="amount-wrapper">
        <input
          className="amount-input"
          type="number"
          placeholder="金額"
          value={amount}
          onChange={handleAmountUpdate}
        />
        <Flag
          code={exchangeBase === "USD" ? 840 : 158}
          onClick={handleFlagChange}
          className="flag-button"
        />
      </div>

      <div className="friendly-info-section">
        <p className="convert-hint">
          {amount} {exchangeBase} <b>=</b>
        </p>
        <span className="converted-result">{renderResult()}</span>
      </div>
    </div>
  );
};

export default Converter;
