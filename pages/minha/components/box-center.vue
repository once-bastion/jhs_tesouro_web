<template>
	<view class="box-center">
		<view class="list" @click="Jump(item.path)" v-for="(item,index) in list" :key="index">
			<image :src="item.image" mode="widthFix"></image>
			<view class="txt">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "box-center",
		data() {
			return {

			};
		},
		computed: {
			list() {
				return [
					{
						image: require('../../../assets/images/minha/center1.png'),
						name: this.$t('minha.cz'),
						path: '/pages/recharge/index'
					}, {
						image: require('../../../assets/images/minha/center2.png'),
						name: this.$t('minha.tx'),
						path: '/pages/retirar/index'
					}
					// , {
					// 	image: require('../../../assets/images/minha/center3.png'),
					// 	name: 'cartão do banco',
					// 	path: '/pages/minha/bank'
					// },
				]
			}
		},
		methods: {
			Jump(path) {
				this.$jump(path)
			}
		}
	}
</script>

<style lang="scss">
	.box-center {
		width: 90%;
		padding: 15rpx;
		background-color: #FFFFFF;
		border-radius: 15rpx 15rpx 0 0;
		display: flex;
		box-shadow: 0 4rpx 16rpx 0 rgba(0, 0, 0, 0.1);
		margin: 0 auto;
		margin-top: -50rpx;
		padding-bottom: 30rpx;

		.list {
			flex: 1;
			text-align: center;

			image {
				width: 45rpx;
				display: block;
				margin: 20rpx auto;
			}

			.txt {
				font-size: 28rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
