<template>
	<view class="minha-page">
		<box-header></box-header>
		<!-- <box-center></box-center> -->
		<!-- <view class="minha-swiper">
			<u-swiper :list="bannerlist" indicator indicatorMode="line" circular></u-swiper>
		</view> -->
		<view class="minha-list">
			<box-list></box-list>
		</view>
	</view>
</template>

<script>
	import boxHeader from './components/box-header.vue'
	// import boxCenter from './components/box-center.vue'
	import boxList from './components/box-list.vue'
	import api from '@/api'
	export default {
		data() {
			return {
				// welcome:[],
				// bonus:0,
				bannerlist: [
					require('../../assets/images/minha/banner1.png'),
					require('../../assets/images/minha/banner2.png'),
					require('../../assets/images/minha/banner3.png'),
				]
			}
		},
		components: {
			[boxHeader.name]: boxHeader,
			// [boxCenter.name]: boxCenter,
			[boxList.name]: boxList
		},
		onShow() {
			this.$setTar()
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.minha-page {
		width: 100%;
		height: 100%;
		background-color: #eff3f2;
	}
	.minha-list{
		margin-top: 25rpx;
	}
	.minha-swiper {
		width: 94%;
		border-radius: 20rpx;
		margin: 30rpx auto;
		display: block;
	}
</style>
