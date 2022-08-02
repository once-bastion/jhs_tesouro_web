<template>
	<view>
		<u-navbar :title="$t('invite.jjjl')"></u-navbar>
		<box-item :list="list"></box-item>
	</view>
</template>

<script>
	import api from '@/api'
	import boxItem from './components/box-item.vue'
	export default {
		data() {
			return {
				page: 1,
				list: []
			};
		},
		components: {
			[boxItem.name]: boxItem
		},
		onReachBottom() {
			this.page++
			this.capitalrecord()
		},
		onLoad() {
			this.capitalrecord()
		},
		methods: {
			capitalrecord() {
				api.capitalrecord(this, {
					page: this.page,
					type: 5
				}, back => {
					if (back.code == 1) {
						this.list = this.list.concat(back.data.data)
					}
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
