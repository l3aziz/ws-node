const fs = require("fs");
const path = require("path");

const textPath = path.resolve("content", "welcome.txt");
fs.readFile(textPath, "utf-8", (err, result) => {
  if (err) throw err;
  console.log(result);
});
