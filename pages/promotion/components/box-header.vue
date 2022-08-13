<template>
	<view class="white-bg">
		<view class="box-header">
			<view class="box-header-left">
				<image src="../../../assets/images/promotion/vector.png" mode="widthFix"></image>
			</view>
			<view class="box-header-right">
				<view class="box-header-info">
					<text>
						{{$t('invite.mjj')}}
					</text>
					<view @click="Jump" style="display:flex;align-items: center;">
						{{$t('invite.jjxq')}}
						<u-icon name="arrow-right" color="#FFFFFF"></u-icon>
					</view>
				</view>
				<view class="box-header-money">
					{{currency}}<text>{{teamInfo.bonus}}</text>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		name: "box-header",
		data() {
			return {
				currency: ''
			};
		},
		mounted() {
			let user_info = JSON.parse(uni.getStorageSync('userInfo'));
			this.currency = user_info.area.currency
		},
		props: {
			teamInfo: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			Jump() {
				this.$mRouter.push({
					path: '/pages/promotion/record'
				})
			}
		}
	}
</script>

<style lang="scss">
	.white-bg{
		padding: 25rpx 0;
		background-color: #FFFFFF;
	}
	.box-header {
		/*rectangle 124*/
		background: linear-gradient(166.07deg, #419fd9 0%, #71caee 100%);
		// background: linear-gradient(166.07deg, rgba(48, 122, 89, 1) 0%, rgba(115, 202, 163, 1) 100%);
		border-radius: 20rpx;
		width: calc(100% - #{120rpx});
		padding: 35rpx 35rpx;
		margin: 25rpx auto;
		margin-top: 35rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;

		.box-header-left {
			width: 80rpx;
			height: 80rpx;
			border-radius: 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20rpx;
			// background-color: #619D82;
			background-color: #6FB6E7;
			image {
				width: 50%;
			}
		}

		.box-header-right {
			width: calc(100% - #{100rpx});

			.box-header-money {
				// color: rgba(176, 210, 195, 1);
				color: #FFFFFF;
				font-size: 24rpx;
				margin-top: 8rpx;

				text {
					font-weight: bold;
					font-size: 36rpx;
					color: #FFFFFF;
					margin: 0 10rpx;
				}
			}

			.box-header-info {
				display: flex;
				width: 100%;
				justify-content: space-between;
				// color: rgba(176, 210, 195, 1);
				color: #FFFFFF;
				font-size: 24rpx;


			}
		}


	}
</style>
