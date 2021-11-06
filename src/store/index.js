import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { apiKey, baseUrl } from '../helpers/variables'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
		headlines: [],
		categoryNews: [],
		sources: []
    },
	getters: {
		getHeadlines: (state) => state.headlines,
		getCategoryNews: (state) => state.categoryNews,
		getSources: (state) => state.sources
	},
    mutations: {
		setHeadlines: (state, payload) => state.headlines = payload,
		setCategoryNews: (state, payload) => state.categoryNews = payload,
		setSources: (state) => {
			const result = state.headlines.map(headlines => headlines.source)
			state.sources = result
		}
    },
    actions: {
		async fetchHeadlines({ commit }) {
			try {
				const news = await axios.get(`${baseUrl}/top-headlines?country=ng&apiKey=${apiKey}`)
				commit('setHeadlines', news.data.articles)
				commit('setSources')
			}
			catch(e) {
				console.log(e)
			}
		},
		async fetchCategoryNews({ commit }, category) {
			try {
				const categoryNews = await axios.get(`${baseUrl}/top-headlines?country=ng&category=${category}&apiKey=${apiKey}`)
				commit('setCategoryNews', categoryNews.data.articles)
			}
			catch(e) {
				console.log(e)
			}
		},
		// async fetchFilteredHeadlines({commit}, sources) {
		// 	try {
		// 		const categoryNews = await axios.get(`${baseUrl}/top-headlines?category=${category}&apiKey=${apiKey}`)
		// 		commit('setCategoryNews', categoryNews.data.articles)
		// 	}
		// 	catch(e) {
		// 		console.log(e)
		// 	}
		// }
    },
    modules: {
    }
})