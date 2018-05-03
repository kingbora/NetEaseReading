/**
 * Created by wenbo.kuang on 2018/4/24.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowser = require('open-browser-webpack-plugin');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const config = require('./config/config');

module.exports = {
    entry: {
        index: [
            'babel-polyfill',
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?noInfo=true&reload=true',
            path.resolve(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'redux-actions']
    },
    output: {
        path: path.resolve(__dirname, 'www'),
        publicPath: "/",
        filename: '[name].[hash:8].js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ExtractText.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]',
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                modules: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]',
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test:/\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            limit:8192
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: 'url-loader'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(), //改善chunk传输
        new webpack.DefinePlugin({
            "progress.env.NODE_ENV": JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: "My App",
            showErrors: true,
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowser({url:`http://${config.hotReloadHost}:${config.hotReloadPort}`}),
        new webpack.NoEmitOnErrorsPlugin(), //保证出错时页面不阻塞，且会在编译结束后报错
        new ExtractText({
            filename: 'bundle.[hash:8].css',
            disable: false,
            allChunks: true
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "mainifest"
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss', '.jsx']
    }
};