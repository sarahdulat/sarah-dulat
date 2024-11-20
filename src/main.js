import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

Vue.use(Vuex)
