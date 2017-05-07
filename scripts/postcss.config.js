const Autoprefixer = require('autoprefixer')
const PostcssNesting = require('postcss-nesting')

module.exports = {
	plugins: [
		PostcssNesting(),
		Autoprefixer()
		//require('postcss-smart-import')({ /* ...options */ }),
		//require('precss')({ /* ...options */ }),
		//require('autoprefixer')({ /* ...options */ })
	]
}
