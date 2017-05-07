// dev config - extends the base config
const config = require('./webpack.config.js')

const path = require('path')
// `CheckerPlugin` is optional for awesome-typescript-loader.
// Use it if you want async error reporting. We need this plugin to
// detect a `--watch` mode. It may be removed later after
// https://github.com/webpack/webpack/issues/3460 is resolved.
const {CheckerPlugin} = require('awesome-typescript-loader')

// Hot CSS updates
config.module.rules[1].loader = ['style-loader', 'css-loader', 'sass-loader']

config.plugins = [new CheckerPlugin()]

config.devServer = {
	contentBase: path.resolve(__dirname, '../public'),
	historyApiFallback: true,
	inline: true,
	open: false // set to true to open default browser when run
}

config.devtool = 'eval-source-map' // 'source-map' // 'inline-source-map'

module.exports = config
