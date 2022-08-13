<template>
	<view>
		<view class="box-item" v-for="(item,index) in list" :key="index">
			<view class="list">
				<view class="list-left">
					{{$t('record.ddh')}}
				</view>
				<view class="list-right" style="width: 500rpx;">
					{{item.order_sn}}
				</view>
			</view>
			<view class="list">
				<view class="list-left">
					{{$t('record.cjsj')}}
				</view>
				<view class="list-right">
					{{item.createtime | dataFormat('YYYY-MM-DD HH:mm:ss')}}
				</view>
			</view>
			<view class="list">
				<view class="list-left">
					{{$t('record.czje')}}
				</view>
				<view class="list-right">
					{{item.money}}
				</view>
			</view>
			<view class="list">
				<view class="list-left">
					{{$t('record.dzje')}}
				</view>
				<view class="list-right">
					{{item.enter_money}}
				</view>
			</view>
			<view class="list">
				<view class="list-left">
					{{$t('record.ddzt')}}
				</view>
				<view class="list-right">
					<text style="color: #E5B01A;" v-if="item.status==0">{{$t('record.wcl')}}</text>
					<text style="color: #39e355;" v-else-if="item.status==1 || item.status==3">{{$t('record.ywc')}}</text>
					<text style="color: #ff0000;" v-else-if="item.status==2">{{$t('record.yqx')}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'recharge-item',
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		methods: {

		}

	}
</script>

<style lang="scss" scoped>
	.box-item {
		margin: 20rpx;
		background-color: #fff;
		border-radius: 8rpx;
		box-shadow: 0 4rpx 16rpx 0 rgba(0, 0, 0, 0.1);
		overflow: hidden;
		padding: 25rpx 0;

		.list {
			padding: 15rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			color: #333;

			.list-left {}

			.list-right {
				margin-left: 20rpx;
				display: flex;
				justify-content: flex-end;
				// width: calc(100% - #{400rpx});
				align-items: center;


			}
		}
	}
</style>
