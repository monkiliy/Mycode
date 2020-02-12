// 优化配置，根据传入参数的不同加载不同的配置文件
const CompressionPlugin = require('compression-webpack-plugin');
 
module.exports = {
  plugins: [new CompressionPlugin()],
};