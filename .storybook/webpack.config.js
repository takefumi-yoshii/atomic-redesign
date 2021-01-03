const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module = {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          configFile: path.resolve(__dirname, "./tsconfig.json")
        }
      }
    ]
  };

  config.resolve.extensions = [".tsx", ".ts", ".jsx", ".js"];

  return config;
};
