<template>
	<view>
		<view class="type-item" @click="pickershow=true">
			{{title}}
			<u-icon style="margin-right: 12rpx;" name="arrow-down"></u-icon>
		</view>
		<u-picker :cancelText="$t('retirar.pkcancel')" :confirmText="$t('retirar.pkconfirm')" @cancel="pickershow=false"
			:show="pickershow" ref="uPicker" :columns="columns" @confirm="confirm"></u-picker>
	</view>
</template>

<script>
	export default {
		name: "select-picker",
		data() {
			return {
				pickershow: false
			};
		},
		props: {
			title: [String, Number],
			columns: {
				type: Array,
				default: () => []
			}
		},
		model: {
			prop: 'title',
			event: 'change'
		},
		methods: {
			confirm(v) {
				console.log(v)
				this.$emit('change', v.value[0])
				this.pickershow = false
			}
		}
	}
</script>

<style lang="less">
	.type-item {
		margin: 25rpx auto;
		width: calc(~'94% - 70rpx');
		border: 1rpx solid #C8CECD;
		border-radius: 85rpx;
		height: 85rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		padding: 0 35rpx;
		justify-content: space-between;
	}
</style>
