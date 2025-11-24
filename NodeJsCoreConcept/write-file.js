const fs = require("fs");

const content1 = "This is a content \nnode.js  is awesome";

try {
  fs.writeFileSync("./output/test-sync.txt", content1);
  console.log("File Written sync Done");
} catch (error) {
  console.error(error.message);
}

const content2 = "This is a content2 \nnode.js  is awesome2";

fs.writeFile("./output/test-async.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("File written async Done");
  }
});
