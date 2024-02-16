function maximum(arr: number[]): number {
  let max: number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
  }
  return max;
}
const Maximum: number = maximum([1, 2, 34]);
console.log(Maximum);

function minimum(arr: number[]): number {
  let min: number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
  }
  return min;
}

const minofArr: number = minimum([1, 2, 34]);

console.log(minofArr);

// filtering users that are legal
//
interface User1 {
  name: string;
  age: number;
  address: string;
}

const userArray: User1[] = [
  {
    name: "dp",
    age: 20,
    address: "Hyd",
  },
  { name: "nani", age: 16, address: "vzg" },
  {
    name: "madhu",
    age: 24,
    address: "Abg",
  },
];

const filteredArray: User1[] = userArray.filter((x) => x.age >= 18);

console.log(filteredArray);
