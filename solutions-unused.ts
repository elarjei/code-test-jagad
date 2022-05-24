import BigNumber from 'bignumber.js';

const factorialBigNumber = function (
  number: number
) {
  const factorial = [
    new BigNumber('1'),
    new BigNumber('1')
  ] as BigNumber[];

  if (typeof factorial[number] != 'undefined') {
    return factorial[number]
  }

  let i = 2;
  let result = factorial[i - 1];
  for (; i <= number; i++) {
    factorial[i] = result = result.times(i.toString())
  }

  return result;
}

const inverseSquareRoot = function (
  numberInput: number
) {
  const buf =  new ArrayBuffer(4)
  const f32 = new Float32Array(buf)
  const u32 = new Uint32Array(buf)
  const halfX = 0.5 * (f32[0] = numberInput) as number;
  const halfThree = 1.5;
  
  //* initial guess for Newton's method
  u32[0] = (0x5f3759df - (u32[0] >> 1));
  //* convert new bits into float
  let y = f32[0] as number;
  //* rounds of Newton's method
  y  = y * (halfThree - (halfX * y * y));
  y  = y * (halfThree - (halfX * y * y));
  y  = y * (halfThree - (halfX * y * y));
  y  = y * (halfThree - (halfX * y * y));
  y  = y * (halfThree - (halfX * y * y));

  return y;
}
