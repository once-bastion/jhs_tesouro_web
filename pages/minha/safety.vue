<template>
	<view>
		<u-navbar :title="$t('safety.aqzx')"></u-navbar>
		<!-- <view class="safety-title">
			{{$t('safety.xgmm')}}
		</view> -->
		<!-- 	<u-tabs itemStyle="width:40%;height:45px" :current="current" lineWidth="60" lineColor="#51c4d3"
			:activeStyle="activeStyle" :list="tabsList"></u-tabs> -->
		<view class="safety-title">
			{{$t('minha.dlp')}}
		</view>
		<view class="safety-box">
			<p>{{$t('safety.jmm')}}</p>
			<input :placeholder="$t('safety.qsrjmm')" placeholder-class="placeholderClass" class="ipt" type="password"
				v-model="oldpasspord" />
			<p>{{$t('safety.xmm')}}</p>
			<input :placeholder="$t('safety.qsrxmm')" placeholder-class="placeholderClass" class="ipt" type="password"
				v-model="newpassword" />
			<p>{{$t('safety.qrmm')}}</p>
			<input :placeholder="$t('safety.qsrxmm')" placeholder-class="placeholderClass" class="ipt" type="password"
				v-model="newpasswordcom" />

			<u-button @click="submit" class="retirar-btn"> enviar </u-button>
		</view>
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		data() {
			return {
				tabsList: [{
						name: this.$t('minha.dlp')
					},
					// {
					// 	name: this.$t('minha.zfp')
					// },
				],
				current: 0,

				oldpasspord: "",
				newpassword: "",
				newpasswordcom: "",
				activeStyle: {
					"color": "#126e82",
					"fontWeight": "700",
				},
			};
		},
		methods: {
			submit() {
				if (!this.newpassword) {
					this.$toast(this.$t('minha.xmmk'))
					return
				}

				if (this.newpassword != this.newpasswordcom) {
					this.$toast(this.$t('minha.mmbt'))
					return
				}
				this.$showLoading()
				api.resetpwd(this, {
					type: this.current + 1,
					newpassword: this.newpassword
				}, back => {
					this.$hiddenLoading()
					this.$toast(back.msg)
					if (back.code == 1) {
						this.$mRouter.redirectTo({
							path: '/pages/login/index'
						})
						uni.setStorage({
							key: 'userInfo',
							data: null,
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.retirar-btn {
		width: 95%;
		background-color: #429EDA;
		color: #FFFFFF;
		font-weight: 700;
		margin: 50rpx auto;
		border-radius: 88rpx;
		height: 88rpx;
	}

	.placeholderClass {
		color: #999999;
		font-size: 30rpx;
	}

	.safety-box {
		padding: 25rpx;
		background-color: #FFFFFF;

		p {
			font-size: 26rpx;
			color: #444444;
		}

		.ipt {
			border: none;
			outline: none;
			font-size: 26rpx;
			color: #333;
			padding: 10rpx 0;
			margin-bottom: 25rpx;
			height: 65rpx;
			border-radius: 65rpx;
			border: 1rpx #C8CECD solid;
			margin-top: 25rpx;
			text-indent: 25rpx;

		}
	}

	.safety-title {
		padding: 25rpx;
		font-weight: 700;
		color: #444444;
		font-size: 32rpx;
	}
</style>
