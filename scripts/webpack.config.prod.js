// prod config - extends the base config
const config = require('./webpack.config.js')

const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')

// Publish separate CSS file
config.module.rules[1].use = ExtractTextWebpackPlugin.extract({
	use: ['css-loader', 'sass-loader'],
	fallback: 'style-loader'
})

config.plugins = [
	new ExtractTextWebpackPlugin('css/app.css'),
	new webpack.optimize.UglifyJsPlugin(),
	new OptimizeCSSAssets()
]

module.exports = config
