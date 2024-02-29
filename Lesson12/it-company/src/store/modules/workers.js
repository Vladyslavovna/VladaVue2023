export default {
    namespaced: true,
    state: {
        workersList: [
            {
                name: 'John',
                id: 1,
                positionName: 'Manager',
            },
            {
                name: 'Alex',
                id: 2,
                positionName: 'Developer',
            },
            {
                name: 'Mike',
                id: 3,
                positionName: 'Designer',
            },
        ],
    },
    getters: {
        getWorkersList: (state) => state.workersList,
        getWorkerById: (state) => (workerId) => state.workersList.find((worker) => worker.id == workerId),
    },
    //нужно не забывать что удалить работника нужно будет со всех компонентов
    mutations: {
        updateWorker(state, workerObj) {
            const workerIndex = state.workersList.findIndex((worker) => worker.id == workerObj.id)
            state.workersList[workerIndex] = workerObj
        },
        deleteWorker(state, id) {
            state.workersList = state.workersList.filter((worker) => worker.id !== id)
        },
        addWorker(state, worker) {
            state.workersList.push(worker)
        },
    },
    actions: {
        deleteWorker({ commit, dispatch }, workerId) {
            commit('deleteWorker', workerId)
            dispatch('assigments/deleteAssigmentsByWorkerId', workerId, { root: true })
        },
        updateWorker({ commit }, worker) {
            commit('updateWorker', worker)
        },
        addWorker({ commit }, workerData) {
            commit('addWorker', {
                id: new Date().getTime(),
                ...workerData,
            })
        },
    },
    modules: {},
}
