//configuration file for webpack
var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool:"inline-source-map", //print line no. in development dont use in production
	entry:[
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output:{
		path:path.join(__dirname,'public'), // where to write
		filename:'bundle.js'
	},
	resolve:{
		moduleDirectories:['node_modules','src'], //where to look for files
		extension:['','.js']	//extesions to look for
	},
	module:{
		loaders:[
		{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel',
			query:{
				presets:['es2015']
			}
		},
		{
			test:/\.html$/,
			loader:'raw'
		}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devServer:{
		hot:true,
		proxy:{
			'*':'http://localhost:3000'
		}
	}
};