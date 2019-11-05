const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const pcckageConfig = require('../package.json');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'react-hot-loader/webpack' },
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: [/\.sass$/, /\.scss$/],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/public/', 'index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../src/public/', 'favicon.ico'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash',
      React: 'react',
      ReactDOM: 'react-dom',
      dict: [path.resolve(__dirname, '../src/dictionary/dict.js'), 'default'],
    }),
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify('PRODUCTION'),
      'process.env.NODE_ENV': JSON.stringify('DEVELOPMENT'),
      'process.env.VERSION': JSON.stringify(pcckageConfig.version),
      //
    }),
  ],
};
