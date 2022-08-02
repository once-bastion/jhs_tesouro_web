<template>
	<view>
		<u-navbar :title="$t('sobre.gywm')"></u-navbar>
		<view class="sobre-list" @click="Jump(item)" v-for="(item,index) in newsList" :key="index">
			<view class="sobre-list-left">
				<image src="../../assets/images/index/sobre1.png" mode="widthFix"></image>
				{{item.title}}
			</view>
			<view class="sobre-list-right">
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		data() {
			return {
				newsList:[],
			};
		},
		mounted(){
			this.getNews();
		},
		methods:{
			getNews(){
				api.newsList(this,{type:1},back=>{
					if( back.code == 1 ){
						this.newsList = back.data;
					}
				})
			},
			Jump(item){
				this.$store.commit('CHANGESOBREDETAIL',item)
				this.$mRouter.push({
					path:'/pages/index/about'
				})
			}
		}
	}
</script>

<style lang="scss">
	.sobre-list {
		margin: 25rpx;
		padding: 35rpx 45rpx;
		box-shadow: 0 5rpx 16rpx 0 rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 15rpx;

		.sobre-list-left {
			display: flex;
			align-items: center;
			image {
				width: 50rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
