<template>
	<view class="orderdetail-page">
		<u-navbar :title="$t('tarefa.ddxq')"></u-navbar>
		<view class="orderdetail-row">
			<view class="orderdetail-row-item">
				<view class="top">
					{{$t('tarefa.fhyj')}}
				</view>
				<view class="bottom">
					{{currency}} <text class="bottom-txt">{{orderInfo.total_bonus}}</text>
				</view>
			</view>
			<view class="orderdetail-row-item">
				<view class="top">
					{{$t('tarefa.fhbj')}}
				</view>
				<view class="bottom">
					{{currency}} <text class="bottom-txt">
						{{Number(orderInfo.turnover - orderInfo.freeze).toFixed(2)}}</text>
				</view>
			</view>
		</view>
		<view class="orderdetail-tip">
			<text>{{$t('tarefa.sm')}}:</text> {{$t('tarefa.smxq')}}
		</view>
		<box-detail-item @paysuccess="paysuccess" :orderInfo="orderInfo" :order_id="order_id"></box-detail-item>
		<box-dialog v-model="diaShow"></box-dialog>
	</view>
</template>

<script>
	import api from '@/api'
	import boxDetailItem from './components/box-detail-item.vue'
	import boxDialog from './components/box-dialog.vue'
	export default {
		data() {
			return {
				diaShow: false,
				order_id: '',
				orderInfo: {},
				currency: '',
			};
		},
		mounted() {
			let user_info = JSON.parse(uni.getStorageSync('userInfo'));
			this.currency = user_info.area.currency
		},
		components: {
			[boxDetailItem.name]: boxDetailItem,
			[boxDialog.name]: boxDialog
		},
		onLoad(option) {
			this.order_id = option.order_id
			this.detail()
		},
		methods: {
			paysuccess() {
				this.detail()
			},
			detail() {
				this.$showLoading()
				api.orderitem(this, 'order_id=' + this.order_id, back => {
					this.$hiddenLoading()
					if (back.code == 1) {
						this.orderInfo = back.data
						// if(back.data.tactics_id=='42' && back.data.schedule=='1-1'){
						// 	this.diaShow = true
						// }
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.orderdetail-page{
		height: 100vh;
		background-color: #eff3f2;
	}
	.orderdetail-tip{
		color: #999999;
		font-size: 24rpx;
		padding:10rpx 25rpx;
		line-height: 1.6;
		text{
			color: #F94545;
		}
	}
	
	.orderdetail-row {
		display: flex;
		align-items: center;
		padding: 10rpx 0;
		margin: 25rpx;
		/*rectangle 148*/
		background: linear-gradient(90deg, #439FDD 0%, #6CC8F0 100%);
		border-radius: 20rpx;


		.orderdetail-row-item {
			width: calc(50% - #{60rpx});
			margin: 0 5rpx;
			text-align: left;
			color: #FFFFFF;
			padding: 10rpx 25rpx;

			.top {
				// color: #AFE4CD;
				color: #FFF;
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
</style>
