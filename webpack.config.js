var webpack = require('webpack');
let UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

const path = require('path');
const modulePackage = require('./package/package.json');
const banner = `
	${modulePackage.name} - v${modulePackage.version}
	${modulePackage.description}

	https://github.com/${modulePackage.repository}

	Copyright 2019 - ${modulePackage.author}
	${modulePackage.license} License
`;

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
		path: path.resolve(__dirname, './package/dist'),
		filename: 'Animascroll.min.js',
		library: 'Anima',
		libraryExport: 'default',
		libraryTarget: 'umd'
    },
    plugins: [
		new UnminifiedWebpackPlugin(),
		new webpack.BannerPlugin(banner)
    ]
  };