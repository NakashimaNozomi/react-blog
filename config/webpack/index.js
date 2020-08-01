const mode = process.env.NODE_ENV || "development";

if (mode === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
