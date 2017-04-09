/* global __dirname */
let path = require("path");

module.exports = {
    app:{
        dest: path.resolve(__dirname, "dist"),

        src: {
            main_js: "./app/src/main.jsx",
            html: "./app/src/index.pug",
            js: [ "./app/src/**/*.jsx", "./app/src/**/*.js" ],
            assets: "./app/assets/**/*",
        },

        vendor: [
            "./node_modules/bootstrap"
        ]
    }
};
