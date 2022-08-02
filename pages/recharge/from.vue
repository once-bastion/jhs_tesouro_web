<template>
	<view v-html="fromdetail">
		
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState({
				fromdetail:(state)=>state.formdetail
			})
		}
	}
</script>

<style lang="scss">

</style>
