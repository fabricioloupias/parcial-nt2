const mutations = {
  FETCH_TASKS: (state, payload) => {
    state.tasks = payload;
  }
};

export default mutations;
