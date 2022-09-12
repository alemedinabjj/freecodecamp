const checkCashRegister = (price, cash, cid) => {
  let change = cash - price;
  let changeArr = [];
  let totalCid = 0;
  let changeObj = {
    status: "",
    change: []
  };
  let currency = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01
  };
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  if (totalCid < change) {
    changeObj.status = "INSUFFICIENT_FUNDS";
    return changeObj;
  } else if (totalCid === change) {
    changeObj.status = "CLOSED";
    changeObj.change = cid;
    return changeObj;
  } else {
    cid = cid.reverse();
    for (let i = 0; i < cid.length; i++) {
      let temp = [cid[i][0], 0];
      while (change >= currency[cid[i][0]] && cid[i][1] > 0) {
        temp[1] += currency[cid[i][0]];
        cid[i][1] -= currency[cid[i][0]];
        change -= currency[cid[i][0]];
        change = Math.round(change * 100) / 100;
      }
      if (temp[1] > 0) {
        changeArr.push(temp);
      }
    }
  }
  if (change > 0) {
    changeObj.status = "INSUFFICIENT_FUNDS";
    return changeObj;
  } else {
    changeObj.status = "OPEN";
    changeObj.change = changeArr;
    return changeObj;
  }
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);