<template>
	<view class="box-list">
		<!-- <u-cell v-for="(item,index) in list" @click="Jump(item.path)" :key="index" :title="item.name" :isLink="true"
			arrow-direction="arrow">
			<u-icon slot="icon" size="20" :name="item.image"></u-icon>
		</u-cell>
		<u-cell :title="$t('minha.tc')" @click="modalshow=true" :isLink="true" arrow-direction="arrow">
			<u-icon slot="icon" size="20" :name="require('../../../assets/images/minha/list7.png')"></u-icon>
		</u-cell> -->


		<view class="cell-list" v-for="(item,index) in list" @click="Jump(item.path)" :key="index">
			<image :src="item.image" mode="widthFix"></image>
			<view class="cell-list-right">
				<text>{{item.name}}</text>
				<u-icon name="arrow-right" color="#B1BEB8" :size="16"></u-icon>
			</view>
		</view>
		<view class="cell-list" @click="modalshow=true">
			<image :src="require('../../../assets/images/minha/list7.png')" mode="widthFix"></image>
			<view class="cell-list-right">
				<text>{{$t('minha.tc')}}</text>
				<u-icon name="arrow-right" color="#B1BEB8" :size="16"></u-icon>
			</view>
		</view>
		<u-modal @confirm="confirm" @cancel="modalshow=false" :title="$t('minha.qdlkm')" :showCancelButton="true"
			:confirmText="$t('minha.qd')" :cancelText="$t('minha.qx')" :show="modalshow" ref="uModal"></u-modal>
	</view>
</template>

<script>
	import api from '@/api'
	export default {
		name: "box-list",
		data() {
			return {
				modalshow: false,

			};
		},
		computed: {
			list() {
				return [{
						image: require('../../../assets/images/minha/detail.png'),
						name: this.$t('minha.aqzx'),
						path: "/pages/minha/safety"
					}, {
						image: require('../../../assets/images/minha/list2.png'),
						name: this.$t('minha.td'),
						path: '/pages/promotion/index'
					}, {
						image: require('../../../assets/images/minha/aviso.png'),
						name: this.$t('minha.gywm'),
						path: '/pages/index/sobre'
					}, {
						image: require('../../../assets/images/minha/centro.png'),
						name: this.$t('minha.kfzx'),
						path: "/pages/minha/service"
					}, {
						image: require('../../../assets/images/minha/lang.png'),
						name: this.$t('minha.yy'),
						path: "/pages/minha/langchange"
					}, 
					// {
					// 	image: require('../../../assets/images/minha/appdownload.png'),
					// 	name: "App",
					// 	path: "/pages/minha/appdownload"
					// },
					// {
					// 	image: require('../../../assets/images/minha/list6.png'),
					// 	name: "Centro de Segurança"
					// },
					// {
					// 	image: require('../../../assets/images/minha/list7.png'),
					// 	name: "Sair"
					// },
				]
			}
		},
		methods: {
			confirm() {
				this.$mRouter.redirectTo({
					path: '/pages/login/index'
				})
				uni.setStorage({
					key: 'userInfo',
					data: null,
				})
			},
			sair() {

			},
			userOut() {
				api.userOut(this, {}, back => {
					this.$toast(back.msg);
					if (back.code == 1) {
						setTimeout(function() {
							that.$mRouter.push({
								path: '/pages/login/index'
							})
						}, 1000)
					}
				});
			},
			Jump(path) {
				//���ͷ�����
				this.$jump(path)
			}
		}
	}
</script>

<style lang="scss">
	.cell-list {
		padding: 0 25rpx;
		display: flex;
		align-items: center;
		height: 95rpx;

		image {
			width: 40rpx;
			margin-right: 20rpx;
		}

		.cell-list-right {
			width: calc(100% - #{60rpx});
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 30rpx;
			color: #444444;
			height: 95rpx;
			border-bottom: 1rpx solid #e0e9e5;
		}
	}

	.box-list {
		background: #FFFFFF;
	}
</style>
