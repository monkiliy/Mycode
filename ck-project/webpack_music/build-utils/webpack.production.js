const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    plugins : [new MiniCssExtractPlugin()],
    module : {
        rules : [{
            test : /\.scss$/,
            use : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    }
}