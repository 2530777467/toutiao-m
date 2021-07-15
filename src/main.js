import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'   //加载 Vant 组件库
import 'vant/lib/index.css'  //加载 Vant 组件库样式

Vue.use(Vant)  //全局注册 Vant 中的组件

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
