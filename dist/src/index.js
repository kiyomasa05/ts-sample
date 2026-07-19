var _a;
import { Person } from "./person.js";
import { add } from "./util.js";
import { testName } from "../test/util.test.js";
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
const products = [{ id: 1, price: 1200 }];
const product = products.find((product) => product.id === 2); // 2は存在しない
if (product) {
    console.log(product.price);
}
else {
    console.log("商品が見つかりませんでした");
}
// unknown型のエラー
function executeTask() {
    throw "文字列のエラーです";
}
try {
    executeTask();
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log("Errorオブジェクト以外がthrowされました:", error);
    }
}
console.log(testName);
