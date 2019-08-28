const webpack = require('webpack')
​
const provisionConfig = require('./webpack.config')
​
module.exports = (environment) => {
  const outputPath = './build'
  const mode = 'production'
​
  const config = provisionConfig({
    environment,
    mode,
    outputPath
  })
​
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }))
​
  return config
}