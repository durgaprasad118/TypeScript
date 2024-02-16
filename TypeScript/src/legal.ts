function isLegal(age: number): boolean {
  return age >= 18 ? true : false;
}

const answer = isLegal(20);
console.log(answer);
