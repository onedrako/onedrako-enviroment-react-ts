const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // main, bundle o # en la industria
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', 'js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new Dotenv()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin() // Para optimizar JS
    ]
  }
}
