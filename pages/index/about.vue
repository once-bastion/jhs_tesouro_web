<template>
	<view>
		<u-navbar :title="$t('sobre.zxxq')"></u-navbar>
		<view class="about-title">
			{{sobredetail.title}}
		</view>
		<!-- <p> </p> -->
		<view style="padding: 25rpx;">
			<view v-html="sobredetail.newscontent">

			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {

			};
		},
		computed: {
			...mapState({
				sobredetail: state => state.sobredetail
			})
		}
	}
</script>

<style lang="scss">
	.about-title {
		font-size: 32rpx;
		font-weight: 700;
		color: #444444;
		padding: 25rpx;
	}

	p {
		font-size: 24rpx;
		padding: 15rpx;
	}
</style>
