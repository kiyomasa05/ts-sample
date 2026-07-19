import { Person } from "#app/person.js";
import { add } from "#app/util.js";

const person = new Person("Taro");

console.log(person.greet());
console.log(add(1, 2));
