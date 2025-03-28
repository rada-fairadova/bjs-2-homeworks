"use strict";

function solveEquation(a, b, c) {
  if (a === 0) {
      if (b === 0) {
          return []; 
      }
      return [-c / b];
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a); 
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2]; 
  } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
  } else {
      return []; 
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthlyRate = (percent / 100) / 12; 
    const loanBody = amount - contribution; 

    if (loanBody <= 0) {
        return 0; 
    }


    const payment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
    const totalPayment = payment * countMonths;
    return Number(totalPayment.toFixed(2)); 
}

// Примеры использования функций
console.log(solveEquation(1, -3, 2)); 
console.log(solveEquation(1, 2, 1)); 

console.log(calculateTotalMortgage(10, 0, 50000, 12)); 
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); 
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 0, 10000, 36)); 
console.log(calculateTotalMortgage(15, 0, 10000, 36)); 