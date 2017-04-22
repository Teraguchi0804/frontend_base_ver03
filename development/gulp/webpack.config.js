const path = require('path');
const PATH = require('./config');

module.exports = {
	entry: {
		// "main": "../../dev/assets/devjs/src/es6/main.js",
		"main": PATH.dev.devjs + "src/Top.js",
		// "page01": PATH.dev.devjs + "src/Page01.js",
	},
	output: {
		// path: "../../dev/assets/js/",
		filename: "[name].js"
	},
	module: {
		loaders: [
			// { test: /\.css$/, loader: "style!css" },
			{
				test: [/\.js$/,/\.es6$/],
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ["babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
				}
			},
			{ test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
			{ test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ }
		]
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	// devtool: 'source-map',
	devtool: 'inline-source-map',
};
