import add from './nav';
// import {num, str} from './footer';
import makeButton from './button';
//导出三个变量，但是只使用一个变量，但是打包后，没有使用的变量没有打包过去，tree shaking砍掉了多余无用代码
import {buttonColor} from './color';
import './index.scss';
import url from './bg.jpg';
console.log(url);
import image from './image';
// 优化代码，引入的模块都放在最前面 一目了然
const getFooter = () => import(/* webpackPrefetch: true */ /* webpackChunkName: "footer" */'./footer');
const getLodash = () => import(/* webpackChunkName: "lodash-es" */'lodash-es');
// process.env.NODE_ENV node环境中使用 可以获取当前环境的env 
console.log(process.env.NODE_ENV)//可以获取当前的模式 生产模式还是开发模式
if(process.env.NODE_ENV === 'development'){
    var buttonStyle = (color) => import(/* webpackMode: "lazy-once" */`./buttonColor/${color}`);//lazy-once 只在开发模式使用，没使用到的模块不会打包出来
}else if(process.env.NODE_ENV == 'production'){
    // 生产模式要把所有模块都打包出来
    var buttonStyle = (color) => import(`./buttonColor/${color}`);
}
const img = image(url);
document.body.appendChild(img);
const button = makeButton('我是按钮');
button.onclick = ()=>{
    // 代码分离 动态导入
    // import('./footer.js').then(footer =>{
    //     console.log(footer.num,footer.str);
    // })
    getFooter().then(footer=>{
        console.log(footer.num,footer.str);
    })
    getLodash().then((_)=>{ 
        console.log(_);
    })
    buttonStyle('red').then((obj)=>{
        console.log(obj.default);
    })
}
document.body.appendChild(button);
console.log(buttonColor('gray'));
add();