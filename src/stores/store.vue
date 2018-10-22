import Vue from 'vue'
import Vuex from 'vuex'
window.Vuex = Vuex
Vue.use(Vuex)


export default new Vuex.Store({
    // Los estados de la aplicacion
    state: {
        team: [],
        userInfoDisplay: {},
        counter: 3,
        jared: '',
    },
    // mostrar los states. No se pueden mutar los estados
    getters: {
        getTeam = state => {
            return state.team;
        },
    },
    // mutar el state.
    // las mutations son siempre sincronicas
    mutations: {
        addUserToTeam = (state, user) => {
            state.team.push(user);
        },
    },
    // commitear las mutaciones, son asincronicas
    actions: {
        asyncAddUserTotTeam = ({commit}, asyncUser) => {
            setTimeout(() => {
            })
        }
    }
});