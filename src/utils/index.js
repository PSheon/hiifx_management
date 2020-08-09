import { gantt } from "dhtmlx-gantt";

export * from "./currencies";
export * from "./constant";

const isLevelIB = (data) => {
  const { amount, directMember, directMemberAmount, teamAmount } = data;
  return (
    Number(amount) >= 1500 &&
    Number(directMember) >= 4 &&
    Number(directMemberAmount) >= 9000 &&
    Number(teamAmount) >= 15000
  );
};

export const levelConverter = (level) => {
  switch (level) {
    case "ib":
      return "IB 經理人";
    case "mib":
      return "MIB 經理人";
    case "pib":
      return "PIB 經理人";
    default:
      return "投資人";
  }
};

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
  /*
    TODO implement this function
    ['trader', 'ib', 'mib', 'pib']
  */
  const selfData = gantt.getTask(uid);
  if (isLevelIB(selfData)) {
    return "ib";
  }
  return "trader";
};

export const sterilizateData = (unsafeData) => {
  const sterilizatedData = {
    data: unsafeData?.data.map((item) => ({
      id: item?.id,
      holder: item?.holder,
      amount: item?.amount,
      directMember: item?.directMember,
      directMemberAmount: item?.directMemberAmount,
      teamMember: item?.teamMember,
      teamAmount: item?.teamAmount,
      level: item?.level,
      start_date: item?.start_date,
      duration: item?.duration,
      end_date: item?.end_date,
      parent: item?.parent,
      progress: item?.progress,
      $open: true,
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
  const progress = Math.floor((entrustInDate / 35) * 100) / 100;

  if (progress <= 0) {
    return 0;
  } else if (progress >= 100) {
    return 100;
  }
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
