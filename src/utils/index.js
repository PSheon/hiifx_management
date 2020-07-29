import { gantt } from "dhtmlx-gantt";

export const getAllLayerAmount = (uid) => {
  let children = [];
  let childrenAmount = [];

  const findAllChildren = (uid) => {
    gantt.getChildren(uid).forEach((item) => {
      const userInfo = gantt.getTask(item);
      children.push(userInfo["holder"]);
      childrenAmount.push(userInfo["amount"]);
      findAllChildren(item);
    });
  };

  findAllChildren(uid);

  return {
    teamMember: children.length,
    teamAmount: childrenAmount.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    ),
  };
};

export const getFirstLayerAmount = (uid) => {
  const childrenID = gantt.getChildren(uid);
  let total = 0;
  childrenID.forEach((childID) => {
    const userInfo = gantt.getTask(childID);
    total += Number(userInfo.amount ?? 0);
  });

  return total;
};

export const getSelfLevel = (uid) => {
  // TODO implement this function
  // retrun ['trader', 'ib', 'mib', 'pib']
  return "trader";
};

export const holderEditor = { type: "text", map_to: "holder" };
export const amountEditor = { type: "text", map_to: "amount" };
export const durationEditor = {
  type: "number",
  map_to: "duration",
  min: 0,
  max: 50,
};
export const startDateEditor = {
  type: "date",
  map_to: "start_date",
  min: new Date(2018, 0, 1),
  max: new Date(),
};

export const dateToStr = gantt.date.date_to_str(gantt.config.task_date);
