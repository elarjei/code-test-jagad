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
  const string = dynamicData.toString() as string
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

console.log('\nisPrimeNumber\n')
testNumberList.forEach(number => {
  console.log(
    'Data', number,
    'Result is', isPrimeNumber(number)
  )
});

console.log('\nfactorial\n')
testNumberList.forEach(number => {
  console.log(
    'Data', number,
    'Result is', factorial(number)
  )
});

console.log('\nreverseDynamicData\n')
testDynamicDataList.forEach(dynamicData => {
  console.log(
    'Data', dynamicData,
    'Result is', reverseDynamicData(dynamicData)
  )
});
