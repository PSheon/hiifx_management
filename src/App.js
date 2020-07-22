import React, { Component } from "react";
import Gantt from "./components/Gantt";
import { gantt } from "dhtmlx-gantt";
import Toolbar from "./components/Toolbar";
import MessageArea from "./components/MessageArea";
import "./App.css";

Date.prototype.Format = function (fmt) {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
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

const INIT_DATA = {
  data: [
    {
      id: 1,
      text: "我 $1500",
      start_date: "2020-06-24",
      duration: 3,
      progress: 0.6,
    },
    // {
    //   id: 2,
    //   text: "Task #2",
    //   start_date: "2020-02-16",
    //   duration: 3,
    //   progress: 0.4,
    // },
  ],
  // links: [{ id: 1, source: 1, target: 2, type: "0" }],
};
class App extends Component {
  state = {
    isReady: false,
    isUpdating: false,
    tasks: null,
    currentZoom: "日",
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
      let text = item && item.text ? ` (${item.text})` : "";
      let message = `${type} ${action}: ${id} ${text}`;
      if (type === "link" && action !== "delete") {
        message += ` ( source: ${item.source}, target: ${item.target} )`;
      }
      this.addMessage(message);
      const NEW_DATA = {
        data: gantt.getTaskByTime().map((item) => ({
          id: item.id,
          text: item.text,
          start_date: new Date(item.start_date).Format("yyyy-MM-dd"),
          duration: item.duration,
          progress: 0.6,
        })),
        links: gantt.getLinks(),
      };

      localStorage.setItem("hiifx_data", JSON.stringify(NEW_DATA));
      this.setState({ isUpdating: false });
    }
  };

  handleZoomChange = (zoom) => {
    this.setState({
      currentZoom: zoom,
    });
  };

  componentDidMount() {
    const LOCAL_DATA = localStorage.getItem("hiifx_data");
    if (!!LOCAL_DATA) {
      this.setState({ tasks: JSON.parse(LOCAL_DATA), isReady: true });
    } else {
      localStorage.setItem("hiifx_data", JSON.stringify(INIT_DATA));
      this.setState({ tasks: INIT_DATA, isReady: true });
    }
  }

  render() {
    const { isReady, tasks, currentZoom, messages } = this.state;

    return (
      <div>
        <div className="zoom-bar">
          <Toolbar zoom={currentZoom} onZoomChange={this.handleZoomChange} />
        </div>
        <div className="gantt-container">
          {isReady && (
            <Gantt
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
