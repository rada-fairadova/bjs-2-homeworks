function getArrayParams(...arr) {
  if (arr.length === 0) {
      return { min: 0, max: 0, avg: 0 };
  }
  
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
      if (arr[i] < min) {
          min = arr[i];
      }
      sum += arr[i];
  }

  const avg = Number((sum / arr.length).toFixed(2));
  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
      return 0;
  }
  return arr.reduce((sum, elem) => sum + elem, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
      return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
      } else {
          sumOddElement += num;
      }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
          countEvenElement++;
      }
  }

  return countEvenElement ? Number((sumEvenElement / countEvenElement).toFixed(2)) : 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
      const result = func(...arr);
      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }

  return maxWorkerResult;
}
