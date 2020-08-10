import React, { Component } from "react";
import clsx from "clsx";
import { gantt } from "dhtmlx-gantt";
import PWAPrompt from "react-ios-pwa-prompt";

import GanttChart from "./components/Gantt";
import Toolbar from "./components/Toolbar";
import CurrencyPriceArea from "./components/CurrencyPriceArea";
// import MessageArea from "./components/MessageArea";
import * as CONSTANT from "./utils/constant";
import * as utils from "./utils";
import "./App.css";

class App extends Component {
  state = {
    isReady: false,
    isUpdating: false,
    tasks: null,
    currentZoom: "月",
    currentMode: "chart", // chart, converter
    messages: [],
  };

  addMessage(message) {
    const maxLogLength = 5;
    const newMessate = { message };
    const messages = [newMessate, ...this.state.messages];

    if (messages.length > maxLogLength) {
      messages.length = maxLogLength;
    }
    this.setState({ messages });
  }

  logDataUpdate = (type, action, item, id) => {
    if (this.state.isUpdating === false) {
      this.setState({ isUpdating: true });
      let holder = item && item.holder ? ` (${item.holder})` : "";
      let message = `${type} ${action}: ${id} ${holder}`;
      if (type === "link" && action !== "delete") {
        message += ` ( source: ${item.source}, target: ${item.target} )`;
      }
      this.addMessage(message);
      const { data: currentData, links: currentLinks } = gantt.serialize();
      const NEW_DATA = {
        data: currentData.map((newItem) => ({
          ...newItem,
          end_date: undefined,
          directMember: gantt.getChildren(newItem.id).length ?? 0,
          directMemberAmount: utils.getFirstLayerAmount(newItem.id) ?? 0,
          teamMember: utils.getAllLayerAmount(newItem.id)["teamMember"],
          teamAmount: utils.getAllLayerAmount(newItem.id)["teamAmount"],
          level: utils.getSelfLevel(newItem.id),
          duration: 35,
          progress: utils.getSelfProgress(newItem.start_date) ?? 0.6,
          $open: true,
        })),
        links: currentLinks,
      };

      localStorage.setItem("hiifx_data", JSON.stringify(NEW_DATA));
      this.setState({ isUpdating: false });
    }
  };

  updateImportData = () => {
    this.setState({ isReady: false });
    const LOCAL_DATA = localStorage.getItem("hiifx_data");
    this.setState({ tasks: JSON.parse(LOCAL_DATA), isReady: true });
    gantt.modalbox.hide(window.importBox);
  };

  handleToggleMode = () => {
    if (this.state.currentMode === "chart") {
      this.setState({ currentMode: "converter" });
    } else {
      this.setState({ currentMode: "chart" });
    }
  };

  componentDidMount() {
    const LOCAL_DATA = localStorage.getItem("hiifx_data");
    if (!!LOCAL_DATA) {
      this.setState({ tasks: JSON.parse(LOCAL_DATA), isReady: true });
    } else {
      localStorage.setItem("hiifx_data", JSON.stringify(CONSTANT.INIT_DATA));
      this.setState({ tasks: CONSTANT.INIT_DATA, isReady: true });
    }
  }

  render() {
    // const { isReady, tasks, currentZoom, messages, currentMode } = this.state;
    const { isReady, tasks, currentZoom, currentMode } = this.state;

    return (
      <div>
        <div className="tool-bar-container">
          <Toolbar handleImportData={this.updateImportData} />
        </div>
        <div id="rotate-hint">
          <div id="rotate-icon-wrapper" />
          <div id="rotate-hint-wrapper">請翻轉手機</div>
        </div>
        <div
          className={clsx(
            currentMode === "converter" && "showConverter",
            "gantt-container"
          )}
        >
          {isReady && (
            <GanttChart
              tasks={tasks}
              zoom={currentZoom}
              onDataUpdated={this.logDataUpdate}
            />
          )}
          <i
            className={clsx(
              currentMode === "chart" ? "fa-area-chart" : "fa-home",
              "fa gantt-converter"
            )}
            onClick={this.handleToggleMode}
          />
        </div>
        <div
          className={clsx(
            currentMode === "converter" && "showConverter",
            "tool-section"
          )}
        >
          <CurrencyPriceArea mode={currentMode} />
          {/* <MessageArea messages={messages} /> */}
        </div>
        <PWAPrompt />
      </div>
    );
  }
}

export default App;
