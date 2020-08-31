import Vue from 'vue';
import Vuex from 'vuex';
import vehicles from './vehicles';


Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    vehicles: []
  },
  mutations: {
    setVehicles: (state, vehicles) => {
      state.vehicles = vehicles
    }
  },
  actions: {
    getVehicles({commit}) {
      const rejectByChance = () => {
        return Math.random() <= 0.35;
      };
     const getVehicles =
        new Promise((resolve, reject) => {
          if (rejectByChance()) {
            return reject({
              error: 'Server error',
            });
          }
          const delay = parseInt(Math.random() * 1000);
          setTimeout(() => {
            resolve(vehicles);
          }, delay);
        });
      getVehicles.then((vehicles) => {
        commit('setVehicles', vehicles)
        return vehicles
      })
    }

  },
  getters: {
    vehicles(state) {
      return state.vehicles
    }
  }
});

export default store
