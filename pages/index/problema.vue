<template>
	<view>
		<u-navbar title="Problema"></u-navbar>

		<view class="problema-list" @click="Jump(item)" v-for="(item,index) in list" :key="index">
			<view class="problema-list-left">
				<image src="../../assets/images/index/sobre1.png" mode="widthFix"></image>
				{{item.title}}
			</view>
			<view class="problema-list-right">
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<u-empty v-if="!list.length" text="No data" mode="data" :icon="require('../../assets/images/index/empty.png')">
		</u-empty>
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		data() {
			return {
				list: []
			};
		},
		mounted() {
			this.getList()
		},
		methods: {
			Jump(item){
				this.$store.commit('CHANGESOBREDETAIL',item)
				this.$mRouter.push({
					path:'/pages/index/about'
				})
			},
			getList() {
				api.news(this, 'type=2', back => {
					if (back.code == 1) {
						this.list = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.problema-list {
		margin: 25rpx;
		padding: 35rpx 45rpx;
		box-shadow: 0 5rpx 16rpx 0 rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 15rpx;

		.problema-list-left {
			display: flex;
			align-items: center;

			image {
				width: 50rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
