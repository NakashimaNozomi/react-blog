const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const datetime = new Date().getTime();

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve('src/index.html'),
  filename: 'index.html',
  inject: 'body',
  chunks: ['index'],
});

module.exports = {
  mode: mode,
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: path.resolve(`./dev`),
    filename: 'public/js/[name].js?' + datetime,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules'],
  },
  plugins: [htmlPlugin],

  devServer: {
    contentBase: path.resolve(`./dev`),
  },
};
