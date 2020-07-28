import React from "react";
import { gantt } from "dhtmlx-gantt";
import { SkipBack, SkipForward, Maximize } from "react-feather";

const Toolbar = ({ onZoomChange, zoom }) => {
  const handleZoomChange = (e) => {
    if (onZoomChange) {
      onZoomChange(e.target.value);
    }
  };

  const handleFullscreen = () => {
    gantt.ext.fullscreen.expand();

    gantt.getGridColumn("wbs").hide = true;
    gantt.getGridColumn("duration").hide = true;
    gantt.getGridColumn("start_date").hide = true;

    gantt.config.grid_width = 150;

    gantt.render();
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
      <div className="tool-wrapper">
        <div className="action-icon-wrapper">
          <SkipBack onClick={() => gantt.undo()} />
          <SkipForward onClick={() => gantt.redo()} />
        </div>
        <div className="fullscreen-icon-wrapper" onClick={handleFullscreen}>
          <Maximize />
        </div>
        <div>{zoomRadios}</div>
      </div>
    </div>
  );
};

export default Toolbar;
