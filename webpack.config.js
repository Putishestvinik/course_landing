const path = require('path');

module.exports = {
	mode: "development",
	entry: './src/scripts/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader" ],
			},
		],
	},
};