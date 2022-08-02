<template>
	<view class="box-item">
		<view class="list" @click="Jump(item)" v-for="(item,index) in list" :key="index">
			<image :src="item.image" mode="heightFix"></image>
			<p>{{item.txt}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'box-item',
		data() {
			return {

			};
		},
		computed: {
			list() {
				return [{
					image: require('../../../assets/images/index/item-icon/icon2.png'),
					txt: this.$t('index.cz'),
					path: '/pages/recharge/index'
				}, {
					image: require('../../../assets/images/index/item-icon/icon1.png'),
					txt: this.$t('index.yq'),
					path: "/pages/promotion/index"
				}, {
					image: require('../../../assets/images/index/item-icon/icon3.png'),
					txt: this.$t('index.cjwt'),
					path: '/pages/index/problema'
				}, {
					image: require('../../../assets/images/index/item-icon/icon4.png'),
					txt: this.$t('index.gywm'),
					path: '/pages/index/sobre'
				}]
			}
		},
		methods: {
			Jump(item) {
				this.$jump(item.path)
			}
		},
	}
</script>

<style lang="less">
	.box-item {
		margin: 15rpx;
		// background-color: #fff;
		padding: 25rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8rpx;

		.list {
			flex: 1;
			text-align: center;

			image {
				display: block;
				height: 60rpx;
				margin: 0 auto;
			}

			p {
				font-size: 28rpx;
				margin-top: 25rpx;
				color: #000;
			}
		}
	}
</style>
