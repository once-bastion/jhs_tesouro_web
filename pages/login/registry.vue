<template>
	<view class="registry-page">
		<!-- <view class="registry-header"></view> -->
		<u-navbar title="Registrar">
		</u-navbar>
		<view class="white-bg">
			<image v-if="lang == 'pt-br'" class="logo" src="../../assets/logo2.png" mode="widthFix"></image>
			<image v-if="lang == 'fi'" class="logo" src="../../assets/logo3.png" mode="widthFix"></image>
			<image v-if="lang == 'es-mx'" class="logo" src="../../assets/logo4.png" mode="widthFix"></image>
			<image v-if="lang == 'tr'" class="logo" src="../../assets/logo5.png" mode="widthFix"></image>
			<view class="registry-box">
				<view class="registry-box-item">
					<image src="../../assets/images/login/phone.png" mode="widthFix"></image>
					<text>{{area_code}}</text>
					<input placeholder-class="ipt" :placeholder="$t('registry.qsrsjh')" type="number"
						v-model="reg_data.mobile" maxlength="11" />
				</view>
				<view class="registry-box-item">
					<image src="../../assets/images/login/yonghu.png" mode="widthFix"></image>
					<input placeholder-class="ipt" :placeholder="$t('registry.name')" type="text"
						v-model="reg_data.nickname" />
				</view>
				<view class="registry-box-item">
					<image src="../../assets/images/login/password.png" mode="widthFix"></image>
					<input placeholder-class="ipt" :placeholder="$t('registry.qsrmm')" type="password"
						v-model="reg_data.password" />
				</view>

				<view class="registry-box-item">
					<image src="../../assets/images/login/password.png" mode="widthFix"></image>
					<input placeholder-class="ipt" :placeholder="$t('registry.qzcsrmm')" type="password"
						v-model="identify_password" />
				</view>

				<!-- 			<view class="registry-box-item" v-if="reg_data.code_type=='ems'">
					<image src="../../assets/images/login/yanzhengma.png" mode="widthFix"></image>
					<input placeholder-class="ipt" :placeholder="$t('registry.qsryzm')" type="text"
						v-model="reg_data.code" />
					<u-button class="btn">短信验证码</u-button>
				</view>
				<view class="registry-box-item" v-else-if="reg_data.code_type=='sms'">
					<image src="../../assets/images/login/yanzhengma.png" mode="widthFix"></image>
					<input placeholder-class="ipt" placeholder="请输入验证码" type="text" v-model="reg_data.code" />
					<u-button class="btn">手机验证码</u-button>
				</view> -->
				<view class="registry-box-item">
					<image style="width: 30rpx !important;height: 50rpx;" src="../../assets/images/login/yzm.png"
						mode="widthFix">
					</image>
					<input placeholder-class="ipt" :placeholder="$t('registry.qsrzm')" type="text"
						v-model="reg_data.code" />

					<view class="yzimg">
						<!-- 	<image @click="changeImg" v-if="isimgFlag" style="width: 350rpx;" :src="this.code_url"
							mode="widthFix"></image> -->
						<imgcode ref="imgcode"></imgcode>
					</view>
				</view>

				<view class="registry-box-item">
					<image src="../../assets/images/login/yaoqingma.png" mode="widthFix"></image>

					<input :disabled="!!url_code" placeholder-class="ipt" :placeholder="$t('registry.qsryqm')"
						type="text" v-model="reg_data.authinvitation_code" />
				</view>
				<u-button :loading="loading" class="registry-btn" @click="regFrom">{{$t('registry.zc')}}</u-button>
				<view class="registry-tip" @click="Jump">
					Volte ao login
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/api'
	import imgcode from '@/components/imgcode/imgcode.vue'
	export default {
		data() {
			return {
				loading: false,
				forced_invite: '',
				isimgFlag: true,
				area_code: '',
				identify_password: '',
				reg_data: {
					nickname: '',
					mobile: '',
					password: '',
					code: '',
					authinvitation_code: '',
					code_type: '',
					email: '',
				},
				code_url: '',
				url_code: "",
				lang: 'tr',
				// lang: 'pt-br',
			};
		},
		components: {
			imgcode
		},
		onLoad(option) {
			this.reg_data.authinvitation_code = option.authinvitation_code
			this.url_code = option.authinvitation_code
		},
		mounted() {
			this.code_url = this.basePath + '/common/pictureCode';
			if (uni.getStorageSync('initInfo')){
				let ini_info = JSON.parse(uni.getStorageSync('initInfo'));
				this.area_code = ini_info.area_code,
				this.reg_data.code_type = ini_info.basics.code_type;
				this.forced_invite = ini_info.basics.forced_invite;
			}
			this.pictureCode()
			if (uni.getStorageSync('langid')){
				this.lang = uni.getStorageSync('langid')
				console.log(this.lang);
			}
		},
		methods: {
			pictureCode() {
				api.pictureCode(this, '', back => {
					this.yzimg = back
				})
			},
			changeImg() {
				this.isimgFlag = false
				setTimeout(() => {
					this.isimgFlag = true
				}, 100)
			},
			Jump() {
				this.$mRouter.redirectTo({
					path: '/pages/login/index'
				})
			},
			regFrom() {
				if (this.reg_data.code.toLowerCase() != this.$refs.imgcode.codestr.toLowerCase()) {
					this.$toast(this.$t('registry.qsrzqdyzm'))
					return
				}
				let that = this

				if (this.reg_data.mobile.length < 10 || this.reg_data.mobile.length > 11) {
					this.$toast(this.$t('registry.mobileError'))
					return
				}

				if (this.identify_password != this.reg_data.password) {
					this.$toast(this.$t('registry.passwordError'))
					return
				}


				uni.showLoading()
				if (this.loading) {
					return false;
				}
				this.loading = true;
				api.register(this, this.reg_data, back => {
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
			}
		}
	}
</script>

<style lang="less" scoped>
	.logo {
		width: 150rpx;
		display: block;
		margin: 35rpx auto;
	}

	.white-bg {
		padding: 25rpx 0;
		background-color: #FFFFFF;
	}

	.registry-page {
		height: 100vh;
		background-color: #eff3f2;
	}

	.registry-box {
		width: 94%;
		margin: 0 auto;
		background-color: #FFFFFF;

		.registry-tip {
			margin-top: 60rpx;
			font-size: 32rpx;
			text-align: center;
			color: #429EDA;
		}

		.registry-btn {
			width: 98%;
			background-color: #429EDA;
			color: #FFFFFF;
			font-weight: 700;
			margin: 45rpx auto;
			border-radius: 88rpx;
			height: 88rpx;
		}

		.registry-box-item {
			display: flex;
			padding: 20rpx 15rpx;
			border-bottom: 1rpx solid #dce2e1;
			margin-bottom: 15rpx;
			align-items: center;
			position: relative;

			image {
				width: 34rpx;
				margin-right: 25rpx;
			}

			input {
				width: calc(~'100% - 50rpx');
			}

			text {
				font-size: 32rpx;
				margin-right: 25rpx;
				color: #757575;
			}

			/deep/.ipt {
				color: #999999;
				font-size: 30rpx;
			}

			.yzimg {
				height: 80rpx;
				display: flex;
				align-items: center;
				width: 200rpx;
				position: absolute;
				right: 8rpx;
				top: 8rpx;
			}

			.btn {
				background-color: #126e82;
				color: #FFFFFF;
				height: 60rpx;
				line-height: 60rpx;
				padding: 0 25rpx;
				width: 180rpx;
				border-radius: 8rpx;
			}
		}
	}

	// .registry-header {
	// 	width: 100%;
	// 	height: 180rpx;
	// 	background-color: #126e82;
	// }
</style>
