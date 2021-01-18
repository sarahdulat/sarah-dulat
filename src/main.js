import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store: store,
    render: h => h(App),
}).$mount('#app')
  
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

    },
    mutations: {

    }
})

export default new Vuex.Store(store)
