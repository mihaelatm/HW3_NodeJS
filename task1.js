import fs from "fs";

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.log("Error creating directory: ", err);
    return;
  }
  console.log("Directory created successfully");

  fs.rmdir("myFolder", (err) => {
    if (err) {
      console.log("Error deleting directory: ", err);
      return;
    }

    console.log("Directory deleted successfully");
  });
});
