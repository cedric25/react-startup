var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {

    // 1. Starting point of your application
    entry: [
        './app/index.js'
    ],

    // 2. Which transformations to make
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    // 3. Which location it should save the new transformed code
    output: {
        filename: 'index_bundle.js',
        path: __dirname + '/dist'
    },

    plugins: [HTMLWebpackPluginConfig]
};
