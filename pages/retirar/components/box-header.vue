<template>
	<view class="white-bg">
		<view class="recharge-header">
			<view class="recharge-header-icon">
				<image src="../../../assets/images/minha/minha-icon5.png" mode="widthFix"></image>
			</view>
			<view class="recharge-header-right">
				<view class="header-right-top">
					{{$t('retirar.ye')}}
				</view>
				<view class="header-right-bottom" v-if="indexInfo">
					{{indexInfo.welcome.area.currency}}<text class="right-bottom-txt">{{indexInfo.welcome.money}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'box-header',
		data() {
			return {

			};
		},
		props: {
			indexInfo: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.recharge-header {
		/*rectangle 124*/
		width: 95%;
		height: 160rpx;
		margin: 0 auto;
		// background: linear-gradient(135.48deg, rgba(48, 122, 89, 1) 0%, rgba(115, 202, 163, 1) 100%);
		background: linear-gradient(135.48deg, #419fd9 0%, #71caee 100%);
		border-radius: 20rpx;
		display: flex;
		align-items: center;


		.recharge-header-right {
			.header-right-top {
				color: rgba(176, 210, 195, 1);
				font-size: 24rpx;
			}

			.header-right-bottom {
				color: rgba(176, 210, 195, 1);
				font-size: 24rpx;
				margin-top: 10rpx;

				.right-bottom-txt {
					color: #fff;
					font-size: 36rpx;
					font-weight: 700;
					margin: 0 10rpx;
				}
			}
		}

		.recharge-header-icon {
			width: 80rpx;
			height: 80rpx;
			border-radius: 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20rpx;
			margin-left: 20rpx;

			image {
				width: 80%;
			}
		}

	}

	.white-bg {
		padding: 25rpx;
		background-color: #FFFFFF;

	}
</style>
