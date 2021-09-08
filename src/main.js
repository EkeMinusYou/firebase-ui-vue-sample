import { createApp } from 'vue'
import App from './App.vue'

import firebase from 'firebase/app';
import router from './router'
const firebaseConfig = {
  apiKey: "AIzaSyCdDuOowy22qzYTgwAl_DdKv6pcbHIZAY0",
  authDomain: "fir-ui-vue-sample.firebaseapp.com",
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
