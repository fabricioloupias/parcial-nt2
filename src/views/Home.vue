<template>
  <div class="home">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Todo App</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0" @click="signOut">Sign out</b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-container class="mt-5">
      <form-task />
      <div class="my-5 bg-warning">
        <p>Respuestas: 1-c, 2-c, 3-c, 4-b, 5-a, 6-b</p>
      </div>
      <task-list />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import FormTask from "@/components/FormTask.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "Home",
  components: {
    FormTask,
    TaskList
  },
  mounted() {
    this.$store.dispatch("tasksModule/fetchTasks");
  },
  methods: {
    signOut() {
      this.$store.dispatch("usersModule/signOut");
      this.$router.push({ path: "auth" });
    }
  }
};
</script>
