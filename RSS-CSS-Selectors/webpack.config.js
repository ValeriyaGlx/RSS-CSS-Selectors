const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {test: /\.ts$/i, use:"ts-loader"},

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[hash][ext]',
        }
      }
    ],

  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },

  plugins: [
    new HtmlWebpackPlugin({
        favicon: path.resolve(__dirname, './src/assets/favicon.ico'),
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
    }),
  ],
};


