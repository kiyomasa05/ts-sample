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
