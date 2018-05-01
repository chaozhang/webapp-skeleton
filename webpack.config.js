// Webpack configuration for chaozhang style guide app
const webpack = require("webpack");


module.exports = {
    entry: {
        app: "./src/containers/"
    },

    output: {
        filename: "[name].js",
        path: __dirname + "/www/dist/"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.js', '.styl'],
        alias: {
            "CommonComponents": __dirname + "/node_modules/StyleGuide/src/components"
        }
    },

    // watch mode options
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },

    devtool: "source-map",

    devServer: {
        contentBase: __dirname + "/www",
        compress: true,
        port: 8000
    },

    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: /node_modules(?!\/StyleGuide)/,
                use: ['babel-loader']
            },
            {
                test: [/\.styl$/],
                exclude: /node_modules(?!\/StyleGuide)/,
                use: ['style-loader', 'css-loader?url=false', 'stylus-loader']
            }
        ]
    }
};
