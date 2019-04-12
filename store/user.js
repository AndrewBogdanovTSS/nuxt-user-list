export const state = () => ({
  users: []
})

export const getters = {}

export const mutations = {
  set(state, payload) {
    state.users = payload
  }
}

export const actions = {
  async get({commit}) {
    const {data} = await this.$axios.get('https://randomuser.me/api/?results=10&inc=name,location,email,picture,location,phone&noinfo')
    commit('set', data.results)
  }
}
