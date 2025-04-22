import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activities: [],
    isCompletedActivity: [],
  },
  mutations: {
    ADD_ACTIVITY(state, activity) {
      state.activities.push(activity)
      state.isCompletedActivity.push(false)
      localStorage.setItem('activities', JSON.stringify(state.activities))
      localStorage.setItem('completed', JSON.stringify(state.isCompletedActivity))
    },
    DELETE_ACTIVITY(state, index) {
      state.activities.splice(index, 1)
      state.isCompletedActivity.splice(index, 1)
      localStorage.setItem('activities', JSON.stringify(state.activities))
      localStorage.setItem('completed', JSON.stringify(state.isCompletedActivity))
    },
    UPDATE_ACTIVITY(state, { index, newValue }) {
      state.activities.splice(index, 1, newValue)
      localStorage.setItem('activities', JSON.stringify(state.activities))
    },
    TOGGLE_COMPLETE(state, index) {
      state.isCompletedActivity.splice(index, 1, !state.isCompletedActivity[index])
      localStorage.setItem('completed', JSON.stringify(state.isCompletedActivity))
    },
    LOAD_ACTIVITIES(state) {
      const activities = JSON.parse(localStorage.getItem('activities'))
      const completed = JSON.parse(localStorage.getItem('completed'))
      state.activities = activities || []
      state.isCompletedActivity = completed || []
    },
    CLEAR_ALL(state) {
      state.activities = []
      state.isCompletedActivity = []
      localStorage.removeItem('activities')
      localStorage.removeItem('completed')
    }
  },
  actions: {
    loadActivities({ commit }) {
      commit('LOAD_ACTIVITIES')
    }
  },
  getters: {
    allActivities: state => state.activities,
    completedStatus: state => state.isCompletedActivity,
  }
})
