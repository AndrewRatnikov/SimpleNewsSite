const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            path.resolve( __dirname, './src/main.js' )
        ]
    },
    output: {
        path: path.resolve( __dirname, './dist' ),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer')(),
                            require('cssnano')()
                        ]
                    }
                },
                'sass-loader'
            ],
            exclude: /node_models/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join( __dirname, './src/assets/index.html' ),
            filename: 'index.html',
            path: path.resolve( __dirname, './dist' )
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve( __dirname, './dist' ),
        port: 8080,
        historyApiFallback: true,
        inline: true,
        hot:  true,
        open: true
    }
};