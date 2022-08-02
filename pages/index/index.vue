<template>
	<view class="index-page">
		<view class="index-header">
			<!-- <h2>Super Ganho</h2> -->
			<!-- 	<h2>Baixar aplication
				<image style="width: 50rpx;" src="../../assets/images/index/download.png" mode="widthFix"></image>
			</h2> -->
		</view>
		<box-swiper></box-swiper>
		<!-- <image class="index-bg" src="../../assets/images/index/index-bg.png" mode="widthFix"></image> -->
		<!-- <u-notice-bar color="#333" bgColor='transparent' :text="text"></u-notice-bar> -->
		<box-item></box-item>
		<view class="index-btn" @click="$jump('/pages/minha/appdownload')">
			<u-icon style="margin-right: 10rpx;" name="download" color="#fff" size="26"></u-icon>
			Transferir aplicacao
		</view>
		<!-- <box-video></box-video> -->
		<view class="index-title">
			Hall Da Fame
		</view>
		<video-rank></video-rank>
		<!-- <u-tabs lineWidth="60" lineColor="#e6c405" :activeStyle="activeStyle" :list="tabsList"></u-tabs> -->
		<box-fama :list="famalist"></box-fama>
		<view style="padding: 10rpx;"></view>
		<hover-ball />
	</view>
</template>

<script>
	import boxItem from './components/box-item.vue'
	import boxFama from './components/box-fama.vue'
	import api from '@/api'
	import hoverBall from '@/components/hover-ball/hover-ball.vue';
	import boxSwiper from './components/box-swiper.vue'
	import boxVideo from './components/box-video.vue'
	import boxRank from './components/box-ranking.vue'
	export default {
		data() {
			return {
				text: "Member Stephanie Knightcompleted an order for38284.00，Member Brenda Cookcompleted an order for34607.00，Member Robert Russellcompleted an order for9794.00，Member Kathryn Stewartcompleted an order for32534.00，Member Bobby Hillcompleted an order for23601.00，Member Joshua Saunderscompleted an order for7025.00，Member Ernest Bellcompleted an order for6956.00，Member Earl Patelcompleted an order for31647.00，Member Edward Patelcompleted an order for35345.00，Member Randy Thompsoncompleted an order for24476.00",
				noticelist: [],
				// tabsList: [{
				// 	name: 'Hall da Fame'
				// }],
				// activeStyle: {
				// 	color: '#126e82',
				// 	"fontWeight": 700
				// },
				famalist: []
			};
		},
		components: {
			[boxItem.name]: boxItem,
			[boxFama.name]: boxFama,
			[boxSwiper.name]: boxSwiper,
			[boxVideo.name]:boxVideo,
			[boxRank.name]:boxRank,
			hoverBall
		},
		onShow() {
			this.newsroll()
			this.$setTar()
		},
		methods: {
			newsroll() {
				api.newsroll(this, 'type=4', back => {
					if (back.code == 1) {
						this.noticelist = back.data.map(item => {
							return item.msg
						})
						this.text = this.noticelist.join(',')
					}
				})
				api.newsroll(this, 'type=5', back => {
					if (back.code == 1) {
						this.famalist = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.index-page {
		height: 100%;
		background-color: #eff3f2;
	}

	.index-title {
		/*hall da fame*/
		color: rgba(68, 68, 68, 1);
		font-size: 36rpx;
		padding: 25rpx;
		font-weight: 600;

	}

	.index-header {
		padding: 10rpx 25rpx;
		// background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h2 {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.index-bg {
		width: 100%;
	}

	.index-btn {
		width: 90%;
		margin: 0 auto;
		text-align: center;
		height: 90rpx;
		background-image: linear-gradient(to left, #619f84, #317b5a);
		border-radius: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 28rpx;
		box-shadow: 0 4rpx 16rpx 0 rgba(49, 123, 90, 0.1);

	}
</style>
