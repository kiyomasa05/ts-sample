export class Person {
  constructor(public name: string) {}

  greet() {
    return `Hello, ${this.name}`;
  }
}
