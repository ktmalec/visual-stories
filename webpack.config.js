const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = JSON.stringify(process.env.NODE_ENV) || 'development';
const __DEV__ = ENV === 'development'; // eslint-disable-line

const webpackConfig = {
  entry: './src/app.js',
  devtool: __DEV__ ? 'inline-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {loader: 'html-loader'}
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
              },
            }
          }
        ],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
              },
            }
          }, {
            loader: 'less-loader',
          }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: './src/index.html'
    }),
    new CopyPlugin([
      { from: 'assets', to: 'dist/assets' },
    ]),
  ]
};

if (process.env.ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
