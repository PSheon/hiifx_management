import { gantt } from "dhtmlx-gantt";

export const INIT_DATA = {
  data: [
    {
      id: 1,
      holder: "自己",
      start_date: "2020-07-16 00:00",
      amount: 1500,
      duration: 35,
      directMember: 5,
      directMemberAmount: 23600,
      teamMember: 6,
      teamAmount: 23600,
      progress: 0.51,
      parent: 0,
      level: "ib",
      end_date: "2020-08-20 00:00",
      $open: true,
    },
    {
      id: 2,
      holder: "投資人 #1",
      start_date: "2020-07-20 00:00",
      parent: 1,
      amount: 1500,
      duration: 35,
      directMember: 1,
      directMemberAmount: 0,
      teamMember: 1,
      teamAmount: 0,
      progress: 0.39,
      level: "trader",
      end_date: "2020-08-24 00:00",
      $open: true,
    },
    {
      duration: 35,
      id: 1596379445693,
      start_date: "2020-07-24 00:00",
      text: "新任務",
      parent: "2",
      progress: 0.28,
      holder: "投資人 #6",
      amount: "0",
      profit_date: null,
      directMember: 0,
      directMemberAmount: 0,
      teamMember: 0,
      teamAmount: 0,
      level: "trader",
      end_date: "2020-08-28 00:00",
      $open: true,
    },
    {
      duration: 35,
      id: 1596379445681,
      start_date: "2020-07-16 00:00",
      text: "新任務",
      parent: "1",
      progress: 0.51,
      holder: "投資人 #2",
      amount: "1500",
      profit_date: null,
      directMember: 0,
      directMemberAmount: 0,
      teamMember: 0,
      teamAmount: 0,
      level: "trader",
      end_date: "2020-08-20 00:00",
      $open: true,
    },
    {
      duration: 35,
      id: 1596379445695,
      start_date: "2020-07-16 00:00",
      text: "新任務",
      parent: "1",
      progress: 0.51,
      holder: "投資人 #3",
      amount: "9000",
      profit_date: null,
      directMember: 0,
      directMemberAmount: 0,
      teamMember: 0,
      teamAmount: 0,
      level: "trader",
      end_date: "2020-08-20 00:00",
      $open: true,
    },
    {
      duration: 35,
      id: 1596379445697,
      start_date: "2020-07-18 00:00",
      text: "新任務",
      parent: "1",
      progress: 0.45,
      holder: "投資人 #4",
      amount: "1600",
      profit_date: null,
      directMember: 0,
      directMemberAmount: 0,
      teamMember: 0,
      teamAmount: 0,
      level: "trader",
      end_date: "2020-08-22 00:00",
      $open: true,
    },
    {
      duration: 35,
      id: 1596379445699,
      start_date: "2020-07-12 00:00",
      text: "新任務",
      parent: "1",
      progress: 0.62,
      holder: "投資人 #1",
      amount: "10000",
      profit_date: null,
      directMember: 0,
      directMemberAmount: 0,
      teamMember: 0,
      teamAmount: 0,
      level: "trader",
      end_date: "2020-08-16 00:00",
      $open: true,
    },
  ],
  links: [
    {
      id: 1,
      source: 1,
      target: 2,
      type: "1",
    },
    {
      source: "1",
      target: "1596379445681",
      type: "1",
      id: 1596379445692,
    },
    {
      source: "2",
      target: "1596379445693",
      type: "1",
      id: 1596379445694,
    },
    {
      source: "1",
      target: "1596379445695",
      type: "1",
      id: 1596379445696,
    },
    {
      source: "1",
      target: "1596379445697",
      type: "1",
      id: 1596379445698,
    },
    {
      source: "1",
      target: "1596379445699",
      type: "1",
      id: 1596379445700,
    },
  ],
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
