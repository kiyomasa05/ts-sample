const users = ["Taro", "Jiro"];

const firstUser = users[0];

if (firstUser !== undefined) {
  console.log(firstUser.toUpperCase());
}

function getLabel(status: "active" | "inactive") {
  if (status === "active") {
    return "利用中";
  }
  return "停止中";
}

function getLabel2(status: "active" | "inactive"): string | undefined {
  if (status === "active") {
    return "利用中";
  }
  return undefined;
}

// Fallthrough
function printStatus(status: "draft" | "published" | "edit") {
  switch (status) {
    case "draft":
    case "edit":
      console.log("作成中");
      break;

    case "published":
      console.log("公開済み");
      break;
  }
}
//unUsedLocals
const debugMessage = "debug";

function greet(name: string, age: number) {
  return `Hello, ${name}`;
}

console.log(greet("Taro", 30));

// noPropertyAccessFromIndexSignature
type Settings = {
  theme: string;
  [key: string]: string;
};

const settings: Settings = {
  theme: "dark",
  language: "ja",
};

console.log(settings["language"]);
