<template>
  <div class="about">
    <h1>{{accessToken}}</h1>
  </div>
</template>
<script>
import auth from '../auth.ts'

export default {
  name: 'Home',
  data: () => {
    return {
      accessToken: '',
    };
  },
  async created() {
    this.accessToken = await auth.getAccessToken();
  },
}
</script>
