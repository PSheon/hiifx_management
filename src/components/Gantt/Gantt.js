import React, { Component } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_fullscreen.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_quick_info.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_undo.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_keyboard_navigation.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_multiselect.js";
import "dhtmlx-gantt/codebase/locale/locale_cn.js";
import "./dhtmlxgantt_material.css";

import * as utils from "../../utils";
import * as CONSTANT from "../../utils/constant";

export default class Gantt extends Component {
  constructor(props) {
    super(props);
    this.initZoom();
  }

  // instance of gantt.dataProcessor
  dataProcessor = null;

  initZoom() {
    gantt.ext.zoom.init(CONSTANT.ZOOM_CONFIG);
  }

  setZoom(value) {
    gantt.ext.zoom.setLevel(value);
  }

  initGanttDataProcessor() {
    /**
     * type: "task"|"link"
     * action: "create"|"update"|"delete"
     * item: data object object
     */
    const onDataUpdated = this.props.onDataUpdated;
    this.dataProcessor = gantt.createDataProcessor((type, action, item, id) => {
      return new Promise((resolve, reject) => {
        if (onDataUpdated) {
          onDataUpdated(type, action, item, id);
        }

        // if onDataUpdated changes returns a permanent id of the created item, you can return it from here so dhtmlxGantt could apply it
        // resolve({id: databaseId});
        return resolve();
      });
    });
  }

  shouldComponentUpdate(nextProps) {
    return this.props.zoom !== nextProps.zoom;
  }

