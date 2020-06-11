<template>
  <div class="home">
    <b-container>
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
    this.$store.dispatch("usersModule/fetchUsers");
    this.$store.dispatch("tasksModule/fetchTasks");
  },
  data(){
    return {
      // users: this.$store.state.usersModule.users,
      user: this.$store.state.usersModule.user
    };
  },
  computed: {
    users() {
      return this.$store.state.usersModule.users;
    },
    // user() {
    //   return this.$store.state.usersModule.user;
    // }
  },
  methods: {
    userById() {
      this.$store.dispatch("usersModule/getUserById", 1);
    }
  }
};
</script>
