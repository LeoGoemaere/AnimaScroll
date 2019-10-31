let UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

const path = require('path');

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
	entry: './src/Animascroll.js',
    output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'Animascroll.min.js',
		library: 'Anima',
		libraryExport: 'default',
    },
    plugins: [
        new UnminifiedWebpackPlugin()
    ]
  };