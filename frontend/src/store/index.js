import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: "Non connecté",
    organismeDeFormation: "OpenClassRooms",
    
  },
  mutations: {
  },
  actions: {
  },
  getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.organismeDeFormation} ${currentYear}`
		},
    
    
	},
  modules: {
  }
})
