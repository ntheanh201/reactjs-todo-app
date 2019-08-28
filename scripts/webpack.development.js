const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const provisionConfig = require('./webpack.config')

module.exports = environment => {
  const outputPath = './public'
  const mode = 'development'

  const config = provisionConfig({
    environment,
    mode,
    outputPath
  })

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  )

  return config
}
