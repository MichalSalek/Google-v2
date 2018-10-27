const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
