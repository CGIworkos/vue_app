import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin.js'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyB7R-GBlTn5BZU5ba7MS45dYgKbwBryrGo",
  authDomain: "vue-crm-bd.firebaseapp.com",
  databaseURL: "https://vue-crm-bd.firebaseio.com",
  projectId: "vue-crm-bd",
  storageBucket: "vue-crm-bd.appspot.com",
  messagingSenderId: "690936104433",
  appId: "1:690936104433:web:e478b75fd3bcfd6be6f050"
})

let app

firebase.auth().onAuthStateChanged(()  => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }  
})


