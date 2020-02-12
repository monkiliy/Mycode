import Vue from 'vue'
const home = () => import('./components/home.vue')
const user = () => import('./components/user.vue')
const userStart = () => import('./components/userStart.vue')
const userDetail = () => import('./components/userEdit.vue')
const userEdit = () => import('./components/userEdit.vue')
// import home from './components/home.vue'
// import user from './components/user.vue'
import vueRouter from 'vue-router'
// import userStart from './components/userStart.vue'
// import userDetail from './components/userEdit.vue'
// import userEdit from './components/userEdit.vue'
import header from './components/header.vue'
Vue.use(vueRouter);
const router =  new vueRouter({
  routes : [
    // {path : '/',component : home},
    {path : '/',components : {
      default : home,
      'header-top' : header 
    }},
    // {path : '/user',component : user}
    // {path : '/user/:id',component : user}
    {path : '/user',
    component : user,
    children  : [
      {
        path : '',
        component : userStart
      },
      {
        path : ':id',
        component : userDetail,
        beforeEnter(to,from,next){
          // console.log(to,from);
          console.log('jubu')
          next();
        }
      },
      {
        path : ':id/edit',
        component : userEdit,
        name : 'userEdit'
      }
    ]

    },
    {
      path : '/abc',
      redirect : '/user'
    },{
      path : '*',
      redirect : '/user'
    }


    // {path : '/user/:id/:name',component : user}
  ],
//   mode : 'hash'
  mode : 'history',
  scrollBehavior(to,from, savePosition){
    // console.log(to);
    // console.log(from);
    // console.log(savePosition)
    // return {x : 0, y : 1000};
    // return {selector : '#btn'}
    if(savePosition){
      return savePosition;
    }
    if(to.hash){
      return {selectro : to.hash};
    }
    return {x : 0, y : 0}
  }
});
router.beforeEach((to,from,next)=>{
  console.log('quanju')
  // next(); 不执行next 不会进行路由的跳转 ，因为拦截掉了
  // next(false)//同上
  // next('/user')//可以指定跳转到那个路由
  // next({path : ,name : ,query : }) 同上 可以进行配置
  next();
})

router.afterEach((to,from)=>{
  console.log('quanju leave')
  console.log(to,from);
})

export {router}