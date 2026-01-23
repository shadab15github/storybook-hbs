module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: ["@storybook/addon-essentials"],

  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },

  webpackFinal: async (config) => {
    // HBS
    config.module.rules.push({
      test: /\.hbs$/,
      loader: "handlebars-loader",
    });

    // SCSS
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
};
