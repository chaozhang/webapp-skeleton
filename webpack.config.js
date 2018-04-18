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
        extensions: ['.js', '.styl']
        // alias: {
        //     "Components": __dirname + "/src/components",
        //     "Containers": __dirname + "/src/containers"
        // }
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
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: [/\.styl$/],
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader?url=false', 'stylus-loader']
            }
        ]
    }
};
