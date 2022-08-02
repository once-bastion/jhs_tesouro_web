<template>
	<view class="invite-page">
		<u-navbar :title="$t('invite.yqpy')"></u-navbar>
		<!-- <image class="invite-img" src="../../assets/images/promotion/invite-bg.png" mode="widthFix"></image>
		<view class="invite-qrcode">
			<uqrcode v-if="inviteInfo" :size="180" ref="uQRCode" :text="inviteInfo.url" />
		</view>
		<view v-if="inviteInfo" class="invite-txt">{{inviteInfo.code}}</view>
		<u-button class="paca-btn" @click="copy">Copy</u-button> -->
		<view class="invite-main">
			<image class="invite-title" src="../../assets/images/promotion/invite-bg3.png" mode="widthFix"></image>
			<view class="invite-qrcode-con">
				<view class="invite-qrcode">
					<uqrcode v-if="inviteInfo" :size="115" ref="uQRCode" :text="inviteInfo.url" />
				</view>
				<view class="invite-name">
					Codigo dec
				</view>
				<view class="invite-code" v-if="inviteInfo">
					{{inviteInfo.code}}
				</view>
			</view>
			<image class="invite-bg" src="../../assets/images/promotion/invite-bg2.png" mode="widthFix"></image>
		</view>
		<u-button class="paca-btn" @click="copy">Copy</u-button>
	</view>
</template>

<script>
	import api from '@/api'
	import uQRCode from '@/uni_modules/Sansnn-uQRCode/components/uqrcode/common/uqrcode.js'
	export default {
		data() {
			return {
				inviteInfo: null
			}
		},
		mounted() {
			this.poster()
		},
		methods: {
			copy() {
				let that = this
				uni.setClipboardData({
					data: this.inviteInfo.url,
					success() {
						that.$toast(that.$t('invite.fzcg'))
					}
				})
			},
			poster() {
				api.poster(this, '', back => {
					if (back.code == 1) {
						this.inviteInfo = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.invite-page {
		height: 100vh;
		background-color: #eff3f2;

		.invite-main {
			// height: 940rpx;
			width: 95%;
			margin: 25rpx auto;
			border-radius: 15rpx;
			background-color: #3F8C69;
			background-image: url(../../assets/images/promotion/invite-bg1.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;

			.invite-bg {
				width: 70%;
				margin: 0 auto;
				display: block;
			}

			.invite-title {
				width: 85%;
				display: block;
				margin: 0 auto;
				padding-top: 75rpx;

			}

			.invite-qrcode-con {
				width: 250rpx;
				border-radius: 15rpx;
				background-color: #FFFFFF;
				padding: 20rpx 35rpx;
				margin: 25rpx auto;
				text-align: center;

				.invite-name {
					color: #999999;
					font-size: 20rpx;
				}

				.invite-code {
					margin-top: 15rpx;
					font-size: 28rpx;
					color: #444444;
				}
			}
		}
	}

	.invite-img {
		margin: 0 auto;
		display: block;
	}

	.invite-qrcode {
		display: flex;
		margin: 25rpx auto;
		justify-content: center;
	}

	.paca-btn {
		width: 90%;
		background-color: #FFFFFF;
		color: #307A59;
		font-weight: 700;
		margin: 0 auto 25rpx auto;
		border-radius: 88rpx;
		height: 88rpx;
	}

	.invite-txt {
		text-align: center;
		width: 100%;
		font-size: 28rpx;
	}
</style>
