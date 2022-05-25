import {
  isMultipleOfNumber,
  squareRoot,
} from './helpers'

const isPrimeNumber = function (
  number: number
) {
  const inputSquareRoot = squareRoot(number) as number
  let numberComparator = 2 as number

  for(
    { numberComparator, inputSquareRoot };
    numberComparator <= inputSquareRoot;
    numberComparator++
  ) {
    if(isMultipleOfNumber(number, numberComparator)) {
      return false
    }
  }

  return number > 1
}

const factorial = function (
  number: number
) {
  let result = 1 as number;

  for(let i = 2; i <= number; i++) {
    result = result * i
  }

  return result;
}

const reverseDynamicData = function (
  dynamicData: any
) {
  const string = `${dynamicData}` as string
  let reversedString = '' as string
  let totalWords = string.length - 1 as number

  for(totalWords; totalWords >= 0; totalWords--) {
    reversedString += string[totalWords];
  }

  return reversedString;
}

const testNumberList: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 41, 2137
];

const testDynamicDataList: any[] = [
  2137,
  2137.41,
  'jagad',
  'Amet cillum dolore nisi occaecat culpa laboris.',
  'Sunt ea commodo labore culpa sit commodo duis deserunt dolore pariatur reprehenderit mollit occaecat. Reprehenderit amet labore id minim culpa exercitation cillum laborum dolor minim id anim amet. Ipsum culpa sint deserunt officia cillum in et elit ea in ut nostrud. Laborum adipisicing proident eiusmod consequat dolor exercitation tempor laboris enim sit eiusmod excepteur voluptate. Occaecat ipsum incididunt sit duis nostrud.',
  'Jagad G. Anjoyo Sudiro'
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
