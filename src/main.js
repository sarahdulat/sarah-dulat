import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
}).$mount('#app')
  
Vue.use(Vuex)

