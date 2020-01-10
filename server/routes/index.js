const fs = require("fs");
const path = require("path");

const routing = {};

fs.readdirSync(__dirname) // read all files in this directory
  .filter(
    file =>
      // only read .js files, but not the index.js (this file)
      file.indexOf(".") !== 0 && file !== "index.js" && file.slice(-3) === ".js"
  )
  .forEach(file => {
    const filename = file.replace(".js", "");
    // attach the routes in it's own filename
    routing[filename] = require(path.join(__dirname, file));
  });

module.exports = routing;
