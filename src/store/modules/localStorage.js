const state = {
  name: "localStorage",
  count: 0
};

const getters = {};

const mutations = {
  incrementLocalCount(state) {
    state.count++;
  }
};

const actions = {
  incrementLocalCount({ commit }) {
    commit("incrementLocalCount");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
