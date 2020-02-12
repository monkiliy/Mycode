/* module.exports = {
    // 创建多个入口文件
    // entry : {
    //     entry : './entry.js',
    //     index : './index.js'
    // }
    entry: './src/index.js',
    output : {
        path : __dirname + '/dist',//path路径要求为绝对路径 _dirname变量可以获取当前项目的绝对路径
        filename : 'main.js'
    },
    module : {
        rules : [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        
    ]
} */


// 配置文件通过函数形式暴露 可以传参 在配置 package.json文件的script命令行工具时配置传参开发模式还是生产模式
//引入html自动注入插件
const htmlWebpackPlugin = require('html-webpack-plugin');
//通过引入webpack可以使用webpack内置的插件
const webpack = require('webpack');
//通过引入webpackmerge可以合并2个对象；
const webpackMerge = require('webpack-merge');
// 由于生产模式与开发模式的不一样所以开发模式与生产模式进行分开的配置，一样的配置通过merge合并
const configMode = (mode)=>{
    return require(`./build-utils/webpack.${mode}.js`)
}
const configPresets = require('./build-utils/loaderPresets');
module.exports = (env)=>{
    // console.log(env.presets);
    // console.log(configPresets(env.presets));
    return webpackMerge({
        devtool : 'source-map',
        mode : env.mode,
        /* 静态分离
        entry : {
            index : './src/index.js',
            index1 : './src/index1.js'
        }, */
        entry : './src/index.js',
        module: {
            rules :[{
                test : /\.js$/,
                exclude : '/node_modules/',
                use : [{
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env'],
                        plugins : ['@babel/plugin-syntax-dynamic-import']
                        // 可配置plugins其他插件8 
                    }
                }]
            },{
                test : /\.jpe?g/,
                use : [{
                    loader : 'url-loader',
                    options : {
                        limit : 5000
                    }
                }]
            }]
        },
        output : {
            path : __dirname + '/build',
            filename : 'bundle.js'
            // filename : '[chuankehash].js' 通过hash值创建文件名 防止缓存机制
        },
        plugins : [
            new htmlWebpackPlugin({
                template : './index.html'
            }),
            new webpack.ProgressPlugin()
        ]
    },
        configMode(env.mode),
        configPresets(env.presets));
}

/* module.exports = ({mode,presets})=>{
    return {
        mode
    }
} */

/* module.exports = () =>{
    return {
        entry : '',
        output : {},
        module : {
            relus : [{
                test : /\.js$/,
                use : ['babel-loader']
            }]
        },
        plugins : []

    }
} */

/* // 简写形式
module.exports = ()=>({

}) */
