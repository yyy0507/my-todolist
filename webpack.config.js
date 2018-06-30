var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	context: __dirname + '/src',
	entry: './index.js',
  devtool: 'eval-source-map',
  devServer: {
    // contentBase: "./build",//本地服务器所加载的页面所在的目录
    // historyApiFallback: true,//不跳转
    inline: true,//实时刷新,
    hot: true
  },
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node-modules)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'es2015']
			}
		},{
			test:/\.css$/,
			loader: "style-loader!css-loader"
		}]
	},
	output: {
		path: __dirname + '/src/',
		filename: "bundle.js"
	},
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
};