<template>
	<view v-if="indexInfo" class="retirar-page">
		<u-navbar :title="$t('retirar.tx')" @rightClick="rightClick" :rightText="$t('retirar.jl')"></u-navbar>
		<box-header v-if="indexInfo" :indexInfo="indexInfo"></box-header>
		<view class="white-bg">
			<view class="retirar-title">
				<!-- Por favor, insira o valor da retirada -->
				<u-radio-group v-model="selectid" @change="change">
					<view class="radio-block" v-for="(item, index) in dclistInfo" :key="index">
						<u-radio activeColor="#307A59" :label="item.name" :name="item.id">
						</u-radio>
						<br>
					</view>
				</u-radio-group>
			</view>
			<view v-for="(item,index) in arrVal" :key="index">
				<view class="retirar" v-if="item.isipt">
					<input placeholder-class="ipt" :placeholder="item.plac" type="text" v-model="item.val" />
				</view>
				<select-picker v-model="item.val" :columns="item.columns" v-else></select-picker>
			</view>

		</view>
		<view class="white-bg">
			<view class="retirar-ipt" style="margin-bottom: 0;">
				<text>{{indexInfo.welcome.area.currency}}</text>
				<input @blur="moneyBlur" placeholder-class="placeholderClass" placeholder="0.00" type="number"
					v-model="money" />
			</view>
		</view>
		<view class="retirar-tip">
			<p>{{$t('retirar.zxtxje')}}: {{indexInfo.welcome.area.currency}}{{select.smallest}}</p>
			<p v-if="select.maximum > 0">{{$t('retirar.zxtdje')}}: {{indexInfo.welcome.area.currency}}{{select.maximum}}
			</p>
			<p>{{$t('retirar.zxtime')}}: {{select.deposit_time}}</p>
			<!-- 			<p>{{$t('retirar.jcsxf')}}: {{indexInfo.welcome.area.currency}}{{select.basics_cost}}</p>
			<p>{{$t('retirar.sxfbl')}}: {{select.ratio_cost}}%</p> -->
		</view>
		<u-button @click="submit" class="retirar-btn"> {{$t('retirar.tx')}} </u-button>
		<box-fama :list="list"></box-fama>
		<view style="padding: 25rpx;">
			
		</view>
	</view>
</template>

<script>
	import boxHeader from './components/box-header.vue'
	import boxFama from './components/box-fama.vue'
	import api from '@/api'
	import selectPicker from './components/select-picker.vue'
	export default {
		data() {
			return {
				money: '',
				radiovalue1: '',
				list: [],
				indexInfo: null,
				select: {},
				dclistInfo: [],
				selectid: 0,
				arrVal: [],
			};
		},
		components: {
			[boxHeader.name]: boxHeader,
			[boxFama.name]: boxFama,
			[selectPicker.name]: selectPicker
		},
		onShow() {
			this.newsroll()
			this.userindex()
			this.dclist()
		},
		methods: {
			isObject(object) {
				return typeof(object)
			},
			moneyBlur() {
				this.money = this.money.split('.')[0]
			},
			rightClick() {
				this.$mRouter.push({
					path: '/pages/recharge/record',
					query: {
						type: 2
					}
				})
			},
			submit() {
				if (Number(this.money) <= 0) {
					this.$toast(this.$t('retirar.txtip1'))
					return
				}
				if (this.money < Number(this.select.smallest)) {
					this.$toast(this.$t('retirar.txtip2'))
					return
				}



				this.$showLoading()
				let data = {
					money: this.money,
					dc_id: this.selectid
				}
				this.arrVal.forEach(item => {
					data[item.name] = item.val
				})

				// if( data.dc_id == 6 ){
				// 	if( data.document_id !== data.receive_account ){
				// 		this.$hiddenLoading()
				// 		this.$toast(this.$t('retirar.qrzh'))
				// 		return false
				// 	}
				// }



				api.deposit(this, data, back => {
					this.$hiddenLoading()
					this.$toast(back.msg)
					if (back.code == 1) {
						this.money = ''
						this.newsroll()
						this.userindex()
						this.dclist()
					}
				})
			},
			change() {
				this.select = this.dclistInfo.find(item => item.id == this.selectid)
				this.money = ''
				this.getarrVal()
			},
			getarrVal() {
				let arr = Object.keys(this.select.formjson)
				let arrdata = this.select.formdata
				console.log(arr, arrdata)
				//console.log(this.select)
				console.log(arr, arrdata)
				let arr1 = []
				arr.forEach(item => {
					let obj = {}
					obj.name = item
					if (!Array.isArray(this.select.formjson[item])) {
						obj.isipt = true
						obj.plac = this.select.formjson[item]
					} else {
						obj.isipt = false
						obj.columns = [this.select.formjson[item]]
						console.log(obj.columns)
					}
					if (arrdata) {
						obj.val = arrdata[item]
					} else {
						obj.val = ''
					}
					arr1.push(obj)
				})
				this.arrVal = arr1
				console.log('arrVal', this.arrVal)
			},
			dclist() {
				api.dclist(this, '', back => {
					if (back.code == 1) {
						this.dclistInfo = back.data
						this.select = back.data[0]
						this.selectid = this.select.id
						this.getarrVal()
					}
				})
			},
			userindex() {
				api.userindex(this, '', back => {
					if (back.code == 1) {
						this.indexInfo = back.data
					}
				})
			},
			newsroll() {
				api.newsroll(this, 'type=2', back => {
					if (back.code == 1) {
						this.list = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.white-bg {
		margin-top: 25rpx;
		padding: 25rpx 0;
		background-color: #FFFFFF;
	}

	.retirar-ipt {
		width: 94%;
		margin: 0 auto;
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

	.retirar-page {
		width: 100%;
		height: 100%;
		background-color: #eff3f2;
	}

	.radio-block {
		width: 100%;
		display: block;
		height: auto;
	}

	.retirar-title {
		padding: 25rpx;
		font-size: 36rpx;
		font-weight: 700;
		background-color: #FFFFFF;
	}

	.retirar-btn {
		width: 90%;
		background-color: #307A59;
		color: #FFFFFF;
		font-weight: 700;
		margin: 0 auto 25rpx auto;
		border-radius: 88rpx;
		height: 88rpx;
	}

	.retirar-tip {
		padding: 25rpx;
		font-size: 24rpx;
		line-height: 1.6;
		color: #999999;
	}

	/deep/.ipt {
		font-size: 30rpx;
		color: #999999;

	}

	.retirar {
		width: 94%;
		margin: 0 auto;
		border: 1rpx solid #C8CECD;
		border-radius: 85rpx;
		display: flex;
		align-items: center;
		height: 85rpx;
		margin-bottom: 25rpx;
		font-size: 30rpx;

		text {
			margin: 0 10rpx;
			font-size: 38rpx;
			color: #126e82;
		}

		input {
			border: none;
			width: 100%;
			outline: none;
			text-indent: 35rpx;
		}
	}
</style>
