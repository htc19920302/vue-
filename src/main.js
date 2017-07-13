import Vue from 'vue'
import App from './App'
import router from "./router/router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
