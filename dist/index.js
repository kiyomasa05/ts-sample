"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const person_js_1 = require("./person.js");
const util_js_1 = require("./util.js");
const person = new person_js_1.Person("Taro");
console.log(person.greet());
console.log((0, util_js_1.add)(1, 2));
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
