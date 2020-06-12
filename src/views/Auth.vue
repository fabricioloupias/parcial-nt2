<template>
  <div class="home">
    <b-container>
      <sign-in />
    </b-container>
  </div>
</template>

<script>
import SignIn from "../components/SignIn.vue";

export default {
  name: "auth",
  components: {
    SignIn
  },

  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  }
};
</script>
