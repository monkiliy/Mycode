1.webpack官网
2.安装node环境
3.npm 包管理工具 npm install 下载需要的包 通过--save下载生产依赖的包 添加到说明栏 通过--save-dev下载开发依赖的包 添加到说明栏
4.生成一个项目说明书 npm init 命令
5.下载webpack
6.webpack安装到node-moduoles文件夹下了
7.下载webpack-cli 命令行工具

8.通过npm run 执行脚本 通过-- 表示传参
"scripts": {
    "webpack": "webpack",
    "dev": "npm run webpack -- --mode development",
    "prod": "npm run webpack -- --mode production"
  },

9.通过传入参数 watch监听自动打包
"scripts": {
    "webpack": "webpack",
    "dev": "npm run webpack -- --mode development",
    "prod": "npm run webpack -- --mode production --watch"
  },

10. tree shaking 防止死代码 webpack可以自动去除没有使用的代码

11.webpack 打包原理简单理解
12.在根目录下创建一个webpack.config.js文件 可以对webpack进行配置;

13.webpack.config.js对项目进行配置
entry 配置入口文件
entry: './src/index.js'
    创建多个入口文件
    entry : {
        entry : './entry.js',
        index : './index.js'
    }

output 配置输出文件
output : {
        path : __dirname + '/dist',//path路径要求为绝对路径 _dirname变量可以获取当前项目的绝对路径
        filename : 'main.js'
    }

loaders 配置在建立依赖图之前对文件进行一些操作
loaders 本质是一个函数 
loaders 链 转换scss文件 ["style-loader","css-loader",'sass-loader']转换顺序，是数组从后往前执行转换

plugins 插件系统 本质是一个构造函数 原型上有一个apply方法

14.npm install webpack-dev-server 下载开启服务器的包
通过脚本控制命令
"webpack-dev-server": "webpack-dev-server",
"dev": "npm run webpack-dev-server -- --env.mode development",
设置后 npm run dev可以开启一个服务器
服务器会自动更新数据，不用手动浏览器刷新 注意的是他没有把更改的文件重新打包

15 --hot热模块启动 通过webpack-dev-server服务器不用手动刷新，但是实际浏览器有刷新，但是热模块启动不会刷新页面
"dev": "npm run webpack-dev-server -- --env.mode development --hot",

16下载babel
cnpm install babel-loader @babel/core @babel/preset-env --save-dev

17配置项 官网配置相关 devtool的soursemap 打包文件代码与开发代码的映射

17cnpm install @babel/plugin-syntax-dynamic-import --save-dev下载异步加载模块的功能插件

18 代码分离 动态分离 import()函数 异步加载模块