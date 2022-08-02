<template>
	<view>
		<view class="box-item" v-for="(item,index) in list" :key="index">
			<view class="list">
				<view class="list-left">
					{{$t('tarefa.ddh')}}
				</view>
				<view class="list-right">
					{{item.order_sn}}
					<view class="list-right-btn" @click="copy(item.order_sn)">
						copy
					</view>
				</view>
			</view>
			<view class="list">
				<view class="list-left">
					{{$t('tarefa.cjsj')}}
				</view>
				<view class="list-right">
					{{item.createtime | dataFormat('YYYY-MM-DD HH:mm:ss')}}
				</view>
			</view>
			<!-- 			<view class="list">
				<view class="list-left">
					固定佣金
				</view>
				<view class="list-right">
					R${{item.bonus}}
				</view>
			</view> -->
			<view class="list">
				<view class="list-left">
					{{$t('tarefa.yjbl')}}
				</view>
				<view class="list-right">
					{{item.bonus_ratio }}%
				</view>
			</view>
			<!-- 			<view class="list">
				<view class="list-left">
					预估佣金
				</view>
				<view class="list-right">
					{{item.bonus_ratio }}%<span v-if="item.bonus > 0">+ R${{item.bonus}}</span>
				</view>
			</view> -->
			<view class="list">
				<view class="list-left">
					{{$t('tarefa.ljyj')}}
				</view>
				<view class="list-right">
					{{currency}} {{item.total_bonus}}
				</view>
			</view>
			<view class="list">
				<view class="list-left">
					{{$t('tarefa.cjje')}}
				</view>
				<view class="list-right">
					{{currency}} {{item.turnover}}
				</view>
			</view>
<!-- 			<view class="list">
				<view class="list-left">
					{{$t('tarefa.rwjd')}}
				</view>
				<view class="list-right">
					{{item.schedule[0]}}/{{item.task}}
				</view>
			</view> -->
			<view class="list">
				<view class="list-left">
					{{$t('tarefa.ddzt')}}
				</view>
				<view class="list-right">
					<text style="color: #d28c1b;" v-if="item.status==1">{{$t('tarefa.jxz')}}</text>
					<text style="color: #39e355;" v-else-if="item.status==2">{{$t('tarefa.ywc')}}</text>
				</view>
			</view>
			<u-button @click="Jump(item)" class="paca-btn">{{$t('tarefa.xq')}}</u-button>
		</view>
		<view style="padding: 25rpx;">
			
		</view>
	</view>
</template>

<script>
	export default {
		name: 'box-item',
		data() {
			return {
				currency: '',
			}
		},
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		mounted() {
			let user_info = JSON.parse(uni.getStorageSync('userInfo'));
			this.currency = user_info.area.currency
		},
		methods: {
			Jump(item) {
				this.$mRouter.push({
					path: '/pages/tarefa/orderdetail',
					query: {
						order_id: item.id
					}
				})
			},
			copy(data) {
				let that = this
				uni.setClipboardData({
					data: data,
					success() {
						that.$toast('copy Success')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box-item {
		// margin:25rpx 20rpx;
		background-color: #fff;
		// border-radius: 15rpx;
		// box-shadow: 0 4rpx 16rpx 0 rgba(0, 0, 0, 0.1);
		overflow: hidden;
		padding: 15rpx 0;
		margin-bottom: 25rpx;

		.list {
			padding: 15rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			color: #333;

			.list-left {
				color: #999999;
				font-size: 24rpx;
			}

			.list-right {
				margin-left: 20rpx;
				display: flex;
				justify-content: flex-end;
				// width: calc(100% - #{400rpx});
				align-items: center;
				color: #444444;
				font-size: 24rpx;

				.list-right-btn {
					width: 80rpx;
					height: 40rpx;
					border-radius: 40rpx;
					background-color: #CECECE;
					color: #FFFFFF;
					text-align: center;
					line-height: 40rpx;
					margin-left: 10rpx;
				}
			}
		}

		.paca-btn {
			/*rectangle 139*/
			width: 252rpx;
			height: 70rpx;
			background: rgba(255, 255, 255, 1);
			border: 1rpx solid rgba(48, 122, 89, 1);
			border-radius: 70rpx;
			margin: 25rpx auto;
			color: #307A59;

		}
	}
</style>
