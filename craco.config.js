// craco.config.js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Find ForkTsCheckerWebpackPlugin configuration
      const tsCheckerPlugin = webpackConfig.plugins.find(
        (plugin) => plugin.constructor.name === 'ForkTsCheckerWebpackPlugin'
      );

      if (tsCheckerPlugin) {
        // Modify ForkTsCheckerWebpackPlugin configuration
        tsCheckerPlugin.memoryLimit = 2048; // Set memory limit to 2 GB
      }

      return webpackConfig;
    },
  },
};