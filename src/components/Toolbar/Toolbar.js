import React from "react";
import { gantt } from "dhtmlx-gantt";
import {
  SkipBack,
  SkipForward,
  Maximize,
  ZoomIn,
  ZoomOut,
} from "react-feather";

const Toolbar = () => {
  const handleFullscreen = () => {
    gantt.ext.fullscreen.expand();

    gantt.getGridColumn("wbs").hide = true;
    gantt.getGridColumn("duration").hide = true;
    gantt.getGridColumn("start_date").hide = true;

    gantt.config.grid_width = 150;

    gantt.render();
  };

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
        <div className="zoom-icon-wrapper">
          <ZoomIn onClick={() => gantt.ext.zoom.zoomIn()} />
          <ZoomOut onClick={() => gantt.ext.zoom.zoomOut()} />
        </div>
        <div className="fullscreen-icon-wrapper" onClick={handleFullscreen}>
          <Maximize />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
