const webpackMerge = require('webpack-merge');
module.exports = (presets)=> {
    presets = presets || [];
    const mergePresets = [].concat(presets);
    const configMerge = mergePresets.map((presetsName)=>{
        return require(`./presets/webpack.${presetsName}`)
    })
    return webpackMerge({}, ...configMerge);
    // return webpackMerge({}, ...configMerge);
}