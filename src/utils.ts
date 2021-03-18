import { RANDOM_MAX, RANDOM_MIN, NUMERATOR, DENOMINATOR } from './constants';

const objectArraySort = function (keyName:string) {
  return function (objectN:any, objectM:any) {
    var valueN = objectN[keyName];
    var valueM = objectM[keyName];
    if (valueN < valueM) return 1;
    else if (valueN > valueM) return -1;
    else return 0;
  };
};

const searchRanking = (userID:string, arr:any[]) => {
  let result = null;
  arr.forEach((item, index) => {
    if (item.userID === userID) {
      result = index + 1;
    }
  });
  return result;
};

export const formatData = (arr:any[]) => {
  const newArr = [...arr].map((item) => {
    return {
      ...item,
      score: (item.score +=
        Math.floor(Math.random() * DENOMINATOR) < NUMERATOR
          ? Math.floor(Math.random() * RANDOM_MAX + RANDOM_MIN)
          : 0)
    };
  });
  newArr.sort(objectArraySort('score'));

  return arr.map((item) => {
    return {
      ...item,
      ranking: searchRanking(item.userID, newArr)
    };
  });
};
