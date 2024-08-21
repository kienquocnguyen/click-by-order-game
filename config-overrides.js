const {addDecoratorsLegacy, addWebpackModuleRule, override} = require('customize-cra');
const ESLintPlugin = require('eslint-webpack-plugin');

const customEslintConfig = () => (config) => {
  config.plugins = config.plugins.map((plugin) => {
    if (plugin instanceof ESLintPlugin) {
      return new ESLintPlugin({
        ...plugin.options,
        overrideConfigFile: '.eslintrc.json', // Point to your custom ESLint config file
      });
    }
    return plugin;
  });

  return config;
};

module.exports = override(
    addDecoratorsLegacy(),
    customEslintConfig()
);