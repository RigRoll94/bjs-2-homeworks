function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let sum = 0;
  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = arr.reduce((acc, item) => acc + item, 0)
  let avg = Number((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    sum = arr.reduce((acc, item) => acc + item, 0)
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else { 
  return Math.max(...arr) - Math.min(...arr);
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
         sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
          }
      }
    }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let totalArr = func(...arrOfArr[i]);
    if (totalArr >= maxWorkerResult) {
      maxWorkerResult = totalArr;
    } 
  }
    return maxWorkerResult;
}
