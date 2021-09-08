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
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          const isNewUser = authResult.additionalUserInfo.isNewUser;
          if (isNewUser) {
            authResult.user.delete();
            return false;
          }
          return true;
        }
      },
      signInSuccessUrl: 'http://localhost:8080/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ]
    });
  }
});
</script>
