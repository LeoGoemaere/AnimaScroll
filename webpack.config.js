let UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
	module: {
	  rules: [
		{
		  test: /\.js$/,
		  exclude: /node_modules/,
		  use: {
			loader: "babel-loader"
		  }
		}
	  ]
	},
    output: {
        path: './dist',
        filename: '[name].min.js'
    },
    plugins: [
        new UnminifiedWebpackPlugin()
    ]
  };