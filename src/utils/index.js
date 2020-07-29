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

export const sterilizateData = (unsafeData) => {
  const sterilizatedData = {
    data: unsafeData?.data.map((item) => ({
      amount: item?.amount,
      directMember: item?.directMember,
      directMemberAmount: item?.directMemberAmount,
      duration: item?.duration,
      end_date: item?.end_date,
      holder: item?.holder,
      id: item?.id,
      level: item?.level,
      parent: item?.parent,
      progress: item?.progress,
      start_date: item?.start_date,
      teamAmount: item?.teamAmount,
      teamMember: item?.teamMember,
    })),
    links: unsafeData?.links.map((item) => ({
      id: item.id,
      source: item.source,
      target: item.target,
      type: item.type,
    })),
  };

  return sterilizatedData;
};

export const getSelfProgress = (start_date) => {
  const entrustInDate =
    (new Date().getTime() - new Date(start_date).getTime()) /
    (1000 * 3600 * 24);
  return Math.floor((entrustInDate / 35) * 100) / 100;
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
