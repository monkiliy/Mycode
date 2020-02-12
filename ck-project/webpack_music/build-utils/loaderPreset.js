const webpackMerge = require('webpack-merge');
module.exports =(presets)=>{
    presets = presets || [];
    const presetsMerge = [].concat(presets);
    const configMerge = presetsMerge.map((presetsName)=>{
        return require(`./presets/webpack.${presetsName}.js`)
    })
    return webpackMerge(configMerge);
}