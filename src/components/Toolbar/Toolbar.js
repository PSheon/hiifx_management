import React from "react";

const Toolbar = ({ onZoomChange, zoom }) => {
  const handleZoomChange = (e) => {
    if (onZoomChange) {
      onZoomChange(e.target.value);
    }
  };

  const zoomRadios = ["日", "月"].map((value) => {
    const isActive = zoom === value;
    return (
      <label
        key={value}
        className={`radio-label ${isActive ? "radio-label-active" : ""}`}
      >
        <input
          type="radio"
          checked={isActive}
          onChange={handleZoomChange}
          value={value}
        />
        {value}
      </label>
    );
  });

  return (
    <div className="tool-bar">
      <div>
        <b>海匯團隊資金管理工具</b>
      </div>
      <div>
        <b>縮放維度：</b>
        {zoomRadios}
      </div>
    </div>
  );
};

export default Toolbar;
