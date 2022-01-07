import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connexion: "connecté",
    organismeDeFormation: "OpenClassRooms",
    etudiant: "Thomas Euverte",
    projets: [
      {
        name: "Projet 1",
        description: "Comprendre le web et le métier de développeur"
      },
      {
        name: "Projet 2",
        description: "Apprendre HTML5 et CSS"
      }

    ]
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
