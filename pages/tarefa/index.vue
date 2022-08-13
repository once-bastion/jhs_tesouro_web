<template>
	<view class="tarefa-page">
		<u-navbar leftIcon="" :title="$t('tarefa.rwlb')"></u-navbar>
		<box-header></box-header>
		<view style="background-color: #FFFFFF;">
			<u-tabs itemStyle="width:27%;height:45px" @change="change" :current="current" lineWidth="60" lineColor="#429EDA"
				:activeStyle="activeStyle" :list="tabsList"></u-tabs>
		</view>
		<u-empty v-if="!list.length" text="No data" mode="data" :icon="require('../../assets/images/index/empty.png')">
		</u-empty>
		<box-item :list="list" v-else></box-item>
	</view>
</template>

<script>
	import boxHeader from './components/box-header.vue'
	import boxItem from './components/box-item.vue'
	import api from '@/api'
	export default {
		data() {
			return {
				list: [],

				activeStyle: {
					color: '#444444',
					"fontWeight": 700,
				},
				current: 0,
				page: 1
			}
		},
		computed: {
			tabsList() {
				return [{
					name: this.$t('tarefa.jxz')
				}, {
					name: this.$t('tarefa.ywc')
				}, {
					name: this.$t('tarefa.djz')
				}]
			}
		},
		onShow() {
			this.page = 1
			this.list = []
			this.orderList()
			this.$setTar()
		},
		onReachBottom() {
			this.page++
			this.orderList()
		},
		components: {
			[boxHeader.name]: boxHeader,
			[boxItem.name]: boxItem
		},
		methods: {
			change(v) {
				this.list = []
				this.current = v.index
				this.page = 1
				this.orderList()
			},
			orderList() {
				this.$showLoading()
				let param = {}
				if (this.current == 0) {
					param = {
						page: this.page,
						status: 1,
						freeze: 0
					}
				} else if (this.current == 1) {
					param = {
						page: this.page,
						status: 2,
						freeze: 0
					}
				} else if (this.current == 2) {
					param = {
						page: this.page,
						status: 1,
						freeze: 1
					}
				}
				api.orderList(this, param, back => {
					this.$hiddenLoading()
					if (back.code == 1) {
						this.list = this.list.concat(back.data.data)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.tarefa-page{
	min-height: 100vh;
		background-color: #eff3f2;
}
</style>
