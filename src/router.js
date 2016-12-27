/**
 * Created by zzb on 16-12-14.
 */

import Login from './components/login.vue'
import Home from './components/home.vue'
import System from './components/system.vue'
import Persional from './components/persional.vue'
import Money from './components/money.vue'
import Project from './components/project.vue'
import Detail from './components/projectDetail.vue'



const routers   =[{
    path:'/',
    name:'login',
    component:Login
},{
    path:'/home',
    name:'home',
    component:Home,
    children:[{
        path:'project',
        name:'project',
        component:Project,

    },{
        path:'money',
        name:'money',
        component:Money
    },{
        path:'persional',
        name:'persional',
        component:Persional
    },{
        path:'system',
        name:'system',
        component:System
    },{
        path:'project/:id',
        name:'detail',
        component:Detail
    }
    ]
},{
    path:'/login',
    name:'login',
    component:Login
},{
    path:'/project',
    name:'project',
    component:Project,
}];
export default routers;