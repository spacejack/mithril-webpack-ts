const Autoprefixer = require('autoprefixer')
const PostcssNesting = require('postcss-nesting')

module.exports = {
	plugins: [
		PostcssNesting(),
		Autoprefixer()
	]
}
