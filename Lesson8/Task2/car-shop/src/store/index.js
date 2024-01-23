import { createStore } from 'vuex'
import cars from '../data/cars.json'

const store = createStore({
    state() {
        return {
            carList: [],
            filters: {
                category: null,
                type: [],
                model: null,
                brand: null,
            },
        }
    },
    getters: {
        getCarList: (state) => state.carList,
        getUniqueFilterVal: (state) => (filter) =>
            state.carList.map((car) => car[filter]).filter((val, index, arr) => arr.indexOf(val) === index),
        getFilteredCarList: (state) => {
            const filters = state.filters
            return state.carList.filter((car) => {
                return (
                    (!filters.category || car.category === filters.category) &&
                    (!filters.type.length || filters.type.includes(car.type)) &&
                    (!filters.model || car.model === filters.model) &&
                    (!filters.brand || car.brand === filters.brand)
                )
            })
        },
    },
    mutations: {
        setCarList(state, list) {
            state.carList = list
        },
        setFilters(state, filters) {
            state.filters = filters
        },
    },
    actions: {
        loadCarList({ commit }) {
            commit('setCarList', cars)
        },
        updateFilters({ commit }, filters) {
            commit('setFilters', filters)
        },
    },
})

export default store
