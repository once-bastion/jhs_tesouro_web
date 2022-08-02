<template>
	<view class="box-header">
		<view class="box-header-left">
			<view class="header-left-title">
				{{$t('fazer.title')}}
			</view>
			<view class="header-left-desc">
				{{$t('fazer.text')}}
			</view>
			<view class="header-left-btn" @click="$jump('/pages/recharge/index')">
				{{$t('fazer.button')}}
				
			</view>
		</view>
		<image class="box-header-icon" src="../../../assets/images/index/index-icon.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name:"box-header",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.box-header{
	width: 92%;
	border-radius: 20rpx;
	margin: 0 auto;
	padding-top: 25rpx;
	background: url(../../../assets/images/index/indexnew-bg.png) no-repeat;
	background-size: 100% 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.box-header-left{
		padding: 50rpx;
		color: #FFFFFF;
		.header-left-title{
			font-size: 42rpx;
			font-weight: 700;
			
		}
		.header-left-desc{
			font-size: 28rpx;
			margin: 25rpx 0;
		}
		.header-left-btn{
			width: 150rpx;
			height: 50rpx;
			border-radius: 50rpx;
			border: 1rpx solid #FFFFFF;
			text-align: center;
			line-height: 50rpx;
			color: #FFFFFF;
		}
	}
	.box-header-icon{
		width: 250rpx;
	}
}
</style>
