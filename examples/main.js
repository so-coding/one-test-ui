import Vue from 'vue'
import App from './App.vue'
import vueui from '../lib'
Vue.use(vueui)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
