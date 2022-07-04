import {
  isMultipleOfNumber,
  squareRoot,
} from './helpers'

const findBiggestNumber = function(
  number: Array<number>,
) {
    let biggestNumber = 0;
    let i: number = number.length;
    let counter: number;

    for (counter = 0; counter < i; counter++) {
      if (number[counter] > biggestNumber) {
        biggestNumber = number[counter];
      }
    }

    return biggestNumber;
}

const countCharacterOccurence = function(
  text: string,
  textToCount: string,
) {
  let occurence: number;
  let textUpperCase = text.toLocaleUpperCase();
  let targetUpperCase = textToCount.toLocaleUpperCase();
  occurence = textUpperCase.split(targetUpperCase).length -1;

  return occurence;
}

const trianglePatternStars = function (
  amountOfStars: number,
) {
    let string: string = '';
    for (let i = 1; i <= amountOfStars; i++) {
      for (let j = 0; j < amountOfStars - i; j++) {
        string += ' ';
      }
      for (let k = 0; k < i; k++) {
        string += '*';
      }
      string += '\n';
    }

    return string;
}

const isPrimeNumber = function (
  number: number,
) {
  const inputSquareRoot: number = squareRoot(number)
  let numberComparator: number = 2;

  for(
    { numberComparator, inputSquareRoot };
    numberComparator <= inputSquareRoot;
    numberComparator++
  ) {
    if(isMultipleOfNumber(number, numberComparator)) {
      return false;
    }
  }

  return number > 1;
}

const factorial = function (
  number: number,
) {
  let result: number = 1;

  for(let i: number = 2; i <= number; i++) {
    result = result * i;
  }

  return result;
}

const reverseDynamicData = function (
  dynamicData: any,
) {
  const string: string = `${dynamicData}`;
  let reversedString: string = '';
  let totalWords: number = string.length - 1;

  for(totalWords; totalWords >= 0; totalWords--) {
    reversedString += string[totalWords];
  }

  return reversedString;
}

const testNumberList: number[] = [
  1, 3, 7, 8, 9, 41, 2137,
];

const testDynamicDataList: any[] = [
  2137,
  2137.41,
  'jagad',
  'Amet cillum dolore nisi occaecat culpa laboris.',
  'Sunt ea commodo labore culpa sit commodo duis deserunt dolore pariatur reprehenderit mollit occaecat. Reprehenderit amet labore id minim culpa exercitation cillum laborum dolor minim id anim amet. Ipsum culpa sint deserunt officia cillum in et elit ea in ut nostrud. Laborum adipisicing proident eiusmod consequat dolor exercitation tempor laboris enim sit eiusmod excepteur voluptate. Occaecat ipsum incididunt sit duis nostrud.',
  'Jagad G. Anjoyo Sudiro',
];

console.log(`\n-> isPrimeNumber\n`)
testNumberList.forEach(number => {
  console.log(
    `Data ${number} \nResult is ${isPrimeNumber(number)}\n`
  )
});

console.log(`\n-> factorial\n`)
testNumberList.forEach(number => {
  console.log(
    `Data ${number} \nResult is ${factorial(number)}\n`
  )
});

console.log(`\n-> reverseDynamicData\n`)
testDynamicDataList.forEach(dynamicData => {
  console.log(
    `Data ${dynamicData} \nResult is ${reverseDynamicData(dynamicData)}\n`
  )
});

console.log(`\n-> trianglePatternStars\n`)
const amountOfStars: number = 10;
console.log(
  `Data ${amountOfStars} \nResult is \n${trianglePatternStars(amountOfStars)}\n`
);

console.log(`\n-> countCharacterOccurence\n`)
const text: string = 'IFS Solusi Integrasi, PT';
const target: string = 'i'
console.log(
  `Data ${text} & ${target} \nResult is ${countCharacterOccurence(text, target)}\n`
);

const testNumber: number[] = [
  8, 20, 50, 33, 89, 35, 23, 90, 101, 77, 23
];
console.log(`\n-> findBiggestNumber\n`)
console.log(
    `Data ${testNumber} \nResult is ${findBiggestNumber(testNumber)}\n`
);
