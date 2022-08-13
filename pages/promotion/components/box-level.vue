<template>
	<view class="box-level">
		<u-tabs @change="change" itemStyle="width:50%;height:45px;" lineWidth="40" lineColor="#429EDA" :list="tabsList">
		</u-tabs>

		<view class="box-level-main">
			<view class="level-list">
				<view class="top">
					{{$t('invite.rs')}}
				</view>
				<view class="bottom">
					<!-- {{teamInfo['level_'+(tabIndex+1)].now_num}} -->
				</view>
			</view>
			<view class="level-list">
				<view class="top">
					{{$t('invite.jj')}}
				</view>
				<view class="bottom">
					<!-- {{currency}}{{teamInfo.level_1.bonus}} -->
				</view>
			</view>
		</view>
		<u-button @click="Jump" class="paca-btn">{{$t('invite.yqhb')}}</u-button>

	</view>
</template>

<script>
	export default {
		name: "box-level",
		data() {
			return {

				tabIndex: 0,
				currency: '',
			};
		},
		computed: {
			tabsList() {
				return [{
					name: this.$t('invite.zjyh')
				}, {
					name: this.$t('invite.tdyh')
				}]
			}
		},
		mounted() {
			let user_info = JSON.parse(uni.getStorageSync('userInfo'));
			this.currency = user_info.area.currency
		},
		props: {
			teamInfo: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			change(v) {
				console.log(v)
				this.tabIndex = v.index
			},
			Jump() {
				this.$mRouter.push({
					path: '/pages/promotion/invite'
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.box-level {
		// margin: 20rpx;
		background-color: #fff;
		padding: 25rpx 0;
		margin-top: 25rpx;
		// border-radius: 8rpx;
		// box-shadow: 0 4rpx 16rpx 0 rgba(0, 0, 0, 0.1);
	}

	.paca-btn {
		width: 90%;
		background-color: #429EDA;
		color: #FFFFFF;
		font-weight: 700;
		margin: 0 auto 25rpx auto;
		border-radius: 88rpx;
		height: 88rpx;
	}

	.box-level-main {
		padding: 25rpx;
		display: flex;
		align-items: center;



		.level-list {
			flex: 1;
			text-align: center;

			.top {
				font-size: 24rpx;
			}

			.bottom {
				font-size: 32rpx;
				font-weight: 700;
				margin-top: 25rpx;
			}
		}
	}
	::v-deep .u-tabs__wrapper__nav {
		justify-content: space-between !important;
		.u-tabs__wrapper__nav__item {
			padding: 0;
		}
	}
</style>
