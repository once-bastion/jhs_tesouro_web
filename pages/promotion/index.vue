<template>
	<view class="promotion-page">
		<u-navbar :title="$t('invite.yqpy')"></u-navbar>
		<box-header v-if="teamInfo"  :teamInfo="teamInfo"></box-header>
		<!-- <view class="pro-center">
			<view class="center-list">
				<image src="../../assets/images/promotion/pro2.png" mode="heightFix"></image>
				<view class="txt">
					Meu bônus
				</view>
			</view>
			<view class="center-list">
				<image src="../../assets/images/promotion/pro1.png" mode="heightFix"></image>
				<view class="txt">
					Registro de aplicação
				</view>
			</view>
		</view>
		<view class="pro-mocao">
			<text>Promoção</text>
			<text> Registro de promoção > </text>
		</view> -->
		<box-level v-if="teamInfo" :teamInfo="teamInfo"></box-level>
	</view>
</template>

<script>
	import boxHeader from './components/box-header.vue'
	import boxLevel from './components/box-level.vue'
	import api from '@/api'
	export default {
		data() {
			return {
				teamInfo:1
			}
		},
		components: {
			[boxHeader.name]: boxHeader,
			[boxLevel.name]:boxLevel
		},
		mounted() {
				this.getteamTotal()
		},
		methods: {
			getteamTotal(){
				api.teamTotal(this,'',back=>{
					if(back.code==1){
						this.teamInfo = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.white-bg{
		padding: 25rpx 0;
		background-color: #FFFFFF;
	}
	.promotion-page{
		height: 100vh;
		background-color: #eff3f2;
	}
	.pro-mocao {
		background-color: #132c33;
		width: calc(100% - #{140rpx});
		padding: 35rpx 50rpx;
		margin: 25rpx auto;
		margin-top: 35rpx;
		border-radius: 20rpx;
		color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
	}

	.pro-center {
		display: flex;
		justify-content: center;

		.center-list {
			flex: 1;

			image {
				height: 45rpx;
				display: block;
				margin: 20rpx auto;
			}

			.txt {
				text-align: center;
				font-size: 28rpx;
			}

		}
	}
</style>
