<template>
	<view>
		<u-modal style="position: relative;" :showConfirmButton="false" :show="show" title="">
			<u-icon color="#fff" @click="close" size="24" class="close" name="close"></u-icon>
			<image src="../../../assets/images/fazer/banner.jpg" mode="widthFix"></image>
		</u-modal>
	</view>
</template>

<script>
	export default {
		name: "box-dialog",
		data() {
			return {

			};
		},
		model: {
			prop: 'show',
			event: 'change'
		},
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		methods:{
			close(){
				this.$emit('change',false)
			}
		}
	}
</script>

<style lang="less">
	.close {
		position: absolute;
		right: 25rpx;
		top: 100rpx;
		z-index: 1122222;
	}
	/deep/.u-modal__content{
		padding: 0;
	}
	/deep/.u-popup__content{
		background-color: transparent;
	}
</style>
