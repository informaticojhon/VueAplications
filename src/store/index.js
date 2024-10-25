import { createStore } from 'vuex';

// Crea el store
export default createStore({
  state: {
    contador: 0, // Un ejemplo de estado inicial
  },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    decrementar(state) {
      state.contador--;
    },
  },
  actions: {
    incrementar({ commit }) {
      commit('incrementar');
    },
    decrementar({ commit }) {
      commit('decrementar');
    },
  },
  getters: {
    contador: state => state.contador,
  },
});
