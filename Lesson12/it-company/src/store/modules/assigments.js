import { getDayById } from '@/store/helpers'

export default {
    namespaced: true,
    state: {
        assigmentsList: [],
    },
    getters: {
        getAssignmentsList: (state) => state.assigmentsList,
        getNewAssigmentsList: (state, getters, rootState, rootGetters) =>
            state.assigmentsList.map((assigment) => ({
                id: assigment.id,
                workerName: rootGetters['workers/getWorkerById'](assigment.workerId).name,
                candidateName: rootGetters['candidates/getCandidateById'](assigment.candidateId).name,
                day: getDayById(assigment.dayId).name,
                positionName: rootGetters['workers/getWorkerById'](assigment.workerId).positionName,
                candidatePositionName: rootGetters['candidates/getCandidateById'](assigment.candidateId).positionName,
            })),
    },
    mutations: {
        addAssigment(state, assigment) {
            state.assigmentsList.push({ ...assigment })
        },
        deleteAssigment(state, id) {
            state.assigmentsList = state.assigmentsList.filter((assigment) => assigment.id !== id)
        },
        deleteAssigmentsByWorkerId(state, workerId) {
            state.assigmentsList = state.assigmentsList.filter((assigment) => assigment.workerId !== workerId)
        },
        deleteAssigmentsByCandidateId(state, candidateId) {
            state.assigmentsList = state.assigmentsList.filter((assigment) => assigment.candidateId !== candidateId)
        },
    },
    actions: {
        addAssignmentAction({ commit }, assignmentData) {
            commit('addAssigment', {
                id: new Date().getTime(),
                ...assignmentData,
            })
        },
        deleteAssigment({ commit }, id) {
            commit('deleteAssigment', id)
        },
        deleteAssigmentsByWorkerId({ commit }, workerId) {
            commit('deleteAssigmentsByWorkerId', workerId)
        },
    },
}
