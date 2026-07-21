import type { User } from "./user.js";

const user: User = {
  id: 1,
};

console.log(user);

declare const enum Status {
  Draft = 0,
  Published = 1,
}

console.log(Status.Published);
