import { Person } from "./person.js";
import { add } from "./util.js";

const person = new Person("Taro");

console.log(person.greet());
console.log(add(1, 2));

type User = {
  name: string;
};

const user: User | undefined = {
  name: "Taro",
};

console.log(user?.name);

const name = user.name ?? "DummyName";

// include libの確認
const numbers = [1, 2, 3];

console.log(numbers.includes(2)); // true
