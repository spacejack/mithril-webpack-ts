// prod config - extends the base config
const config = require('./webpack.config.js')

const path = require('path')
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')

// Publish separate CSS file
config.module.rules[2].use = ExtractTextWebpackPlugin.extract({
	use: [
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				config: path.resolve(__dirname, 'postcss.config.js')
			}
		},
		'sass-loader'
	],
	fallback: 'style-loader'
})

config.plugins = [
	new ExtractTextWebpackPlugin('css/app.css'),
	new webpack.optimize.UglifyJsPlugin(),
	new OptimizeCSSAssets()
]

module.exports = config
