import { gantt } from "dhtmlx-gantt";

export const INIT_DATA = {
  data: [
    {
      id: 1,
      holder: "自己",
      start_date: "2020-01-01",
      amount: 1500,
      duration: 30,
      progress: 0.6,
      $open: true,
    },
    {
      id: 2,
      holder: "投資人 #1",
      start_date: "2020-01-01",
      parent: 1,
      amount: 1500,
      duration: 30,
      progress: 0.4,
    },
  ],
  links: [{ id: 1, source: 1, target: 2, type: "0" }],
};

export const ZOOM_CONFIG = {
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
};
