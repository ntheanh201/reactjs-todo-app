const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ environment, mode, outputPath }) => {
  return {
    // context: path.resolve(__dirname, './src'),
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: '[name].[hash:8].js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            chunks: 'all',
            test: /node_modules/
          }
        }
      }
    },
    mode: mode,
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'raw-loader'
            }
          ]
        },
        {
          exclude: [
            /\.html$/,
            /\.(js|jsx|mjs)$/,
            /\.css$/,
            /\.json$/,
            /\.svg$/,
            /\.(graphql|gql)$/,
            /particles\.js/
          ],
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /particles\.js/,
          loader:
            'exports-loader?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html'
      }),
      new CaseSensitivePathsPlugin()
      // new CleanWebpackPlugin(outputPath)
    ],
    resolve: {
      alias: {
        context: path.resolve(__dirname, '../src/packages/context'),
        layouts: path.resolve(__dirname, '../src/packages/layouts'),
        services: path.resolve(__dirname, '../src/packages/services'),
        ui: path.resolve(__dirname, '../src/packages/ui')
      }
    }
  }
}
