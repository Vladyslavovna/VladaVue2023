import { createStore } from 'vuex'
import { contacts } from '@/data/users'
import { filterUsers } from './helpers'
export default createStore({
    state: {
        generalUsersList: [],
        filter: '',
    },
    getters: {
        usersList: (state) => state.generalUsersList,
        filteredUsersList: (state) => {
            return filterUsers(state.generalUsersList, state.filter)
        },
    },

    mutations: {
        setUsersList(state, list) {
            state.generalUsersList = list
        },
        addUser(state, user) {
            state.generalUsersList.push(user)
        },
        setFilter(state, filter) {
            state.filter = filter
        },
    },
    actions: {
        loadUsersList({ commit }) {
            commit('setUsersList', contacts)
        },
        addUser({ commit }, user) {
            commit('addUser', {
                id: new Date().getTime(),
                ...user,
            })
        },
        setFilter({ commit }, filter) {
            commit('setFilter', filter)
        },
    },

})
