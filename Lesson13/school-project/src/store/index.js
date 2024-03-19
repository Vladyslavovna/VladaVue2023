import { createStore } from 'vuex'

export default createStore({
    state: {
        userName: null,
        subjects: [
            { id: 1, name: 'Math' },
            { id: 2, name: 'English' },
            { id: 3, name: 'History' },
        ],
        teachers: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
            { id: 3, name: 'Jack Doe' },
        ],
        selectedLessons: []
    },
    getters: {
        getUserName: (state) => state.userName,
        getSubjects: (state) => state.subjects,
        getTeachers: (state) => state.teachers,
        getSelectedLessons: (state) => state.selectedLessons
    },
    mutations: {
        setUserName(state, userName) {
            state.userName = userName
        },
        logOut(state) {
            state.userName = null
        },
        setSelectedLessons(state, lessons) {
            state.selectedLessons = lessons;
          },
    },
    actions: {
        setUserName({ commit }, { userName }) {
            commit('setUserName', userName)
        },
        logOut({ commit }) {
            commit('logOut')
        },

        updateSelectedLessons({ commit }, lessons) {
            commit('setSelectedLessons', lessons);
          },
    },
    modules: {},
})
