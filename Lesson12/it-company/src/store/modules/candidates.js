
export default {
    namespaced: true,
    state: {
        candidatesList: [
            {
                name: 'Olga',
                id: 1,
                positionName: 'Office Manager',
            },
            {
                name: 'Anya',
                id: 2,
                positionName: 'Cleaner',
            },
            {
                name: 'Petro',
                id: 3,
                positionName: 'Junior Developer',
            },
        ],
    },
    getters: {
        getCandidatesList: (state) => state.candidatesList,
        getCandidateById: (state) => (id) => state.candidatesList.find((candidate) => candidate.id == id),
    },
    mutations: {
        updateCandidates(state, candidateObj) {
            const candidateIndex = state.candidatesList.findIndex((candidate) => candidate.id == candidateObj.id)
            state.candidatesList[candidateIndex] = candidateObj
        },
        deleteCandidate(state, id) {
            state.candidatesList = state.candidatesList.filter((candidate) => candidate.id !== id)
        },
        addCandidate(state, candidate) {
            state.candidatesList.push(candidate)
        },
    },
    actions: {
        updateCandidates({ commit }, candidate) {
            commit('updateCandidates', candidate)
        },
        deleteCandidate({ commit, dispatch }, id) {
            commit('deleteCandidate', id)
            dispatch('assignments/deleteAssigmentsByCandidateId', id, { root: true })
        },
        addCandidate({ commit }, candidateData) {
            commit('addCandidate', {
                id: new Date().getTime(),
                ...candidateData,
            })
        },
    },
    modules: {},
}
