import { httpClient } from "../api";

const END_POINT = "/tasks";

export const taskService = {
  saveTask(task) {
    return httpClient.post(END_POINT, task);
  },

  fetchTasks() {
    return httpClient.get(END_POINT);
  }
};
