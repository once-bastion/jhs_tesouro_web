<template>
	<view>
		<u-navbar :title="$t('service.yy')"></u-navbar>
		<view class="problema-list" @click="change(item)" v-for="(item,index) in list" :key="index">
			<view class="problema-list-left">
				{{item.name}}
			</view>
			<view style="color: #18B566;;">
				<u-icon v-if="id==item.id" color="#18B566;" name="checkmark-circle"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 'pt-br',
				list: [
					// {
					// 	name: '中文',
					// 	id: 'zh-cn'
					// },
					// {
					// 	name: 'English',
					// 	id: 'en-us'
					// },
					{
						name: 'Português',
						id: 'pt-br'
					},
					// {
					// 	name: '中文',
					// 	id: 'zh-cn'
					// },
					{
						name: 'España',
						id: 'es-mx'
					},
					{
						name: 'Filipino',
						id: 'fi'
					},
					// {
					// 	name: '繁体',
					// 	id: 'zh-tw'
					// }, {
					// 	name: '阿拉伯文',
					// 	id: 'ar-ae'
					// }, {
					// 	name: '日语',
					// 	id: 'ja-jp'
					// },
					// {
					// 	name: '韩语',
					// 	id: 'ko-rkr'
					// }
				]
			};
		},
		mounted() {
			// this.$i18n.locale = uni.getStorageSync('langid');
			this.id = uni.getStorageSync('langid')
			console.log(uni.getStorageSync('langid'))
		},
		methods: {
			change(item) {
				this.$showLoading()
				this.id = item.id
				uni.setStorage({
					key: 'langid',
					data: item.id
				})
				this.$i18n.locale = item.id;
				
				setTimeout(() => {

					this.$hiddenLoading()
				}, 500)
			}
		}

	}
</script>

<style lang="scss">
	.problema-list {
		margin: 25rpx;
		padding: 35rpx 45rpx;
		box-shadow: 0 5rpx 16rpx 0 rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 15rpx;

		.problema-list-left {
			display: flex;
			align-items: center;

			image {
				width: 50rpx;
				margin-right: 20rpx;
			}
		}

		.problema-list-right {
			display: flex;
			align-items: center;

			.btn {
				padding: 15rpx;
				background-color: #18B566;
				margin-left: 15rpx;
				color: #FFFFFF;
				border-radius: 10rpx;
			}
		}
	}
</style>
