import { Person } from "./person.js";
import { add } from "./util.js";

const person = new Person("Taro");

console.log(person.greet());
console.log(add(1, 2));
function getMessage(type: number) {
  if (type === 1) {
    return "Hello";
  }

  if (type === 2) {
    return "Goodbye";
  }

  // 戻り値がない
}
