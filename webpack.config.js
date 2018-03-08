const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "./src/index.js"

        // "./app.js"
    ],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
        // publicPath: '/public/'
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

            // {
            //     test: /\.html$/,
            //
            //     use: [
            //         {
            //             loader: "html-loader"
            //         }
            //     ]
            // },

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
    //
    //     net: 'empty'
    // },

    // plugins: [
    //     new HtmlWebPackPlugin()
    // ]
};