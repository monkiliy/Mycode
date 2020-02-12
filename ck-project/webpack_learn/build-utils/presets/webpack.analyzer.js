// 优化配置，根据传入参数的不同加载不同的配置文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    plugins : [new BundleAnalyzerPlugin()]
}