import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            {
                id: 1,
                title: 'Tomato',
                image: 'https://fruit-boutique.com.ua/content/images/42/480x320l50nn0/pomidor-rozovyy-98830411491053.png',
                price: 10.99,
            },
            {
                id: 2,
                title: 'Apple',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0n68XAsJLpuRV3XSpHCW4crZYzUgIR-kIyyVQh-RPw&s',
                price: 5.99,
            },
            {
                id: 3,
                title: 'Banana',
                image: 'https://ovocheva-poshta.com.ua/images/virtuemart/product/banan8.jpg',
                price: 3.99,
            },
            {
                id: 4,
                title: 'Carrot',
                image: 'https://agrarii-razom.com.ua/sites/default/files/byr/morkva_zvichayna.jpg',
                price: 2.49,
            },
            {
                id: 5,
                title: 'Strawberry',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkEm_JiN4OPk9E4jj9YP2aL-QQ_arx1c9KhzPVh7pSg&s',
                price: 7.99,
            },
        ],
        owners: [
            {
                id: 1,
                title: 'Надія',
                image: 'https://www.b17.ru/foto/article/128442.jpg',
                advantages: 'https://cdn-icons-png.flaticon.com/512/31/31825.png',
            },
            {
                id: 2,
                title: 'Віктор',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUm7RE_4g9_s2cAeKRe1yidgDgffae4-GldxHnBU0hhw&s',
                advantages: '',
            },
            {
                id: 3,
                title: 'Антон',
                image: 'https://img.modivo.cloud/product(c/5/d/f/c5df81fb8c718bc35307be023e42f0fb2d36bbdb_05_5056473714024.jpg,jpg)/lyle-scott-pizhama-anton-lslset971-cinii-regular-fit.jpg',
                advantages: 'https://cdn-icons-png.flaticon.com/512/31/31825.png',
            },
            {
                id: 4,
                title: 'Анна',
                image: 'https://img.tsn.ua/cached/230/tsn-d7721072f5f1787fa1f16a6df613a75f/thumbs/428x268/c0/0d/3c052b5a2723d5d2c385f6ab36f70dc0.jpeg',
                advantages: 'https://svgsilh.com/svg/297750.svg',
            },
        ],
        filteredProducts: [],
    },

    getters: {
        getProductsList: (state) => state.products,
        getOwnersList: (state) => state.owners,
        getFilteredProducts: (state) => state.filteredProducts,
    },

    mutations: {
        setFilteredProducts: (state, filteredProducts) => {
            state.filteredProducts = filteredProducts
        },
        resetFilteredProducts: (state) => {
            state.filteredProducts = state.products // сбрасываем фильтрацию к начальному состоянию
        },
        addProduct: (state, product) => {
            state.products.push(product)
        },
    },

    actions: {
        filterProductByName({ commit, state }, name) {
            const filteredProducts = state.products.filter((product) =>
                product.title.toLowerCase().includes(name.toLowerCase())
            )
            commit('setFilteredProducts', filteredProducts)
        },
        resetFilter({ commit }) {
            commit('resetFilteredProducts')
        },
        addProduct({ commit }, product) {
            commit('addProduct', {
                id: new Date().getTime(),
                ...product,
            })
        },
    },

    modules: {},
})
