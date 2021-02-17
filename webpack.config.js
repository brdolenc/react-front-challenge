const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const dotenv = require('dotenv');

module.exports = () => {

  const env = dotenv.config().parsed;

  return {
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      alias: {
        react: path.join(__dirname, 'node_modules', 'react'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        }
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      new CopyPlugin({
        patterns: [
          { 
            from: path.resolve(__dirname, 'src', 'assets'), 
            to: path.resolve(__dirname, 'build', 'assets') 
          }
        ],
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'API_GOOGLE_KEY': JSON.stringify(env.API_GOOGLE_KEY)
        }
      }),
    ],
  }
};
