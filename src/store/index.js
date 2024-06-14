import { createStore } from 'vuex'



export default createStore({
  state: {
    selectedOption: null,
    selectedItems: [],
    timePeriod:'monthly'
  },

  getters: {
    selectedOption: state => state.selectedOption,
    getSelectedItems(state) {
      return state.selectedItems;
    },
    getTimePeriod(state){
      return state.timePeriod
    },
    getTotalPrice(state) {
      return state.selectedItems.reduce((total, item)=>{
        const monthPrice = item.money?.month || 0;
        const yearPrice = item.money?.year || 0;
        const price = state.timePeriod === 'monthly' ? monthPrice : yearPrice;
        return total + price 
      }, 0);
    }
  },

  mutations: {
    setSelectedOption(state, option) {
      state.selectedOption = option;
    },
    setSelectedItems(state, items){
      state.selectedItems = items;
    },
    setTimePeriod(state, period){
      state.timePeriod = period
    }
  },

  actions: {
    selectOption({ commit }, option) {
      commit('setSelectedOption', option);
    },
    updateSelectedItems({commit}, items){
      commit('setSelectedItems',items);
    },
    updateTimePeriod({commit}, period){
      commit('setTimePeriod', period)
    }
  },

  modules: {
  }
})
