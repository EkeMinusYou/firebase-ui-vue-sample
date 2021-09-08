<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import auth from '../auth.ts'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    logout: async () => {
      await auth.signOut();
    }
  }
}
</script>
