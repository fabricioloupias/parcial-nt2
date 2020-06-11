const mutations = {
  FETCH_USERS: (state, payload) => {
    state.users = payload;
  },
  FETCH_USER: (state, payload) => {
    state.user = payload;
  }
};

export default mutations;
