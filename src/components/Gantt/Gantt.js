import React, { Component } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_fullscreen.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_quick_info.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_undo.js";
import "dhtmlx-gantt/codebase/locale/locale_cn.js";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

import * as utils from "../../utils";

export default class Gantt extends Component {
  constructor(props) {
    super(props);
    this.initZoom();
  }

  // instance of gantt.dataProcessor
  dataProcessor = null;

  initZoom() {
    gantt.ext.zoom.init({
      levels: [
        {
          name: "日",
          scale_height: 27,
          min_column_width: 80,
          scales: [{ unit: "day", step: 1, format: "%d %M" }],
        },
        {
          name: "週",
          scale_height: 50,
          min_column_width: 50,
          scales: [
            {
              unit: "week",
              step: 1,
              format: function (date) {
                var dateToStr = gantt.date.date_to_str("%d %M");
                var endDate = gantt.date.add(date, -6, "day");
                var weekNum = gantt.date.date_to_str("%W")(date);
                return (
                  "#" +
                  weekNum +
                  ", " +
                  dateToStr(date) +
                  " - " +
                  dateToStr(endDate)
                );
              },
            },
            { unit: "day", step: 1, format: "%j %D" },
          ],
        },
        {
          name: "月",
          scale_height: 50,
          min_column_width: 120,
          scales: [
            { unit: "month", format: "%F, %Y" },
            { unit: "week", format: "Week #%W" },
          ],
        },
        {
          name: "季",
          height: 50,
          min_column_width: 90,
          scales: [
            { unit: "month", step: 1, format: "%M" },
            {
              unit: "quarter",
              step: 1,
              format: function (date) {
                var dateToStr = gantt.date.date_to_str("%M");
                var endDate = gantt.date.add(
                  gantt.date.add(date, 3, "month"),
                  -1,
                  "day"
                );
                return dateToStr(date) + " - " + dateToStr(endDate);
              },
            },
          ],
        },
        {
          name: "年",
          scale_height: 50,
          min_column_width: 30,
          scales: [{ unit: "year", step: 1, format: "%Y" }],
        },
      ],
    });
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
    const holderEditor = { type: "text", map_to: "holder" };
    const amountEditor = { type: "text", map_to: "amount" };
    const durationEditor = {
      type: "number",
      map_to: "duration",
      min: 0,
      max: 50,
    };
    const startDateEditor = {
      type: "date",
      map_to: "start_date",
      min: new Date(2018, 0, 1),
      max: new Date(),
    };
    const dateToStr = gantt.date.date_to_str(gantt.config.task_date);
    gantt.addMarker({
      start_date: new Date(),
      css: "today",
      text: "今天",
      title: dateToStr(new Date()),
    });

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
        min_width: 150,
        max_width: 200,
        tree: true,
        resize: true,
        editor: holderEditor,
      },
      {
        name: "amount",
        label: "投資額",
        align: "center",
        min_width: 40,
        resize: true,
        editor: amountEditor,
      },
      {
        name: "start_date",
        label: "初始託管日",
        align: "center",
        max_width: 96,
        resize: true,
        editor: startDateEditor,
      },
      {
        name: "duration",
        label: "託管時間",
        align: "center",
        max_width: 64,
        resize: true,
        editor: durationEditor,
      },
      { name: "add", width: 40 },
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
    ];
    gantt.locale.labels["section_holder"] = "投資人";
    gantt.locale.labels["section_amount"] = "投資額";
    gantt.locale.labels["section_parent"] = "推薦經紀人";
    gantt.locale.labels["section_time"] = "託管時間";
    gantt.locale.labels["icon_delete"] = "刪除紀錄";
    gantt.locale.labels["icon_edit"] = "編輯紀錄";
    gantt.locale.labels["confirm_link_deleting"] = "將被刪除";
    gantt.locale.labels.icon_save = "儲資金紀錄";
    gantt.locale.labels.icon_cancel = "取消";

    gantt.attachEvent("onLightboxSave", function (id, item) {
      if (!item.holder) {
        gantt.message({ type: "error", text: "請輸入投資人" });
        return false;
      }
      if (!item.amount) {
        gantt.message({
          type: "error",
          text: "請輸入投資額",
        });
        return false;
      }
      return true;
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
    gantt.templates.quick_info_title = (start, end, task) => task.holder;
    gantt.templates.quick_info_content = (start, end, task) =>
      `自身綁定： ${task.amount} </br>
      有效直推：${gantt.getChildren(task.id).length} </br>
      直推綁定： ${utils.getFirstLayerAmount(task.id)} </br>
      團隊人數： ${utils.getAllLayerAmount(task.id)["teamMembers"]} </br>
      團隊綁定： ${utils.getAllLayerAmount(task.id)["teamAmount"]} </br>
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
      `<b>${task.holder}</b> > <b>${task.amount}</b> 美金`;
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
      ></div>
    );
  }
}
