<template>

	<view class="tarefa-header">
		<view class="header-row">
			<view class="header-row-item">
				<view class="top">
					{{$t('tarefa.ye')}}
				</view>
				<view class="bottom">
					R$ <text class="bottom-txt">{{statistics.money}}</text>
				</view>
			</view>
			<view class="header-row-item">
				<view class="top">
					{{$t('tarefa.dfbj')}}
				</view>
				<view class="bottom">
					R$ <text class="bottom-txt">{{statistics.freeze}}</text>
				</view>
			</view>
			<!-- <view class="header-row-item">
					<view class="top">
						{{$t('tarefa.rw')}}
					</view>
					<view class="bottom">
						{{statistics.fulfill_order_count}}/{{statistics.order_count}}
					</view>
				</view> -->
		</view>
		<view class="header-row">
			<view class="header-row-item">
				<view class="top">
					{{$t('tarefa.yj')}}
				</view>
				<view class="bottom">
					R$ <text class="bottom-txt">{{statistics.bonus}}</text>
				</view>
			</view>

			<view class="header-row-item">
				<view class="top">
					{{$t('tarefa.dfyj')}}
				</view>
				<view class="bottom">
					R$ <text class="bottom-txt">{{statistics.future_bonus}}</text>
				</view>
			</view>
		</view>
		<view class="tarefa-con">
			{{$t('tarefa.rw')}} <text>{{statistics.fulfill_order_count}}/{{statistics.order_count}}</text>
		</view>
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		name: "box-header",
		data() {
			return {
				statistics: {
					fulfill_order_count: 0,
					order_count: 0,
					bonus: 0,
					money: 0,
					freeze: 0,
					future_bonus: 0,
				},
			}
		},
		created() {
			this.getOrderInfo()
		},
		activated() {
			this.getOrderInfo()
		},
		methods: {
			getOrderInfo() {
				api.orderStatistics(this, {}, back => {
					if (back.code == 1) {
						this.statistics = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.tarefa-con {
		height: 80rpx;
		display: flex;
		align-items: center;
		padding: 0 25rpx;
		justify-content: space-between;
		color: #FFFFFF;
		font-size: 24rpx;
		background-color: #52D298;
	}

	.tarefa-header {
		background: url('../../../assets/images/tarefa/tarefa-bg.png') no-repeat;
		background-size: 100% 100%;
		// height: 370rpx;

		.header-row {
			display: flex;
			align-items: center;
			padding: 10rpx 0;

			.header-row-item {
				width: calc(50% - #{60rpx});
				margin: 0 5rpx;
				text-align: left;
				color: #FFFFFF;
				padding: 10rpx 25rpx;

				.top {
					color: #AFE4CD;
					font-size: 24rpx;
					padding: 15rpx 0;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.bottom {
					font-size: 24rpx;
					padding: 5rpx 0;
					color: #FFFFFF;

					.bottom-txt {
						font-size: 32rpx;
						font-weight: 600;
						margin: 0 8rpx;
					}
				}
			}
		}
	}
</style>
