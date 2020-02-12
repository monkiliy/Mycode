const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // output: {
    //     filename : '[name].[chunkhash].js'
    // },
    module : {
        rules : [{
            test : /\.scss$/,
            use : [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
        }]
    },
    plugins : [
        new MiniCssExtractPlugin()
    ]
}