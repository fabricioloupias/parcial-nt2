import { taskService } from "../../services/tasks";

const actions = {
  saveTask(context, task) {
    // eslint-disable-next-line no-async-promise-executor
    const promise = new Promise(async (resolve, reject) => {
      try {
        await taskService.saveTask(task);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });

    return promise;
  },

  async fetchTasks(context) {
    try {
      const response = await taskService.fetchTasks();

      context.commit("FETCH_TASKS", response.data);
    } catch (error) {
      console.log(error);
    }
  }
};

export default actions;
