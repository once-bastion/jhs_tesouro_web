<template>
	<view class="box-swiper">
		<u-swiper radius="5" previousMargin="30" nextMargin="30" circular circular :list="list"></u-swiper>
	</view>
</template>

<script>
	export default {
		name: 'box-swiper',
		data() {
			return {
				list: [
					require('../../../assets/images/index/indexnew-bg3.png'),
					require('../../../assets/images/index/indexnew-bg3.png'),
					require('../../../assets/images/index/indexnew-bg3.png')
				]
			};
		}
	}
</script>

<style lang="less" scoped>
	.box-swiper {
		margin: 15rpx auto;
	}
</style>
