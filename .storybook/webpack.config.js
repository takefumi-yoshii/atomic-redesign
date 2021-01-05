const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module = {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          configFile: path.resolve(__dirname, "./tsconfig.json"),
        },
      },
      {
        test: /\.css$/,
        loaders: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  };

  config.resolve.extensions = [".tsx", ".ts", ".jsx", ".js"];

  return config;
};
