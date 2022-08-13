<template>
	<view>
		<view>
			<u-navbar title="App download"></u-navbar>
			<view class="problema-list" @click="download('android')">
				<text>Android</text>
				<image src="../../assets/images/minha/android.png" mode="widthFix"></image>
			</view>
			<view class="problema-list ios" @click="download('ios')">
				<text>iOS</text>
				<image src="../../assets/images/minha/apple.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			download(type) {
				let initInfo = JSON.parse(uni.getStorageSync('initInfo'))
				if (type == 'android') {
					location.href = initInfo.app.Android_URL
					// const downloadTask = uni.downloadFile({
					// 	url: initInfo.app.Android_URL,
					// 	success: (downloadResult) => {
					// 		if (downloadResult.statusCode === 200) {
					// 			// console.log('安装包下载成功，即将安装：' + JSON.stringify(downloadResult, null, 4));
					// 			plus.runtime.openFile(downloadResult.tempFilePath);
					// 		}
					// 	}
					// });
					// downloadTask.onProgressUpdate((res) => {
					// 	console.log(res)
					// });
				} else {
					location.href = initInfo.app.IOS_URL
				}
			}
		}

	}
</script>

<style lang="scss">
	.problema-list {
		margin: 25rpx;
		height: 150rpx;
		display: flex;
		align-items: center;
		font-size: 46rpx;
		font-weight: 700;
		justify-content: space-between;
		padding: 0 25rpx;
		color: #FFFFFF;
		/*rectangle 159*/
		// background: linear-gradient(128.78deg, rgba(0, 180, 115, 1) 0%, rgba(87, 240, 148, 1) 100%);
		background: linear-gradient(128.78deg, #429EDA 0%, #71caee 100%);
		border-radius: 20rpx;

		image {
			width: 95rpx;
			margin-right: 20rpx;
		}
	}
	.ios{
		// background: linear-gradient(95.14deg, rgba(0, 148, 255, 1) 0%, rgba(113, 195, 255, 1) 100%);
		background: linear-gradient(128.78deg, #049F3D 0%, #1FCC69 100%);
	}
</style>
