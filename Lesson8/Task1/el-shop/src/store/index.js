import { createStore } from 'vuex'
import headers from '../data/header.json'
import products from '../data/products.json'

const store = createStore({
    state() {
        return {
            headers: [],
            products: {},
            selectedCategory: null,
        }
    },
    getters: {
        getHeaders: (state) => state.headers,
        getProducts: (state) => state.products,
        getSelectedCategory: (state) => state.selectedCategory,
    },
    mutations: {
        setHeaders(state, list) {
            state.headers = list
        },
        setProducts(state, list) {
            state.products = list
        },
        setSelectedCategory(state, categoryId) {
          state.selectedCategory = categoryId
        }
    },
    actions: {
        loadHeaders({ commit }) {
            commit('setHeaders', headers)
        },
        loadProducts({ commit }) {
            commit('setProducts', products)
        },
        loadSelectedCategory({ commit }, categoryId) {
          commit('setSelectedCategory', categoryId)
        }
    },
})
export default store
