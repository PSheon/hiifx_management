import React, { useState, useEffect } from "react";
import { gantt } from "dhtmlx-gantt";
import {
  Menu,
  ChevronRight,
  SkipBack,
  SkipForward,
  Maximize,
  ZoomIn,
  ZoomOut,
  Settings,
} from "react-feather";
import fileDownloader from "js-file-download";

import * as CONSTANT from "../../utils/constant";
import * as utils from "../../utils";

const Toolbar = ({ handleImportData }) => {
  const [isFullGrid, setIsFullGrid] = useState(true);

  const handleToggleGrid = () => {
    setIsFullGrid(!isFullGrid);

    if (isFullGrid) {
      gantt.getGridColumn("wbs").hide = true;
      gantt.getGridColumn("start_date").hide = true;

      gantt.config.grid_width = 150;
    } else {
      gantt.getGridColumn("wbs").hide = false;
      gantt.getGridColumn("start_date").hide = false;

      gantt.config.grid_width = 300;
    }
    gantt.render();
  };

  const handleFullscreen = () => {
    gantt.ext.fullscreen.expand();
  };

  const restoreData = () => {
    localStorage.setItem("hiifx_data", JSON.stringify(CONSTANT.INIT_DATA));
    window.location.reload();
  };

  const exportAndDownload = () => {
    const result = gantt.serialize();

    fileDownloader(
      JSON.stringify(result),
      `${new Date()
        .toISOString()
        .substring(0, 10)
        .split("-")
        .join("")}_海匯團隊.json`
    );
  };

  const handleExportModel = () => {
    window.importBox = gantt.modalbox({
      title: "設定",
      text: `
            <label for="data-import" class="data-import-label">
              匯入紀錄
            </label>
            <input id="data-import" type="file" onchange="gantt.importFromJSON(this)" accept="application/json" />
            `,
      width: "500px",
      buttons: [
        {
          label: "匯出紀錄",
          css: "data_export_btn",
          value: "export",
        },
        {
          label: "重設紀錄",
          css: "data_export_restore",
          value: "restore",
        },
        { label: "取消", css: "data_cancel_btn", value: "cancel" },
      ],
      callback: function (action) {
        if (action === "restore") {
          restoreData();
        }
        if (action === "export") {
          exportAndDownload();
        }
        if (action === "cancel") {
          // gantt.alert(action);
        }
      },
    });
  };

  useEffect(() => {
    const importFromJSON = (event) => {
      if (event.files.length > 0) {
        const FILE_READER = new FileReader();

        FILE_READER.addEventListener("load", () => {
          try {
            const NEW_DATA = JSON.parse(FILE_READER.result);
            const validatedNewData = utils.sterilizateData(NEW_DATA);

            localStorage.setItem(
              "hiifx_data",
              JSON.stringify(validatedNewData)
            );
            gantt.message({
              type: "info",
              text: "匯入成功~~🎉🎉",
            });

            handleImportData();
          } catch (err) {
            gantt.message({
              type: "error",
              text: "匯入資料格式錯誤 😱😱",
            });
          }
        });
        FILE_READER.addEventListener("error", () => {
          gantt.message({
            type: "error",
            text: "匯入資料時發生錯誤 😱😱",
          });
        });

        FILE_READER.readAsText(event.files[0]);
      }
    };

    gantt.importFromJSON = importFromJSON;
  }, [handleImportData]);

  return (
    <div className="tool-bar">
      <div className="logo-wrapper noselect" onClick={handleToggleGrid}>
        {isFullGrid ? <Menu /> : <ChevronRight />}
        <b className="short-LOGO">海匯</b>
        <b className="full-LOGO">海匯團隊資金管理工具</b>
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
        <div className="export-icon-wrapper" onClick={handleExportModel}>
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
