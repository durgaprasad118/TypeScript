interface User {
  fn: string;
  ln: string;
  email: string;
  age: number;
  username?:string
}

const user = {
  fn: "dp",
  ln: "parsad",
  email: "asdf@gmail.com",
  age: 16,
};

function legal(user: User): boolean {
  return user.age >= 18 ? true : false;
}

const answ = legal(user);
console.log(answ);
