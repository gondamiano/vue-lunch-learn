import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    // Los estados de la aplicacion
    state: {
        team: [],
        userInfoDisplay: {},
        counter: 465,
    },
    // mostrar los states. No se pueden mutar los estados
    getters: {
        getTeam : state => {
            return state.team;
        },
        getTeamLength : state => {
            return state.team.length;
        },
        checkTeamMember : (state) => (id) => {
            return state.team.find(elem =>  elem.id == id );
        },
        getCounter: state => {
            return state.counter;
        }
    },
    // mutar el state.
    // las mutations son siempre sincronicas
    mutations: {
        addUserToTeam(state, user) {
            state.team.push(user);
        },
        increment(state, num) {
            state.counter += num;
        }
    },
    // commitear las mutaciones, son asincronicas
    actions: {
        asyncAddCounter({commit}){
            setTimeout(() => {
                state.commit('increment', 10)
            }, 1000);
        }
    }
});