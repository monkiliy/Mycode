const webpackMerge = require('webpack-merge');
const configMode = (mode)=>{
    return require(`./build-utils/webpack.${mode}.js`);
}
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const loaderPreset = require('./build-utils/loaderPreset.js');
module.exports = (env)=>{
    console.log(env.presets);
    return webpackMerge({
        mode : env.mode,
        entry : './src/js/index.js',
        output : {
            path : __dirname + '/build',
            filename : 'index.js'
        },
        module : {
            rules : [{
                test : /\.js$/,
                exclude : /node-modules/,
                use : [{
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }]
            },{
                test : /(\.jpe?g|jfif)$/,
                use : [{
                    loader : 'url-loader',
                    options : {
                        limit : 5000
                    }
                }]
            },{
                test: /\.mp3(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                    // name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },{
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },{
                test : /\.(woff2|otf|woff|svg|eot|ttf)\??.*$/,
                loader : 'url-loader',
                options: {
                    limit: 5000
                
                }
            }]
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html'
            }),
            new webpack.ProgressPlugin()
        ]
    },
        configMode(env.mode),
        loaderPreset(env.presets))
}