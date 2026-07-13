export class Person {
  constructor(public name: string) {}

  greet() {
    return `Hello, ${this.name}`;
  }
}
type Human = {
  name?: string;
};

const human: Human = {};

// OK
human.name = "Taro";

// エラー
human.name = undefined;
