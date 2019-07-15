const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


/******************** CUSTOM HASH WEBPACK PLUGIN ********************/
class CustomHashWebpackPlugin {
	constructor(options = {}) {
		this.hash = options.hash || '';
	}

	apply(compiler) {
		compiler.hooks.compilation.tap('CustomHashWebpackPlugin', (compilation) => {
			compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('CustomHashWebpackPlugin', (htmlPluginData, callback) => {
				let allTags = [];
				if (htmlPluginData.body) {
					allTags = allTags.concat(htmlPluginData.body);
				}
				if (htmlPluginData.head) {
					allTags = allTags.concat(htmlPluginData.head);
				}

				let customHashParam = '?' + this.hash;
				allTags.map(tag => {
					if (tag.tagName === 'script') {
						tag.attributes.src += customHashParam;
					}
					else if (tag.tagName === 'link') {
						tag.attributes.href += customHashParam;
					}
				});

				if (typeof callback === 'function') {
					callback(null, htmlPluginData);
				}
			});
		});
	}
}
/******************** CUSTOM HASH WEBPACK PLUGIN ********************/


module.exports = function (options) {
	const isProduction = options.environment === 'production';
	const CONSTANTS = require('./constants')(options.environment);

	let plugins = [new webpack.optimize.OccurrenceOrderPlugin()];
	if (!isProduction) {
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	plugins = [
		...plugins,
		new CleanWebpackPlugin(['dist'], {
			root: CONSTANTS.appPath,
			dry: !isProduction
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(options.environment)
			},
		}),
		new HtmlWebpackPlugin({
			title: 'Rx Admin',
			filename: 'index.html',
			template: CONSTANTS.htmlTemplatePath,
			styles: [
				{
					href: '/assets/fonts/coreui-cions.css'
				},
				{
					href: '/assets/fonts/flag-icon.min.css'
				},
				{
					href: '/assets/fonts/font-awesome/font-awesome.min.css'
				},
				{
					href: '/assets/fonts/simple-line-icons/simple-line-icons.css'
				}
			]
		}),
		new CustomHashWebpackPlugin({
			hash: 'customhash'
		}),
		new CopyWebpackPlugin([
			{
				from: 'resources',
				to: 'resources'
			},
			{
				from: 'static/fonts',
				to: 'assets/fonts'
			}
		])
	];

	if (isProduction) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: CONSTANTS.cssBundleFileName
			})
		);
	}

	return plugins;
};