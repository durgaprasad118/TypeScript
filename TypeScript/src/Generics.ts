type Input = number | string;

function firstEl(arr: Input[]): Input {
  return arr[0];
}

const val = firstEl([1, 2]);

function elefirst<T>(arr: T[]): T {
  return arr[0];
}

const genAns = elefirst<string>(["dp", "ach"]);
console.log(genAns);

export function identity<T>(arg: T): T {
  return arg;
}

const out1 = identity<string>("hello");
const out2 = identity<number>(1);
