import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export let getters = {
    getUser: state => {
        return state
    }
}
export let mutations = {
    getUser(user) {
    },
    addUser(state,res_user){
        state.user = res_user
    }
}
export let actions = {
    getUser({commit}, user) {
        commit('getUser', user)
    },
    addUser({commit},user) {
        commit('addUser',user)
    }
}
export default new Vuex.Store({
    state: {
        user: ''
    },
    getters,
    mutations,
    actions
})