const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    converter: "./src/js/dist/converter.js",
    index: "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};