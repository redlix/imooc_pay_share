import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/axios.js'
import './plugins/vux.js'
import '@/assets/fonts/iconfont.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
