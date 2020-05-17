export const state = () => ({
  information: [],
})

export const getters = {
  getInformation(state) {
    return state.information
  },
}

export const mutations = {
  addInformation: (state, payload) => {
    state.information = payload
  }
}

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('getInformation')
  },

  async getInformation({ commit }) {
    const { data } = await this.$axios.get(process.env.BASE_URL + '/data/topInfo.json')
    commit("addInformation", data[0]);
  },
}
