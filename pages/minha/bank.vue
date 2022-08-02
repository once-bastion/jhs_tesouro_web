<template>
	<view>
		<u-navbar title="cartão do banco"></u-navbar>
		<view class="bank-list" @click="add">
			<u-icon style="margin-right: 15rpx;" name="plus" size="20"></u-icon>
			 Adicionar um cartão bancário 
		</view>
		<box-popup ref="boxPopup"></box-popup>
	</view>
</template>

<script>
	import boxPopup from './components/box-popup.vue'
	export default {
		data() {
			return {

			};
		},
		components:{
			[boxPopup.name]:boxPopup
		},
		methods:{
			add(){
				this.$refs.boxPopup.show = true
			}
		}
	}
</script>

<style lang="scss">
	.bank-list {
		margin: 25rpx;
		padding:35rpx 25rpx;
		background-color: #FFFFFF;
		border-radius: 15rpx;
		box-shadow: 0 2rpx 16rpx 0 rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		font-weight: 700;
		font-size: 28rpx;
	}
</style>
