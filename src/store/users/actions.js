import { userService } from "../../services/users";

const actions = {
  async signIn(context, user) {
    try {
      const isAuth = await userService.signIn(user);
      context.commit("SET_IS_AUTH", isAuth);
    } catch (error) {
      // handle the error here
    }
  },

  async signOut(context) {
    context.commit("SET_IS_AUTH", false);
  }
};

export default actions;
