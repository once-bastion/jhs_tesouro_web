<template>
	<view>
		<u-sticky>
			<view class="box-item">
				<view class="list">
					{{$t('invite.jllx')}}
				</view>
				<view class="list" style="text-align: center;">
					{{$t('invite.money')}}
				</view>
				<view class="list" style="text-align: center;">
					{{$t('invite.source')}}
				</view>
				<view class="list" style="text-align: right;">
					{{$t('invite.time')}}
				</view>
			</view>
		</u-sticky>
		<view class="box-item" v-for="(item,index) in list" :key="index">
			<view class="list">
				{{item.type_text}}
			</view>
			<view class="list" style="text-align: center;">
				+{{item.money}}
			</view>
			<view class="list" style="text-align: center;">
				{{item.source}}
			</view>
			<view class="list" style="text-align: right;">
				{{item.createtime | dataFormat('YYYY-MM-DD HH:mm:ss')}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'box-item',
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
		margin: 10rpx;
		background-color: #fff;
		border-radius: 8rpx;
		overflow: hidden;
		padding: 5rpx 0;
		display: flex;
		align-items: center;

		.list {
			padding: 15rpx;
			flex: 1;
			font-size: 28rpx;
			color: #333;
		}
	}
</style>
