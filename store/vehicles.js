import vehicles from './vehicles.json'

export const state = () => ({
  vehicles: []
});
export const mutations = ({
  setVehicles: (state, vehicles) => {
    state.vehicles = vehicles
  }
});
export const actions = ({
async getVehicles({commit}) {
    const rejectByChance = () => {
    return Math.random() <= 0.35;
    };
  const Vehicles =
   new Promise((resolve, reject) => {
    if (rejectByChance()) {
      return reject({
      });
    }
    const delay = parseInt(Math.random() * 1000);
    setTimeout(() => {
      resolve(vehicles);
      }, delay);
    });
    Vehicles.then((vehicles) => {
      commit('setVehicles', vehicles)
      return vehicles
    }).catch(e => {
      this.$router.push('error')
    });
  }
});
export const getters = ({
  vehicles(state) {
    return state.vehicles
  },
  vehicle: state => id => state.vehicles.find(v => v.id === id)
});

