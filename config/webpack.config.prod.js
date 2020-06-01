const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: './src/index.js'
  },
  output:{
    filename: '[name]-[contenthash:6].js',
    path: path.resolve(__dirname, '../', 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['MiniCssExtractPlugin.loader', 'css-loader']
    },
    {
      test: /\.(sass|scss)$/,
      use: ['MiniCssExtractPlugin.loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      loader: 'file-loader',
      options: {
           name: '[name]-[contenthash:6].[ext]',
           outputPath: 'images'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
         title: "Portfolio",
         template: './src/templates/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:6].css'
    })         
  ]
}
