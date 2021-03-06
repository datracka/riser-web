// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

import App from './App'
import router from './router'
import config from './config'
import store from './store'

Vue.use(BootstrapVue)

let app

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      store,
      router,
      template: '<App/>',
      components: {
        App
      }
    })
  }
})
