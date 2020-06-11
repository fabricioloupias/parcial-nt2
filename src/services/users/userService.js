import { httpClient } from "../api";

const END_POINT = "/users";

export const userService = {
  fetchUsers() {
    return httpClient.get(END_POINT);
  },
  getUserById(userId) {
    return httpClient.get(`${END_POINT}/${userId}`);
  },
  createUser(username, password) {
    return httpClient.post(END_POINT, { username, password });
  }
};
