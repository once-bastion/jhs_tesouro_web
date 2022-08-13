<template>
	<view>
		<view class="order-box" :key="index" v-for="(item,index) in orderInfo.order_item_list">
			<view class="display">
				<view class="order-box-left">
					<!-- <view class="left-title"> -->
					<!-- {{item.currency}}{{item.money}} -->
					<!-- 		<text>({{item.order_plan}}/{{item.total_order_plan}})</text> -->
					<!-- </view> -->
					<image :src="getImg(item.image)" mode="widthFix"></image>
					<!-- <image src="../../../assets/images/tarefa/order-img.png" mode="widthFix"></image> -->
				</view>
				<view class="order-box-right">
					<view v-if="item.status == 0" class="right-title">
						{{$t('tarefa.dwc')}}
						<span>{{$t('tarefa.ywc')}}</span>
					</view>
					<view v-else-if="item.status == 1" class="right-title complete">
						{{$t('tarefa.ywc')}}
					</view>
					<view class="right-tip">
						{{item.title}}

						<!-- {{item.number}} -->
					</view>
					<!-- <view class="right-time">
						{{item.createtime | dataFormat('YYYY-MM-DD HH:mm:ss')}}
					</view> -->
					<view class="right-money">
						<view>
							{{item.currency}}<text class="right-money-txt">{{item.money}}</text>
						</view>
						<text>X{{item.number}}</text>
					</view>
				</view>
			</view>

			<view class="premlo">
				<view class="premlo-left">
					<p>
						{{item.createtime | dataFormat('YYYY-MM-DD HH:mm:ss')}}
					</p>
					<p style="margin: 10rpx 0;">
						{{$t('tarefa.smt')}}
					</p>
					<view style="display:flex;align-items: center;">
						{{$t('tarefa.yj')}}:
						<text>{{item.currency}}{{Number(item.money * orderInfo.bonus_ratio / 100).toFixed(2)}}</text>
					</view>
				</view>
			
				<view class="premlo-btn" v-if="item.status == 0 && item.is_freeze == 0" @click="pay(item,orderInfo.bonus_ratio)">
					{{$t('tarefa.zf')}}
				</view>
				<view class="premlo-btn"  v-else-if="item.is_freeze == 1" @click="pay(item,orderInfo.bonus_ratio)">
					{{$t('tarefa.lxkf')}}
				</view>
			</view>
			<!-- 	<u-button v-if="item.status == 0 && item.is_freeze == 0" @click="pay(item,orderInfo.bonus_ratio)"
				class="paca-btn">
				{{$t('tarefa.zf')}}
			</u-button>
			<u-button v-else-if="item.is_freeze == 1" class="paca-btn">{{$t('tarefa.lxkf')}}</u-button> -->
		</view>


		<u-modal style="position: relative;" :show="show" :showConfirmButton="false">
			<u-icon size="20" @click="show=false" class="close-icon" name="close"></u-icon>
			<view class="modal-main-box">
				<box-detail-item1 :bonus_ratio="orderInfo.bonus_ratio" @paysuccess='paysuccess' :orderInfo="itemInfo"
					:order_id="order_id"></box-detail-item1>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import api from '@/api'
	import boxDetailItem1 from '../../fazer/components/box-detail-item.vue'
	export default {
		name: "box-detail-item",
		data() {
			return {
				show: false,
				itemInfo: {}
			};
		},
		components: {
			boxDetailItem1
		},
		props: {
			order_id: String,
			orderInfo: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			getImg(img) {
				return this.basePath + img
			},
			paysuccess() {
				this.show = false
				this.$emit('paysuccess')
			},
			pay(item, bonus_ratio) {
				this.itemInfo = item;
				this.itemInfo.bonus_ratio = bonus_ratio
				console.log(item)
				this.show = true
				// this.$showLoading()
				// api.orderpay(this, {
				// 	order_id: this.order_id
				// }, back => {
				// 	this.$hiddenLoading()
				// 	this.$toast(back.msg)
				// 	if (back.code == 1) {
				// 		// this.$mRouter.back()
				// 		setTimeout(() => {
				// 			this.$emit('paysuccess')
				// 		}, 500)
				// 	}
				// })
			},
		}
	}
</script>

<style lang="scss">
	/deep/.u-modal__content {
		padding: 10rpx 5rpx !important;
	}

	.modal-main-box {
		max-height: 800rpx;
		overflow: auto;
		position: relative;

	}

	.close-icon {
		position: absolute;
		right: 45rpx;
		top: 25rpx;
		z-index: 11222;
	}

	.order-box {
		margin: 20rpx;
		background-color: #fff;
		border-radius: 15rpx;
		// box-shadow: 0 4rpx 16rpx 0 rgba(0, 0, 0, 0.1);
		padding: 25rpx;

		.paca-btn {
			width: 100%;
			background-color: #126e82;
			color: #FFFFFF;
			font-weight: 700;
			margin: 25rpx auto;
		}

		.premlo {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;

			.premlo-left {
				color: #999999;

				text {
					font-size: 24rpx;
					color: #515151;
				}
			}

			.premlo-btn {
				/*rectangle 155*/
				width: 131rpx;
				height: 64rpx;
				text-align: center;
				line-height: 64rpx;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(48, 122, 89, 1);
				border-radius: 66rpx;
				font-size: 24rpx;
				color: #429EDA;

			}
		}

		.display {
			display: flex;
			padding-bottom: 35rpx;
			border-bottom: 1rpx solid #D5DEDA;

			.order-box-right {
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;

				.right-title {
					// width: 280rpx;
					height: 40rpx;
					padding: 0 10rpx;
					color: #FF7A00;
					text-align: center;
					line-height: 40rpx;
					background-color: #FFF1E4;
					border-radius: 8rpx;
				}

				.complete {
					color: #009C55;
					background-color: #D6FADA;
				}

				.right-tip {
					text-align: left;
					padding: 10rpx 0;
					font-size: 28rpx;
					color: #444444;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
				}

				.right-money {
					width: 100%;
					display: flex;
					justify-content: space-between;
					font-size: 24rpx;
					color: #999999;
					align-items: center;
					margin-top: 25rpx;

					.right-money-txt {
						color: #444444;
						font-size: 28rpx;
						font-weight: bold;
						margin: 0 10rpx;
						font-size: 32rpx;
					}
				}

				.right-time {
					text-align: left;
				}
			}

			.order-box-left {
				margin-right: 35rpx;

				.left-title {
					font-size: 28rpx;
					font-weight: 700;
					color: #000000;
					height: 40rpx;
					line-height: 40rpx;
				}

				image {
					width: 150rpx;
					height: 150rpx;
				}
			}
		}
	}
</style>
