import { userService } from "../../services/users";

const actions = {
  async fetchUsers(context) {
    try {
      const response = await userService.fetchUsers();
      context.commit("FETCH_USERS", response.data);
    } catch (error) {
      // handle the error here
    }
  },
  async getUserById(context, userId) {
    try {
      const response = await userService.getUserById(userId);
      context.commit("FETCH_USER", response.data);
    } catch (error) {
      // handle the error here
    }
  }
};

export default actions;
