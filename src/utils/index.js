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
    teamMembers: children.length,
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
