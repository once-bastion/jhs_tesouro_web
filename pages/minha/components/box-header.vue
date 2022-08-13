<template>
	<view class="minha-header">
		<view class="minha-header-info">
			<!-- 	<image src="../../../assets/images/minha/header.png" mode="widthFix"></image> -->
			<image v-if="lang == 'pt-br'" class="logo" src="../../../assets/logo2.png" mode="widthFix"></image>
			<image v-if="lang == 'fi'" class="logo" src="../../../assets/logo3.png" mode="widthFix"></image>
			<image v-if="lang == 'es-mx'" class="logo" src="../../../assets/logo4.png" mode="widthFix"></image>
			<view class="header-info-right">
				<view class="info-name">
					{{welcome.nickname}}
				</view>
				<view class="info-zh">
					{{$t('newadd.yqm')}}
					<view class="info-zh-txt">
						{{welcome.mobile}}
					</view>
					<view class="info-zh-btn" @click="copy(welcome.mobile)">
						{{$t('newadd.copy')}}
					</view>
				</view>

			</view>
		</view>

		<view class="minha-totail">
			<view class="minha-totail-top">
				<view class="totail-top-icon">
					<image src="../../../assets/images/minha/minha-icon5.png" mode="widthFix"></image>
				</view>
				<view class="totail-top-right">
					<view class="top-right-title">
						{{$t('newadd.zzc')}}
					</view>
					<view class="top-right-con">
						{{welcome.area.currency}} <text class="right-con-txt">{{welcome.money}}</text>
					</view>
				</view>
			</view>
			<view class="minha-totail-bottom">
				<view class="totail-bottom-row">
					<view class="bottom-row-title">
						{{$t('newadd.lssr')}}
					</view>
					<view class="bottom-row-con">
						{{welcome.area.currency}} <text class="row-con-txt">{{bonus}}</text>
					</view>
				</view>
				<view class="totail-bottom-row">
					<view class="bottom-row-title">
						{{$t('newadd.cxsr')}}
					</view>
					<view class="bottom-row-con">
						{{welcome.area.currency}} <text class="row-con-txt">{{bonus_day}}</text>
					</view>
				</view>
			</view>
		</view>
		 <view class="minha-totail-btn">
			<view class="totail-btn" @click="$jump('/pages/recharge/index')">
				<image src="../../../assets/images/minha/minha-icon2.png" mode="widthFix"></image>
				{{$t('newadd.chongzhi')}}
			</view>
			<view class="totail-btn" @click="$jump('/pages/retirar/index')">
				<image src="../../../assets/images/minha/minha-icon1.png" mode="widthFix"></image>
				{{$t('newadd.tixian')}}
			</view>
		</view>
	 </view>
</template>

<script>
	import api from '@/api'
	export default {
		name: "box-header",
		data() {
			return {
				welcome: [],
				bonus: 0,
				bonus_day:0,
				lang: 'pt-br',
			};
		},
		mounted() {
			this.userInfo();
			console.log(1);
			if(uni.getStorageSync('langid')){
				this.lang = uni.getStorageSync('langid')
				console.log(this.lang);
			}
		},
		activated() {
			this.userInfo();
		},
		methods: {
			copy(val){
				let that = this
				uni.setClipboardData({
					data:val,
					success() {
						that.$toast(that.$t('invite.fzcg'))
					}
				})
				
			},
			userInfo() {
				api.userInfo(this, {}, back => {
					if (back.code == 1) {
						this.welcome = back.data.welcome;
						this.bonus = back.data.bonus;
						this.bonus_day = back.data.bonus_day;
						uni.setStorage({
							key: 'userInfo',
							data: JSON.stringify(back.data.welcome),
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.minha-header {
		width: 100%;
		background-color: #FFFFFF;

		.minha-totail-btn {
			display: flex;
			padding: 0 25rpx 25rpx;

			.totail-btn {
				flex: 1;
				height: 85rpx;
				border-radius: 85rpx;
				border: 1rpx solid #429EDA;
				display: flex;
				font-size: 28rpx;
				// color: #327D5C;
				color: #429EDA;
				align-items: center;
				justify-content: center;
				margin: 0 25rpx;

				image {
					width: 32rpx;
					margin-right: 10rpx;
				}
			}
		}

		.minha-totail {
			width: 95%;
			margin: 25rpx auto;
			// background-color: #73CAA3;
			// background-image: url('../../../assets/images/minha/minha-bg.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			height: 250rpx;
			border-radius: 20rpx;
			padding: 10rpx 0;
			background-image: linear-gradient(135.48deg, #419fd9 0%, #71caee 100%);
			// background-color: linear-gradient(135.48deg, rgba(48, 122, 89, 1) 0%, rgba(115, 202, 163, 0) 100%);


			.minha-totail-bottom {
				display: flex;
				padding: 0 45rpx;
				align-items: center;

				.totail-bottom-row {
					flex: 1;
					// color: #B0D2C3;
					color: #fff;

					.bottom-row-title {
						// color: #B0D2C3;
						color: #fff;
						font-size: 24rpx;
					}

					.bottom-row-con {
						margin-top: 25rpx;

						.row-con-txt {
							color: #fff;
							font-size: 36rpx;
							font-weight: 700;
							margin: 0 10rpx;
						}
					}

				}
			}

			.minha-totail-top {
				display: flex;
				align-items: center;
				padding: 25rpx;

				.totail-top-right {
					color: #B0D2C3;
					font-size: 24rpx;

					.top-right-con {
						margin-top: 15rpx;

						.right-con-txt {
							color: #fff;
							font-size: 36rpx;
							font-weight: 700;
							margin: 0 10rpx;
						}
					}
				}

				.totail-top-icon {
					width: 80rpx;
					height: 80rpx;
					border-radius: 80rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 20rpx;

					image {
						width: 80%;
					}
				}
			}
		}


		.minha-header-info {
			padding: 40rpx 44.5rpx;
			display: flex;
			align-items: center;

			image {
				width: 130rpx;
				border-radius: 130rpx;
				margin-right: 20rpx;
			}

			.header-info-right {

				.info-zh {
					height: 40rpx;
					line-height: 40rpx;
					border-radius: 40rpx;
					font-size: 24rpx;
					color: #858585;
					display: flex;
					align-items: center;
					margin-top: 15rpx;

					.info-zh-txt {
						color: #444444;
						font-weight: 700;
						margin: 0 8rpx;
					}

					.info-zh-btn {
						background-color: #c5c2c2;
						color: #ffffff;
						text-align: center;
						padding: 5rpx 20rpx;
						border-radius: 50rpx;
					}

				}

				.info-name {
					color: #444444;
					font-size: 32rpx;
					font-weight: 700;
				}
			}
			.logo{
				width: 48px;
			}
		}
	}
	/** 控制左上logo的边缘度*/
	.minha-header .minha-header-info uni-image {
		border-radius: 0;
	}
</style>
