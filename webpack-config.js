const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');


const destination = path.resolve( __dirname, 'dist');

module.exports = {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',

	devServer: {
		contentBase: destination,
		port: 9999,
		open: true,																						// => Open Browser (+By Default refresh)
		overlay: true, 																				// Enable WDS, Solve SDS Error
		historyApiFallback: true 															// Enabling Client Routing, by disabled Server Routing
	},

	// entry: './src/index.js',
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: destination,
		filename: 'main.js'
	},
	module: {
		rules: [
			{ 
				test: /\.css/, 
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
 	          presets: ['@babel/preset-env', '@babel/preset-react'],
 	          plugins: ['@babel/plugin-transform-runtime']
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			title: 'Home',
			template: './src/template/template.html',
			favicon: './src/template/favicon.ico',
			minify: false,
			filename: 'index.html'
		}),

	]
};
