<template>
	<view class="box-hoje-main">
		<view class="hoje-title">
			{{$t('fazer.jrjl')}}
		</view>
		<view class="hoje-item" v-for="(item,index) in list" :key="index">
			<view class="hoje-item-left">
				<image :src="item.image" mode="widthFix"></image>
			</view>
			<view class="hoje-item-right">
				<text>{{item.txt}}</text>
				<text>{{item.val}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		name: 'box-hoje',
		data() {
			return {
				order_today: {
					bonus: '0.00',
					freeze: '0.00',
					order_count: '0',
					money: '0.00'
				},

			};
		},
		computed: {
			list() {
				return [{
					image: require('../../../assets/images/fazer/fazer-icon1.png'),
					txt: this.$t('fazer.jryj'),
					val: this.order_today.bonus,
				}, {
					image: require('../../../assets/images/fazer/fazer-icon2.png'),
					txt: this.$t('fazer.djje'),
					val: this.order_today.freeze,
				}, {
					image: require('../../../assets/images/fazer/fazer-icon3.png'),
					txt: this.$t('fazer.jrrw'),
					val: this.order_today.order_count,
				}, {
					image: require('../../../assets/images/fazer/fazer-icon4.png'),
					txt: this.$t('fazer.ye'),
					val: this.order_today.money,
				}]
			}
		},
		mounted() {
			this.orderToday()
		},
		methods: {
			orderToday() {
				api.orderToday(this, {}, back => {
					if (back.code == 1) {
						this.order_today = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.box-hoje-main {
		margin: 45rpx 25rpx 25rpx 25rpx;
		background-color: #fff;
		border-radius: 15rpx;
		// box-shadow: 0 4rpx 16rpx 0 rgba(0, 0, 0, 0.1);
		overflow: hidden;
		padding-bottom: 15rpx;

		.hoje-item {
			padding: 10rpx 25rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28rpx;
			height: 75rpx;
			color: #333;

			.hoje-item-left {
				display: flex;
				align-items: center;

				image {
					width: 40rpx;
					margin-right: 15rpx;
				}
			}

			.hoje-item-right {
				display: flex;
				align-items: center;
				height: 85rpx;
				justify-content: space-between;
				width: calc(100% - #{65rpx});
				border-bottom: 1rpx solid #f6f6f6;

				text:last-child {
					font-weight: 700;
					color: #444444;
				}
			}
		}

		.hoje-item:last-child {
			.hoje-item-right {
				border-bottom: none;
			}
		}

		.hoje-title {
			padding: 25rpx;
			text-align: center;
			color: #999999;
			font-size: 32rpx;
			border-bottom: 1px solid #f6f6f6;
		}
	}
</style>
