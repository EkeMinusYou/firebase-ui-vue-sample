<template>
  <div class="signin">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default defineComponent({
  name: "Signin",
  mounted: () => {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: '', // TODO: redirectUrl
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    });
  }
});
</script>
