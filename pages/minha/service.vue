<template>
	<view>
		<u-navbar :title="$t('service.kfzx')"></u-navbar>
		<view class="problema-list" @click="Jump(item)" v-for="(item,index) in list" :key="index">
			<view class="problema-list-left">
				<span v-if="item.type == 1">WhatsApp:</span>
				<span v-else-if="item.type == 2 || item.type == 4">on line service</span>
				<span v-else-if="item.type == 3">INS:</span>
				<span v-if="item.type != 2 && item.type != 4">{{item.account}}</span>
			</view>
			<view class="problema-list-right">
				<u-icon color="#18B566;" name="kefu-ermai"></u-icon>
				<view class="btn" @click="Jump(item)">
					{{$t('service.lxkf')}}
				</view>
			</view>
		</view>
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
			this.service()
		},
		onShow(){
			this.$setTar()
		},
		methods: {
			service() {
				api.service(this, '', back => {
					if (back.code == 1) {
						this.list = back.data
					}
				})
			},
			Jump(item) {
				// #ifdef APP-PLUS
				plus.runtime.openURL(item.url)
				// #endif
				// #ifdef H5
				window.open(item.url, "_blank")
				// #endif
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

		.problema-list-right {
			display: flex;
			align-items: center;

			.btn {
				padding: 15rpx;
				background-color: #18B566;
				margin-left: 15rpx;
				color: #FFFFFF;
				border-radius: 10rpx;
			}
		}
	}
</style>
