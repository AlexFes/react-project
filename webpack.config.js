const path = require("path");

module.exports = {
    entry: [
        "./src/index.js"
    ],

    output: {
        path: path.resolve(__dirname, "dist"),

        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,

                exclude: /node_modules/,

                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.(png|jpg|gif|JPG)$/,

                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }

        ]
    }

    // node: {
    //     fs: 'empty',
    //     net: 'empty'
    // }
};