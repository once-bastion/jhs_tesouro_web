<template>
	<view>
		<u-navbar :title="type==1?$t('record.czjl'):$t('record.txjl')"></u-navbar>
		<recharge-item :list="list" v-if="type==1"></recharge-item>
		<withdraw-item :list="list" v-else></withdraw-item>
		<u-empty text="No data" v-if="!list.length" mode="data" :icon="require('../../assets/images/index/empty.png')"></u-empty>
	</view>
</template>

<script>
	import rechargeItem from './compnents/recharge-item.vue'
	import withdrawItem from './compnents/withdraw-item.vue'
	import api from '@/api'
	export default {
		data() {
			return {
				type: 1,
				page: 1,
				list: []
			}
		},
		components: {
			[rechargeItem.name]: rechargeItem,
			[withdrawItem.name]: withdrawItem
		},
		onLoad(option) {
			this.type = option.type
			this.getList()
		},
		onReachBottom() {
			this.page++
			this.getList()
		},
		methods: {
			getList() {
				this.$showLoading()
				let apiName = this.type == 1 ? 'rechargeOrder' : "depositOrder"
				api[apiName](this, {
					page: this.page
				}, back => {
					this.$hiddenLoading()
					if (back.code == 1) {
						this.list = this.list.concat(back.data.data)
					}
				})
			}
		}
	}
</script>

<style>

</style>
