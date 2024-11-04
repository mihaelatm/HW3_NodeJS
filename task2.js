import fs from "fs";

const content = "Node.js is awesome!";

fs.writeFile("info.txt", content, "utf-8", (err) => {
  if (err) {
    console.log("Error writing file: ", err);
    return;
  }

  console.log("File written successfully");

  fs.readFile("info.txt", "utf-8", (err, content) => {
    if (err) {
      console.log("Error reading file: ", err);
      return;
    }

    console.log("File content: ", content);
  });
});
