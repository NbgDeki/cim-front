var path = require('path');

var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

/*var extractPlugin = new ExtractTextPlugin("[name].bundle.css", {
    //filename: 'main.css'
});*/
var extractPlugin = new ExtractTextPlugin('style.css');

module.exports = {
    entry: {
        app: './src/js/app.js',
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        'css-loader',
                        'autoprefixer-loader?safe=true',
                        {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins: function () { // post css plugins, can be exported to postcss.config.js
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        'sass-loader'
                    ],
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            //publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new UglifyJsPlugin({
            //...
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'collections.html',
            template: 'src/collections.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'corporate.html',
            template: 'src/corporate.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'partnership.html',
            template: 'src/partnership.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: 'src/contact.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'news-open.html',
            template: 'src/news-open.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: 'src/news.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'collections2.html',
            template: 'src/collections2.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: 'src/product.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'product2.html',
            template: 'src/product2.html'
        }),
        
        /*new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            chunks: ['app', 'about']
        }),*/
        new CleanWebpackPlugin('dist')
    ]
};
