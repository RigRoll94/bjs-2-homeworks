"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return arr
  } else if (D === 0) {
   arr.push(-b/(2*a))
  } else if (D > 0) {
    arr.push((-b + Math.sqrt(D) )/(2*a));
    arr.push((-b - Math.sqrt(D) )/(2*a))
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let P = percent / 100 / 12;
  if ((percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) || (isNaN(percent) ||      isNaN(contribution) || isNaN(amount) || isNaN(countMonths))) {
    return false;
  }
  let monthPay = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let totalPay = monthPay * countMonths;
  return +totalPay.toFixed(2);
}