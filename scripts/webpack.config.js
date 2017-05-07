const path = require('path')

// This is the base config. Use either dev or prod.

module.exports = {
	entry: path.resolve(__dirname, '../src/index'),
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: 'js/app.js'
	},

	// Currently we need to add '.ts' to the resolve.extensions array.
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.css$/
			}
		]
	}
}
