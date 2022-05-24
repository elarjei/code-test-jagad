export const sumOfNumbers = function (
  numberList: number[]
) {
  let sumNumbers = 0 as number

  for(let i = 0; i < numberList.length; i++) {
    sumNumbers += numberList[i];
  }

  return  sumNumbers
}

export const averageOfNumbers = function (
  numberList: number[]
) {
  const sumNumbers = sumOfNumbers(numberList) as number
  const totalNumbers = numberList.length as number

  return  sumNumbers / totalNumbers
}

export const squareRoot = function (
  number: number
) {
  let x: number
  let y = 5 as number

  for(let i = 0; i < 20; i++) {
    x = number / y;
    y = averageOfNumbers([x, y]);
  }

  return y;
}

export const isMultipleOfNumber = function (
  number: number,
  numberComparator: number
) {
  return number % numberComparator === 0
}
