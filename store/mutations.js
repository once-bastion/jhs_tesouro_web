export default {
	CHANGESTATE(state, msg) {
		state.loginState = msg
	},
	CHANGEFROM(state,msg){
		state.formdetail = msg
	},
	CHANGESOBREDETAIL(state,msg){
		state.sobredetail = msg
	}
}
