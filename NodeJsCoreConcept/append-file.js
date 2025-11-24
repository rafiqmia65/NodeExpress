const fs = require("fs");

// fs.writeFileSync("./output/app.log", "Application Started \n");
// console.log("File created");

// const logEntry1 = `\n ${new Date().toDateString()} user Logged in\n`;
// fs.appendFileSync("./output/app.log", logEntry1);

const logEntry2 = `${new Date().toDateString()} user Data Fetched\n`;
fs.appendFileSync("./output/app.log", logEntry2);

console.log("Task Completed");
