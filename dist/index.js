var _a;
import { Person } from "./person.js";
import { add } from "./util.js";
const person = new Person("Taro");
console.log(person.greet());
console.log(add(1, 2));
const user = {
    name: "Taro",
};
console.log(user === null || user === void 0 ? void 0 : user.name);
const name = (_a = user.name) !== null && _a !== void 0 ? _a : "DummyName";
// include libの確認
const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // true
