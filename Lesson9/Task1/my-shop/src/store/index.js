import { createStore } from 'vuex'
import categories from '../data/categories.json'
import products from '../data/products.json'
const store = createStore({
    state() {
        return {
            categoriesList: [],
            productsList: [],
        }
    },
    getters: {
        getCategoristList: (state) => state.categoriesList,
        getProductsByCategory: (state) => (categoryId) => {
            return state.productsList.filter((product) => product.categoryId == categoryId)
        },
    },
    mutations: {
        setCategoriesList(state, list) {
            state.categoriesList = list
        },
        setProductsList(state, list) {
            state.productsList = list
        },
    },
    actions: {
        loadCategoriesList({ commit }) {
            commit('setCategoriesList', categories)
        },
        loadProductsList({ commit }) {
            console.log('Loading products...')
            commit('setProductsList', products)
        },
    },
})
export default store
