const path = require("path");

module.exports = {
    entry: ["./public/js/manderindli.js"],
    // The location of the build folder described above
    output: {
        path: path.resolve(__dirname + "/public", "dist"),
        filename: "manderindli.js",
        library: "manderindli",
    },
    mode: "development",
    // Optional and for development only. This provides the ability to
    // map the built code back to the original source format when debugging.
    devtool: "eval-source-map",

    //...
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 9000,
    },
};
