import type { User } from "./user.js";
// import "./initialize.js";

const user: User = {
  id: 1,
};

console.log(user);

const enum Status {
  Draft = 0,
  Published = 1,
}

console.log(Status.Published);

console.log(process.env.NODE_ENV);
