<template>
  <div class="home">
    <b-container>
      <form-user />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import FormUser from "@/components/FormUser.vue";

export default {
  name: "Home",
  components: {
    FormUser
  },
  mounted() {
    this.$store.dispatch("usersModule/fetchUsers");
  },
  computed: {
    users() {
      return this.$store.state.usersModule.users;
    },
    user() {
      return this.$store.state.usersModule.user;
    }
  },
  methods: {
    userById() {
      this.$store.dispatch("usersModule/getUserById", 1);
    }
  }
};
</script>
