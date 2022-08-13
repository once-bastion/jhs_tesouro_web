<template>
	<view class="recharge-page">
		<u-navbar leftIcon="" :title="$t('recharge.cz')" @rightClick="rightClick" :rightText="$t('recharge.jl')">
		</u-navbar>

		<view class="bg-white">
			<view class="recharge-header">
				<view class="recharge-header-icon">
					<image src="../../assets/images/minha/minha-icon5.png" mode="widthFix"></image>
				</view>
				<view class="recharge-header-right">
					<view class="header-right-top">
						{{$t('recharge.ye')}}
					</view>
					<view class="header-right-bottom" v-if="indexInfo">
						{{indexInfo.welcome.area.currency}}<text
							class="right-bottom-txt">{{indexInfo.welcome.money}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white" style="margin-top: 25rpx;">
			<view class="type-item" @click="pickerCk">
				<view class="type-item-left">
					{{$t('recharge.cztd')}}
				</view>
				<view class="type-item-right">
					{{select.title}}
					<u-icon style="margin-left: 12rpx;" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="recharge-ipt">
				<text>{{select.currency}}</text>
				<input type="text" placeholder="0.00" placeholder-class="placeholderClass" v-model="money" />
			</view>
			<view class="rechart-box">
				<view class="list" @click="money=item" :class="{'list-active':money==item}" v-for="(item,index) in list"
					:key="index">
					<text>{{select.name}}</text> {{item}}
				</view>
			</view>

		</view>
		<u-button @click="recharge" class="recharge-btn"> {{$t('recharge.tjdd')}} </u-button>
		<u-picker :cancelText="$t('retirar.pkcancel')" :confirmText="$t('retirar.pkconfirm')" @cancel="pickershow=false"
			:show="pickershow" ref="uPicker" :columns="columns" @confirm="confirm">
		</u-picker>
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		data() {
			return {
				pickershow: false,
				list: [
					//20,50, 100, 200, 300, 500, 1000, 3000, 5000, 10000, 30000
					50, 100, 200, 300, 500, 1000, 2000, 3000, 5000, 10000,20000, 30000
				],

				money: '',
				indexInfo: null,
				paylist: [],
				select: {},
				columns: []
			};
		},

		onShow() {
			this.getpayInfo()
			this.userindex()
		},
		methods: {
			rightClick() {
				this.$mRouter.push({
					path: "/pages/recharge/record",
					query: {
						type: "1"
					}
				})
			},
			recharge() {
				this.$showLoading()
				api.recharge(this, {
					plug_id: this.select.id,
					money: this.money
				}, back => {
					this.$hiddenLoading()
					this.$toast(back.msg)
					if (back.code == 1) {
						this.money = 0
						if (back.data.on_line.type == 1) {
							// #ifdef APP-PLUS
							plus.runtime.openURL(back.data.on_line.url)
							// #endif
							// #ifdef H5
							let res = window.open(back.data.on_line.url, "_blank")
							if (!res) {
								location.href = back.data.on_line.url
							}
							// #endif
						} else {
							this.$store.commit('CHANGEFROM', back.data.on_line.form)
							// this.$mRouter.push({
							// 	path:'/pages/recharge/from'
							// })
						}
					}
				})
			},
			pickerCk() {
				this.pickershow = true;
				let arr = this.paylist.map(item => {
					return item.title
				})
				this.columns = [arr]
			},
			confirm(v) {
				console.log(v.indexs[0])
				this.select = this.paylist[v.indexs[0]]
				this.list = this.paylist[v.indexs[0]]['extendjson']['money']
				console.log(this.select)
				this.pickershow = false
			},
			userindex() {
				api.userindex(this, '', back => {
					if (back.code == 1) {
						this.indexInfo = back.data
					}
				})
			},
			getpayInfo() {
				api.paylist(this, 'type=1', back => {
					if (back.code == 1) {
						this.paylist = back.data
						this.select = back.data[0]
						this.list = back.data[0]['extendjson']['money']
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.recharge-page {
		width: 100%;
		height: 100%;
		background-color: #eff3f2;
	}

	.bg-white {
		background-color: #FFFFFF;
		padding: 25rpx 0;
	}

	.recharge-header {
		/*rectangle 124*/
		width: 95%;
		height: 160rpx;
		margin: 0 auto;
		// background: linear-gradient(135.48deg, rgba(48, 122, 89, 1) 0%, rgba(115, 202, 163, 1) 100%);
		background: linear-gradient(135.48deg, #40A0D6 0%, #6DCBF2 100%);
		border-radius: 20rpx;
		display: flex;
		align-items: center;


		.recharge-header-right {
			.header-right-top {
				color: #FFF;
				// color: rgba(176, 210, 195, 1);
				font-size: 24rpx;
			}

			.header-right-bottom {
				color: #FFF;
				// color: rgba(176, 210, 195, 1);
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

	.recharge-btn {
		width: 90%;
		background-color: #439ED8;
		color: #FFFFFF;
		font-weight: 700;
		margin: 25rpx auto;
		border-radius: 88rpx;
		height: 88rpx;
	}

	.type-item {
		margin: 25rpx;
		border-bottom: 1rpx solid #D5DEDA;
		padding: 35rpx 0;
		font-size: 32rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.type-item-left {
			color: #444444;
			font-size: 32rpx;
		}

		.type-item-right {
			color: #439ED8;
			font-size: 32rpx;
			display: flex;
			align-items: center;

			.type-item-txt {
				font-size: 32rpx;
				color: #439ED8;
			}
		}

	}

	.rechart-box {
		display: flex;
		flex-wrap: wrap;
		margin: 15rpx;

		.list {
			width: 30%;
			margin: 12rpx 1%;
			border: 1rpx solid #EFF3F2;
			text-align: center;
			line-height: 75rpx;
			height: 75rpx;
			color: #444444;
			border-radius: 75rpx;
			background-color: #EFF3F2;
			font-weight: 700;
			font-size: 30rpx;

			text {
				margin-right: 5rpx;
			}
		}

		.list-active {
			background-color: #444444;
			color: #FFFFFF;
		}
	}

	.recharge-ipt {
		width: 94%;
		margin: 20rpx auto;
		border-bottom: 1rpx solid #D5DEDA;
		padding: 35rpx 0;
		font-size: 32rpx;
		display: flex;
		align-items: center;

		text {
			margin: 0 10rpx;
			font-size: 46rpx;
			font-weight: bold;
			color: #444444;
		}

		.placeholderClass {
			color: #D4E2DD;
			font-size: 46rpx;
			font-weight: bold;
		}

		input {
			border: none;
			outline: none;
			font-weight: bold;
			color: #444444;
			font-size: 46rpx;
		}
	}
</style>
