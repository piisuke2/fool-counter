const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");
const path = require("path");

module.exports = function override(config, env) {
  config = injectBabelPlugin("babel-plugin-styled-components", config);
  config = rewireMobX(config, env);
  config.resolve.alias["atoms"] = path.resolve("src/atoms");

  return config;
};
