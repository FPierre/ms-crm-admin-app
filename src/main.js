// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import store from '@/store'
import router from '@/router'
// import auth from '@/auth'

Vue
  .use(VueResource)
  .use(Vuex)
  .use(VueGoogleMaps, {
    load: { key: 'AIzaSyDD8SfGX5Ebz5dsLke_ZjNhP1U6ePL8NOQ' }
  })

// Vue.http.headers.common['Authorization'] = auth.getAuthHeader()
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
