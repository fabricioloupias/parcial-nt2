import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./users";
import tasksModule from "./tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasksModule: tasksModule,
    usersModule: usersModule
  }
});
