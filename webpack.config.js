var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => ({
    entry: {
        'index': [
            './source/app.js'
        ]
    },
    output: {
        path: __dirname + "/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.styl$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]

            }
        ]
    },
    plugins: [].concat(env && env.prod ? [new UglifyJSPlugin()] : []),
    devServer: {
        contentBase: './',
        host: '0.0.0.0',
        port: 8080
    },
    devtool: 'source-map'
});