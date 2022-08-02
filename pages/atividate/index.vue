<template>
	<view class="atividate-page">
		<u-navbar leftIcon="" title="Lista de Eventos"></u-navbar>
		<image class="atividate-bg" src="../../assets/images/index/index-bg.jpg" mode="widthFix"></image>
		<u-empty text="No data" mode="data" :icon="require('../../assets/images/index/empty.png')"></u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.atividate-bg {
		width: 100%;
	}
</style>
