import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueBus from 'vue-bus'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import store from './vuex/store'
import App from './app.vue'

import routes from './router';

Vue.config.debug = true;
Vue.use(VueRouter)
Vue.use(VueResource);
Vue.use(Element)
Vue.use(VueBus)

const router = new VueRouter({
    mode: 'history',
    routes
})
var user={'name':'slient','password':'a123456'}

sessionStorage.setItem('user',JSON.stringify(user))


var bus =new Vue()



const app= new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')