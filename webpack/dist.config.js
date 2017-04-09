/* global __dirname */
let path    = require("path"),
    webpack = require("webpack"),
    config  = require("../gulp.config").app;


module.exports = {

    // Watch changes on app/src folder
    watch: true,

    // Entry point
    entry: {
        main: config.src.main_js,
        vendor: [
            "babel-polyfill",
            "react",
            "react-dom",
            "react-bootstrap",
        ]
    },

    // Output files
    output: {
        path: `${config.dest}/assets/`,
        publicPath: "/assets/",
        chunkFilename: "[chunkhash].js",
        filename: "[name].js"
    },

    // Rules
    module: {
        rules: [

            /****************************************
            * Generate Javascript Files
            ****************************************/
            {// ESLint
                test: /.jsx?$/,
                enforce: "pre",
                exclude: /node_modules|lodash|config/,
                use: [
                    {loader: "eslint-loader", options: {
                        emitWarning: true
                    }}
                ]
            },
            {// ES6 transpile with babel
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env", "react"],
                            plugins:[
                                "autobind-class-methods",
                                "transform-class-properties",
                                "transform-export-extensions",
                                "add-module-exports"
                            ]
                        }
                    }
                ]
            },


            /****************************************
            * Generate styles Files
            ****************************************/
            {// Stylues Loader
                test: /.styl$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {loader: "css-loader", options: {
                        modules: true,
                        sourceMap: true,
                        camelCase: true,
                        localIdentName: "[hash:base64:5]"
                    }},
                    {loader: "stylus-loader", options: {
                        preferPathResolver: "webpack"
                    }}
                ]
            }
        ]
    },

    // Where and What resolve
    resolve: {
        modules: [
            path.resolve(__dirname, ".."),
            path.resolve(__dirname, "../src"),
            path.resolve(__dirname, "../src/app"),
            path.resolve(__dirname, "../node_modules")
        ],
        extensions: [".js", ".jsx", ".styl"]
    },

    // Plugins
    plugins: [
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"],
            filename: "common.js",
            minChunks: Infinity
        })
    ]

};
