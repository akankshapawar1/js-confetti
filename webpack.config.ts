/* eslint-env node */

import { Configuration } from 'webpack'
import path from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const isProd = process.env.NODE_ENV === 'production'

const config: Configuration = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
}

module.exports = config