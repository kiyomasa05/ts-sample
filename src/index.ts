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

// nullとundefindの確認
type Product = {
  id: number;
  price: number;
};

const products: Product[] = [{ id: 1, price: 1200 }];

const product = products.find((product) => product.id === 2); // 2は存在しない
if (product) {
  console.log(product.price);
} else {
  console.log("商品が見つかりませんでした");
}

// unknown型のエラー
function executeTask() {
  throw "文字列のエラーです";
}

try {
  executeTask();
} catch (error) {
  console.log(error.message);
}
