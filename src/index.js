"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const util_1 = require("./util");
const person = new person_1.Person("Taro");
console.log(person.greet());
console.log((0, util_1.add)(1, 2));
