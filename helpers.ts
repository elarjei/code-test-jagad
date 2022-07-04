export const sumOfNumbers = function (
  numberList: number[],
) {
  let sumNumbers: number = 0;

  for(let i = 0; i < numberList.length; i++) {
    sumNumbers += numberList[i];
  }

  return  sumNumbers;
}

export const averageOfNumbers = function (
  numberList: number[],
) {
  const sumNumbers: number = sumOfNumbers(numberList);
  const totalNumbers: number = numberList.length;

  return  sumNumbers / totalNumbers;
}

export const squareRoot = function (
  number: number,
) {
  let x: number;
  let y: number = 5;

  for(let i: number = 0; i < 20; i++) {
    x = number / y;
    y = averageOfNumbers([x, y]);
  }

  return y;
}

export const isMultipleOfNumber = function (
  number: number,
  numberComparator: number,
) {
  return number % numberComparator === 0;
}
