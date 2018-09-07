const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry:
        {
            'product/app': ['@babel/polyfill', './src/product/'],
            // 'promotion/app': ['@babel/polyfill', './src/'],
        }
    ,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        chunkFilename:'[name].bundle.js',
        publicPath: "/"
    },
    devtool: "source-map",
    devServer: {
        inline:true,
        port: 7777,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // {
            //     enforce: "pre",
            //     loader: 'eslint-loader',
            //     test: /\.js$/,
            //     exclude: /node_modules/
            //     에러 미침;
            // },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                loader: "source-map-loader",
                test: /\.js$/,
            },
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '_[hash:base64:11]',
                                sourceMap: true,
                                minimize: true,
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash:base64:8].[ext]',
                    publicPath: 'images/',
                    outputPath: 'images/',
                    limit: 1000000,
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css'
        }),
        new ManifestPlugin({
            filename:'assets.json',
            basePath:'/'
        })
    ],
    optimization: {
        splitChunks:{
            cacheGroups: {
                vendors:{
                    chunks: "all",
                    name:'vendor',
                }
            }
        }
    }
};