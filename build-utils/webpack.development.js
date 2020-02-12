module.exports = {
    output : {
        path : __dirname + '/test2',
        filename : 'test2.js'
    },
    module : {
        rules : [{
            test : /\.scss$/,
            use : ['style-loader','css-loader','sass-loader']
        }]
    }
}