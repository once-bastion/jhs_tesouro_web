<template>
	<view class="video-rank">
		<view class="rank-item" v-for="(item,index) in rankList" :key="index">
			<image v-if="index==0" class="rank-icon" src="../../../assets/images/index/rank-icon2.png" mode="widthFix">
			</image>
			<image v-else-if="index==1" class="rank-icon" src="../../../assets/images/index/rank-icon1.png"
				mode="widthFix"></image>
			<image v-else-if="index==2" class="rank-icon" src="../../../assets/images/index/rank-icon3.png"
				mode="widthFix"></image>
			<view class="rank-header">
				<image v-if="index==0" src="../../../assets/images/index/rank-header1.png" mode="widthFix"></image>
				<image v-else-if="index==1" src="../../../assets/images/index/rank-header1.png" mode="widthFix"></image>
				<image v-else-if="index==2" src="../../../assets/images/index/rank-header1.png" mode="widthFix"></image>
			</view>
			<view class="rank-con">
				<view class="rank-con-name">
					{{item.username}}
				</view>
				<view class="rank-con-coin">
					R$
				</view>
				<view class="rank-con-money">
					{{item.money}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		name: "video-rank",
		data() {
			return {
				list: [{
					image: require('../../../assets/images/index/rank-header1.png'),
					name: 'Pablo ',
					money: "4396.11"
				}, {
					image: require('../../../assets/images/index/rank-header2.png'),
					name: 'Pablo Eric',
					money: "5396.11"
				}, {
					image: require('../../../assets/images/index/rank-header3.png'),
					name: 'Pablo Eric',
					money: "6396.11"
				}],
				rankList: []
			};
		},
		mounted() {
			this.ranking()
		},
		activated() {
			this.ranking()
		},
		methods: {
			ranking() {
				api.ranking(this, '', back => {
					if (back.code == 1) {
						let arr = back.data
						let temp = arr[0]
						let temp1 = arr[1]
						arr[0] = temp1
						arr[1] = temp
						this.rankList = arr
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.video-rank {
		display: flex;
		align-items: flex-end;
		justify-content: center;

		.rank-item {
			flex: 1;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			position: relative;
			padding: 25rpx 0;
			margin: 0 20rpx;

			.rank-icon {
				width: 36rpx;
				position: absolute;
				right: 15rpx;
				top: 0;
			}

			.rank-header {
				width: 120rpx;
				height: 120rpx;
				border-radius: 120rpx;
				margin: 25rpx auto;
				display: block;

				image {
					width: 100%;
				}
			}

			.rank-con {
				text-align: center;
				padding: 0 15rpx;

				view {
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;

				}

				.rank-con-name {
					color: #636363;
					font-size: 24rpx;

				}

				.rank-con-coin {
					color: #636363;
					font-size: 18rpx;
					margin: 15rpx 0 5rpx 0;
				}

				.rank-con-money {
					font-size: 28rpx;
					font-weight: 600;
				}

			}
		}
	}

	.rank-item:nth-child(2) {
		margin: 0;

		.rank-header {
			width: 140rpx;
			height: 140rpx;
			border-radius: 140rpx;
		}
	}
</style>
