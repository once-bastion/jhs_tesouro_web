<template>
	<view>
		<view class="box-item" v-for="(item,index) in list" :key="index">
			<view class="list">
				<view class="list-left">
					{{$t('record.ddh')}}
				</view>
				<view class="list-right">
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
					{{$t('record.txje')}}
				</view>
				<view class="list-right">
					{{item.money}}
				</view>
			</view>
			<view class="list">
				<view class="list-left">
					{{$t('record.sxf')}}
				</view>
				<view class="list-right">
					{{item.charge}}
				</view>
			</view>

			<view class="list">
				<view class="list-left">
					{{$t('record.ddzt')}}
				</view>
				<view class="list-right">
					<text style="color: #39e355;" v-if="item.status==1">{{$t('record.ywc')}}</text>
					<text style="color: #ff0000;" v-else-if="item.status==2">{{$t('record.yjj')}}</text>
					<text style="color: #d28c1b;" v-else>{{$t('record.wsh')}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'withdraw-item',
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
