import { createApp } from 'vue'
import App from './App.vue'

import firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyCdDuOowy22qzYTgwAl_DdKv6pcbHIZAY0",
  authDomain: "fir-ui-vue-sample.firebaseapp.com",
};
firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')
