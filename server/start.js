require("@babel/register")({
  presets: ["@babel/preset-env"],
  entry: [
    './server.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/api',
    filename: 'bundle.js'
  }
});

module.exports = require("./server.js");
