"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_js_1 = require("@app/person.js");
const util_js_1 = require("@app/util.js");
const person = new person_js_1.Person("Taro");
console.log(person.greet());
console.log((0, util_js_1.add)(1, 2));
