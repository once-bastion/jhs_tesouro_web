import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations';
import actions from './actions.js'
Vue.use(Vuex);
const state = {
  loginState: '999',
  formdetail:'',
  sobredetail:{}
};
const getters = {};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
