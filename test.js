const fs = require("fs");

const list = fs.readFileSync("list.csv", "utf8").split("\n");
list.shift(); // header
let seen = [];
list.forEach(row => {
  const splitRow = row.split(",");
  if (splitRow.length !== 2) {
    console.error("Invalid number of columns: " + row);
    process.exit(1);
  }
  const [usernanme] = splitRow;
  if (seen.includes(username)) {
    console.error(`Duplicate username: ${username}`);
    process.exit(1);
  }
  seen.push(username);
});
