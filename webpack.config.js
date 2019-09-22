// Imports: Dependencies
require("@babel/register");
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Webpack Configuration
const config = {
  
  // Entry
  entry: './index.js',
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  node: {
    __dirname: false,
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder  
  // Plugins
  plugins: [
    new CopyWebpackPlugin([
        { from: './static' }
    ])
  ]
};
// Exports
module.exports = config;