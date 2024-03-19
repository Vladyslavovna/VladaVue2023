import { createStore } from 'vuex'

export default createStore({
    state: {
        userName: null,
        lessons: [
            {
                id: 1,
                title: 'Lesson 1',
            },
            {
                id: 2,
                title: 'Lesson 2',
            },
            {
                id: 3,
                title: 'Lesson 3',
            },
        ],
        teachers: [
            {
                id: 1,
                title: 'Teacher 1',
            },
            {
                id: 2,
                title: 'Teacher 2',
            },
            {
                id: 3,
                title: 'Teacher 3',
            },
        ],
    },
    getters: {
        getLessons(state) {
            return state.lessons
        },
        getLessonById: (state) => (lessonId) => {
            return state.lessons.filter((lesson) => lesson.id == lessonId)
        },
        getUserName: (state) => state.userName,
        getLessonTitleById: (state) => (lessonId) => {
            return state.lessons.find((lesson) => lesson.id == lessonId)
        },
        getTeachers(state) {
            return state.teachers
        },
        getTeacherById: (state) => (teacherId) => {
            return state.teachers.filter((teacher) => teacher.id == teacherId)
        },
        getTeacherTitleById: (state) => (teacherId) => {
            return state.teachers.find((teacher) => teacher.id == teacherId)
        },
    },
    mutations: {
        logOut(state) {
            state.userName = null
        },
        setUserName(state, userName) {
            state.userName = userName
        },
    },
    actions: {
        logOut({ commit }) {
            commit('logOut')
        },
        setUserName({ commit }, { userName }) {
            commit('setUserName', userName)
        },
    },
    modules: {},
})
