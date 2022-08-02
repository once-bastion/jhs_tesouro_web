<template>
	<view class="box-video">
		<video :poster="videoPoster" controls playsinline="playsinline" webkit-playsinline="true" x5-playsinline="true"
			x5-video-player-type="h5" x5-video-player-fullscreen="false" class="video-class" tabindex="-1"
			preload="none" src="https://finger-vip.com/media/CEO.58e2c1b6.mp4"></video>
	</view>
</template>

<script>
	export default {
		name: "box-video",
		data() {
			return {
				videoPoster: require('../../../assets/images/index/video-bg.png')
			};
		}
	}
</script>

<style lang="less">
	.box-video {
		display: flex;
		justify-content: center;
		margin: 45rpx auto 25rpx auto;
	}

	.video-class {
		width: 95%;
		border-radius: 20rpx;
		display: inline-block;
		height: 400rpx;
		object-fit: fill;
		background: transparent url('../../../assets/images/index/video-bg.png') 50% 50% / cover no-repeat;
	}

	video:focus {
		outline: none;
	}
</style>
