import { gantt } from "dhtmlx-gantt";

export const findAllChildren = (uid, results, depth) => {
  let childSet = new Set(gantt.getChildren(uid));
  console.log("childSet, ", childSet);
};

export const getAllLayerAmount = (uid) => {
  let children = [];
  findAllChildren(uid, children, 0);
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
