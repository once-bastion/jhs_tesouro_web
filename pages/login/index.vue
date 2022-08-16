<template>
	<view>
		<!-- <view class="login-header-bg"> -->
		<!-- 			<view class="login-tar">
				<view class="tar-list">
					Case
				</view>
				<view class="tar-list">
					Lingua
				</view>
			</view> -->
		<!-- </view> -->
		<u-navbar leftIcon=""  @rightClick="rightClick">
		</u-navbar>
		<image v-if="lang == 'pt-br'" class="logo" src="../../assets/logo2.png" mode="widthFix"></image>
		<image v-if="lang == 'fi'" class="logo" src="../../assets/logo3.png" mode="widthFix"></image>
		<image v-if="lang == 'es-mx'" class="logo" src="../../assets/logo4.png" mode="widthFix"></image>
		<image v-if="lang == 'tr'" class="logo" src="../../assets/logo5.png" mode="widthFix"></image>
		<view class="login-box">
			<view class="login-box-item">
				<image src="../../assets/images/login/phone.png" mode=""></image>
				<text>{{area_code}}</text>
				<input placeholder-class="ipt" :placeholder="$t('login.qsrsjh')" type="text" v-model="account" />
			</view>
			<view class="login-box-item">
				<image src="../../assets/images/login/password.png" mode=""></image>
				<input placeholder-class="ipt" :placeholder="$t('login.qsrmm')" type="password" v-model="password" />
			</view>
			<u-button @click="login" :loading="loading" class="login-btn">{{$t('login.dl')}}</u-button>
			<view class="login-tip" @click="Jump">
				{{$t('login.zczh')}}
			</view>
		</view>
	</view>
</template>
<script>
	import api from '@/api'
	export default {
		data() {
			return {
				loading: false,
				area_code: '',
				account: '',
				password: "",
				lang: 'tr',
				// lang: 'pt-br',
			};
		},

		mounted() {
			if (uni.getStorageSync('initInfo')){
				let ini_info = JSON.parse(uni.getStorageSync('initInfo'));
				this.area_code = ini_info.area_code
			}
			if (uni.getStorageSync('langid')){
				this.lang = uni.getStorageSync('langid')
				console.log(this.lang);
			}
		},
		methods: {
			Jump() {
				this.$mRouter.push({
					path: '/pages/login/registry'
				})
			},
			login() {
				let that = this
				uni.showLoading()
				if (this.loading) {
					return false;
				}
				this.loading = true;

				api.login(this, {
					account: this.account,
					password: this.password
				}, back => {
					uni.hideLoading()
					this.$toast(back.msg);
					if (back.code == 1) {
						uni.setStorage({
							key: 'langid',
							data: back.data.userinfo.area.lang
						})
						this.$i18n.locale = back.data.userinfo.area.lang;
						uni.setStorage({
							key: 'userInfo',
							data: JSON.stringify(back.data.userinfo),
							success: function() {
								that.$mRouter.switchTab({
									path: '/pages/minha/index'
								})
							}
						})
					}
					this.loading = false;
				})
			},
		}
	}
</script>
<style lang="less" scoped>
	.logo {
		width: 200rpx;
		display: block;
		margin: 35rpx auto;
	}

	.login-box {
		padding: 40rpx 45rpx;

		.login-tip {
			margin-top: 60rpx;
			font-size: 32rpx;
			text-align: center;
			color: #429EDA;
		}

		.login-btn {
			width: 98%;
			background-color: #429EDA;
			color: #FFFFFF;
			font-weight: 700;
			margin: 25rpx auto;
			border-radius: 88rpx;
			height: 88rpx;
		}

		.login-box-item {
			display: flex;
			padding: 20rpx 15rpx;
			border-bottom: 1rpx solid #dce2e1;
			margin-bottom: 45rpx;

			image {
				width: 34rpx;
				height: 34rpx;
				margin-right: 25rpx;
			}

			text {
				font-size: 30rpx;
				margin-right: 25rpx;
				color: #444444;
			}

			/deep/.ipt {
				color: #999999;
				font-size: 30rpx;
			}
		}
	}
	.login-box-item > uni-input{
		width: 300px;
	}
</style>