  componentDidMount() {
    gantt.addMarker({
      start_date: new Date(),
      css: "today",
      text: "今天",
      title: utils.dateToStr(new Date()),
    });

    gantt.config.keyboard_navigation_cells = true;
    gantt.config.multiselect = true;
    gantt.config.quickinfo_buttons = ["icon_edit", "icon_delete"];
    gantt.config.reorder_grid_columns = true;
    gantt.config.order_branch = true;
    gantt.config.keep_grid_width = true;
    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.config.columns = [
      {
        name: "wbs",
        label: "編號",
        align: "center",
        max_width: 64,
        resize: true,
        template: gantt.getWBSCode,
      },
      {
        name: "holder",
        label: "投資人",
        min_width: 160,
        max_width: 200,
        tree: true,
        resize: true,
        editor: utils.holderEditor,
      },
      {
        name: "amount",
        label: "投資額",
        align: "center",
        min_width: 64,
        max_width: 80,
        resize: true,
        editor: utils.amountEditor,
      },
      {
        name: "start_date",
        label: "初始託管日",
        align: "center",
        min_width: 80,
        max_width: 96,
        resize: true,
        editor: utils.startDateEditor,
      },
      {
        name: "add_buttons",
        label: `<div class="gantt_grid_head_cell gantt_grid_head_add" onclick="gantt.createTask({duration: 35})"><i class="fa fa-plus"></i></div>`,
        align: "center",
        max_width: 40,
        template: (task) =>
          `<i class="fa gantt_button_grid gantt_grid_add fa-plus" onclick="gantt.createTask({duration: 35}, ${task.id});"></i>`,
      },
    ];
    gantt.config.lightbox.sections = [
      {
        name: "holder",
        height: 30,
        map_to: "holder",
        type: "textarea",
      },
      {
        name: "amount",
        height: 30,
        default_value: "0",
        map_to: "amount",
        type: "textarea",
      },
      {
        name: "parent",
        type: "parent",
        allow_root: "true",
        root_label: "無推薦經紀人",
        template: (start, end, ev) =>
          ev.id === 0 ? "無推薦經紀人" : ev.holder,
      },
      { name: "time", map_to: "auto", type: "duration" },
      {
        name: "profit",
        map_to: { start_date: "profit_date" },
        type: "duration_optional",
        button: true,
        single_date: true,
      },
    ];
    gantt.locale.labels["section_holder"] = "投資人";
    gantt.locale.labels["section_amount"] = "投資額";
    gantt.locale.labels["section_parent"] = "推薦經紀人";
    gantt.locale.labels["section_time"] = "託管時間";
    gantt.locale.labels["icon_delete"] = "刪除紀錄";
    gantt.locale.labels["icon_edit"] = "編輯紀錄";
    gantt.locale.labels["confirm_deleting"] = "是否刪除紀錄？";
    gantt.locale.labels["link"] = "連結";
    gantt.locale.labels["confirm_link_deleting"] = "將被刪除";
    gantt.locale.labels["message_cancel"] = "關閉";
    gantt.locale.labels["icon_save"] = "儲資金紀錄";
    gantt.locale.labels["icon_cancel"] = "取消";
    gantt.locale.labels["section_profit"] = "最近一次獲利紀錄";
    gantt.locale.labels["profit_enable_button"] = "加入獲利紀錄";
    gantt.locale.labels["profit_disable_button"] = "移除獲利紀錄";

    gantt.attachEvent("onLightboxSave", function (id, item) {
      if (!item.holder) {
        gantt.message({ type: "error", text: "請輸入投資人" });
        return false;
      }
      if (!item.amount || isNaN(item.amount)) {
        gantt.message({
          type: "error",
          text: "請輸入正確的投資額",
        });
        return false;
      }
      item.progress = 0.5;
      item.directMember = 0;
      item.directMemberAmount = 0;
      item.teamMember = 0;
      item.teamAmount = 0;
      return true;
    });
    gantt.attachEvent("onBeforeLinkAdd", function (id, link) {
      if (link.type !== "1") {
        gantt.message({
          type: "error",
          text: "請從託管開始日開始連接",
        });
        return false;
      }
    });

    gantt.templates.task_class = function (start, end, task) {
      const currentLayer = (gantt.getWBSCode(task).match(/\./g) || []).length;
      const LAYER_TABLE = {
        0: "top-layer",
        1: "first-layer",
        2: "second-layer",
        3: "third-layer",
      };
      return LAYER_TABLE[currentLayer];
    };
    gantt.templates.quick_info_title = (start, end, task) =>
      `${task.holder} 綁定 ${task.amount} 美金`;
    gantt.templates.quick_info_content = (start, end, task) =>
      `身份： ${utils.levelConverter(task.level)} </br>
      自身綁定： ${task.amount} </br>
      有效直推：${task["directMember"]} </br>
      直推綁定： ${task["directMemberAmount"]} </br>
      團隊人數： ${task["teamMember"]} </br>
      團隊綁定： ${task["teamAmount"]} </br>
      `;
    gantt.templates.scale_cell_class = (date) => {
      if (date.getDay() === 0 || date.getDay() === 6) {
        return "weekend";
      }
    };
    gantt.templates.timeline_cell_class = (task, date) => {
      if (date.getDay() === 0 || date.getDay() === 6) {
        return "weekend";
      }
    };
    gantt.templates.task_text = (start, end, task) =>
      task.holder && task.amount
        ? `<b>${task.holder}</b> &nbsp; 綁定 &nbsp; <b>${task.amount}</b> &nbsp; 美金`
        : "";
    gantt.templates.rightside_text = (start, end, task) => {
      const entrustInDate =
        (new Date().getTime() - new Date(start).getTime()) / (1000 * 3600 * 24);
      if (entrustInDate > 0) {
        return "<b>託管 </b>" + Math.floor(entrustInDate) + "天";
      } else {
        return "<b>尚未開始託管</b>";
      }
    };
    gantt.templates.progress_text = (start, end, task) =>
      "<span class='progress_text'>" +
      gantt.getChildren(task.id).length +
      " 直推 </span>";
    gantt.templates.link_class = (link) => {
      const LINK_TABLE = {
        1: "first-link",
        2: "second-link",
        3: "third-link",
      };
      return LINK_TABLE[link.source] ?? "";
    };
    gantt.templates.grid_folder = (item) =>
      `<div class='gantt_tree_icon gantt_folder_${
        item.$open ? "open" : "closed"
      } ${item.level}'></div>`;
    gantt.templates.grid_file = (item) =>
      `<div class='gantt_tree_icon gantt_file ${item.level}'></div>`;
    gantt.templates.drag_link = (from, from_start, to, to_start) => {
      from = gantt.getTask(from);
      let text = `推薦人 > <b>${from.holder}</b> ${
        from_start ? "" : "結束"
      }<br/>`;
      if (to) {
        to = gantt.getTask(to);
        text += `投資人 > <b>${to.holder}</b> ${to_start ? "" : "結束"} <br/>`;
      }
      return text;
    };
    gantt.templates.link_description = function (link) {
      let from = gantt.getTask(link.source),
        to = gantt.getTask(link.target),
        types = gantt.config.links;

      let from_start = link.type === types.start_to_start;
      let to_start =
        link.type === types.finish_to_start ||
        link.type === types.start_to_start;
      let text = `推薦人 <b>${from.holder}</b> ${
        from_start ? "" : "結束"
      } <br/>`;
      text += `與 投資人 <b>${to.holder}</b> ${to_start ? "" : "結束"} <br/>`;
      return text;
    };

    gantt.addTaskLayer({
      renderer: {
        render: function draw_profit(task) {
          if (task.profit_date) {
            var el = document.createElement("div");
            el.className = "profit";
            var sizes = gantt.getTaskPosition(task, task.profit_date);

            el.style.left = sizes.left + "px";
            el.style.top = sizes.top + "px";

            el.setAttribute(
              "title",
              gantt.templates.task_date(task.profit_date)
            );
            return el;
          }
          return false;
        },
        // define getRectangle in order to hook layer with the smart rendering
        getRectangle: function (task, view) {
          if (task.profit_date) {
            return gantt.getTaskPosition(task, task.profit_date);
          }
          return null;
        },
      },
    });

    gantt.attachEvent("onTaskLoading", function (task) {
      if (task.profit_date)
        task.profit_date = gantt.date.parseDate(task.profit_date, "xml_date");
      return true;
    });

    const { tasks } = this.props;
    gantt.init(this.ganttContainer);
    this.initGanttDataProcessor();
    gantt.parse(tasks);
  }

  componentWillUnmount() {
    if (this.dataProcessor) {
      this.dataProcessor.destructor();
      this.dataProcessor = null;
    }
  }

  render() {
    const { zoom } = this.props;
    this.setZoom(zoom);
    return (
      <div
        ref={(input) => {
          this.ganttContainer = input;
        }}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}
