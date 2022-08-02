<template>
	<view>
		<u-popup :closeable="true" @close="show=false" :show="show">
			<view class="popup-list">
				<view class="top">
					PIX
				</view>
				<input disabled placeholder-class="ipt" class="ipt" type="text" placeholder="Nome" value="" />
			</view>
			<view class="popup-list">
				<view class="top">
					Nome
				</view>
				<input placeholder-class="ipt" class="ipt" type="text" placeholder="Nome" value="" />
			</view>
			<view class="popup-list">
				<view class="top">
					Chave do PIX
				</view>
				<input placeholder-class="ipt" class="ipt" type="text" placeholder="Chave do PIX" value="" />
			</view>
			<view class="popup-list">
				<view class="top">
					Chave do PIX
				</view>
				<input placeholder-class="ipt" class="ipt" type="text" placeholder="Chave do PIX" value="" />
			</view>
			<view class="popup-list">
				<view class="top">
					Phone
				</view>
				<input placeholder-class="ipt" class="ipt" type="text" placeholder="Phone" value="" />
			</view>
			<u-button class="retirar-btn"> enviar </u-button>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: 'box-popup',
		data() {
			return {
				show: false
			};
		}
	}
</script>

<style lang="scss">
	.retirar-btn {
		width: 90%;
		background-color: #126e82;
		border-radius: 50rpx;
		color: #FFFFFF;
		font-weight: 700;
		margin: 25rpx auto;
	}

	.popup-list {
		padding: 15rpx 25rpx;

		.top {
			color: #000;
			font-size: 28rpx;
		}

		.ipt {
			font-size: 28rpx;
			border: none;
			outline: none;
			padding: 10rpx 0;
		}
	}
</style>
