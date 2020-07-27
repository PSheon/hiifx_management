import React, { Component } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_fullscreen.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker.js";
import "dhtmlx-gantt/codebase/ext/dhtmlxgantt_quick_info.js";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

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
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: "week", step: 1, format: "Week #%W" },
            { unit: "day", step: 1, format: "%d %M" },
          ],
        },
        {
          name: "月",
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: "month", step: 1, format: "%F" },
            { unit: "week", step: 1, format: "#%W" },
          ],
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
      min: 25,
      max: 50,
    };
    const startDateEditor = {
      type: "date",
      map_to: "start_date",
      min: new Date(2018, 0, 1),
      max: new Date(),
    };

    gantt.config.work_time = true;
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
        max_width: 180,
        tree: true,
        resize: true,
        editor: holderEditor,
      },
      {
        name: "amount",
        label: "投資額",
        align: "center",
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
    gantt.locale.labels.icon_save = "儲資金紀錄";
    gantt.locale.labels.icon_cancel = "取消";

    const dateToStr = gantt.date.date_to_str(gantt.config.task_date);
    gantt.addMarker({
      start_date: new Date(), //a Date object that sets the marker's date
      css: "today", //a CSS class applied to the marker
      text: "今天", //the marker title
      title: dateToStr(new Date()), // the marker's tooltip
    });

    gantt.templates.scale_cell_class = function (date) {
      if (!gantt.isWorkTime(date)) {
        return "weekend";
      }
    };
    gantt.templates.timeline_cell_class = function (task, date) {
      if (!gantt.isWorkTime({ task: task, date: date })) {
        return "weekend";
      }
    };

    gantt.templates.task_text = (start, end, task) =>
      `<b>${task.holder}</b> > <b>${task.amount}</b> 美金 ${task.duration} 天 `;

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
        onTouchStart={() => gantt.ext.fullscreen.expand()}
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  }
}
