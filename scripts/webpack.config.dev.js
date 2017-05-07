// dev config - extends the base config
const config = require('./webpack.config.js')

const path = require('path')
// `CheckerPlugin` is optional for awesome-typescript-loader.
// Use it if you want async error reporting. We need this plugin to
// detect a `--watch` mode. It may be removed later after
// https://github.com/webpack/webpack/issues/3460 is resolved.
const {CheckerPlugin} = require('awesome-typescript-loader')

// Hot CSS updates
config.module.rules[1].use[1].options.sourceMap = true
config.module.rules[1].use[2].options.sourceMap = true

config.module.rules[2].loader = [
	{
		loader: 'style-loader'
	},
	{
		loader: 'css-loader',
		options: {
			sourceMap: true
		}
	},
	{
		loader: 'postcss-loader',
		options: {
			config: path.resolve(__dirname, 'postcss.config.js'),
			sourceMap: true
		}
	},
	{
		loader: 'sass-loader',
		options: {
			sourceMap: true
		}
	}
]

config.plugins = [new CheckerPlugin()]

config.devServer = {
	contentBase: path.resolve(__dirname, '../public'),
	historyApiFallback: true,
	inline: true,
	open: false // set to true to open default browser when run
}

config.devtool = 'eval-source-map' // 'source-map' // 'inline-source-map'

module.exports = config
