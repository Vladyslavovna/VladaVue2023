import { createStore } from 'vuex'
import workers from './modules/workers'
import candidates from './modules/candidates'
import assigments from './modules/assigments'
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        workers,
        candidates,
        assigments,
    },
})
