import React, { Component } from "react";
import { gantt } from "dhtmlx-gantt";
import GanttChart from "./components/Gantt";
import Toolbar from "./components/Toolbar";
import MessageArea from "./components/MessageArea";
import * as CONSTANT from "./utils/constant";
import * as utils from "./utils";
import "./App.css";

Date.prototype.Format = function (fmt) {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小時
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

class App extends Component {
  state = {
    isReady: false,
    isUpdating: false,
    tasks: null,
    currentZoom: "月",
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
      const NEW_DATA = {
        data: gantt.getTaskByTime().map((newItem) => ({
          id: newItem.id,
          holder: newItem.holder,
          amount: newItem.amount ?? 0,
          directMember: gantt.getChildren(newItem.id).length ?? 0,
          directMemberAmount: utils.getFirstLayerAmount(newItem.id) ?? 0,
          teamMember: utils.getAllLayerAmount(newItem.id)["teamMember"],
          teamAmount: utils.getAllLayerAmount(newItem.id)["teamAmount"],
          level: utils.getSelfLevel(newItem.id),
          start_date: new Date(newItem.start_date).Format("yyyy-MM-dd"),
          duration: 35,
          progress: utils.getSelfProgress(newItem.start_date) ?? 0.6,
          parent: newItem.parent ?? undefined,
          $open: true,
        })),
        links: gantt.getLinks(),
      };

      localStorage.setItem("hiifx_data", JSON.stringify(NEW_DATA));
      this.setState({ isUpdating: false });
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
    const { isReady, tasks, currentZoom, messages } = this.state;

    return (
      <div>
        <div className="tool-bar-container">
          <Toolbar />
        </div>
        <div className="gantt-container">
          {isReady && (
            <GanttChart
              tasks={tasks}
              zoom={currentZoom}
              onDataUpdated={this.logDataUpdate}
            />
          )}
        </div>
        <MessageArea messages={messages} />
      </div>
    );
  }
}

export default App;
