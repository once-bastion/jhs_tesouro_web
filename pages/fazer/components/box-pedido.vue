<template>
	<view class="box-pedido-main">
		<view class="pedido-title">
			{{list[0].title}}
		</view>
		<view class="pedido-item">
			<view v-html="list[0].newscontent">
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		name: 'box-pedido',
		data() {
			return {
				list: []
			};
		},
		mounted() {
			// for (var i = 0; i < 6; i++) {
			// 	this.list.push({
			// 		txt: " A comissão para fazer um pedido é uniformemente baseada no valor do pedido "
			// 	})
			// }
			this.getNews();
		},
		methods:{
			getNews(){
				api.news(this, {type:4}, back => {
					if (back.code == 1) {
						this.list = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.box-pedido-main {
		margin: 25rpx;
		background-color: #fff;
		border-radius: 15rpx;
		// box-shadow: 0 4rpx 16rpx 0 rgba(0, 0, 0, 0.1);
		overflow: hidden;
		padding-bottom: 15rpx;

		.pedido-item {
			padding: 25rpx;
			// display: flex;
			// justify-content: space-between;
			// align-items: center;
			font-size: 24rpx;
			line-height: 1.6;
			color: #333;
			// display: flex;
			// align-items: flex-start;

			span {
				font-size: 24rpx;
				font-weight: 700;
				color: #000;
				margin-right: 8rpx; 
			}
		}

		.pedido-title {
			padding: 25rpx;
			text-align: center;
			color: #999999;
			font-size: 32rpx;
			border-bottom: 1px solid #f6f6f6;
		}
	}
</style>
