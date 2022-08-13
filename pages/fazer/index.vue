<template>
	<view class="fazer-page">
		<!-- <u-navbar leftIcon="" :title="$t('fazer.zq')"></u-navbar> -->
		<!-- <image class="fazer-bg" src="../../assets/images/fazer/bg.jpg" mode="widthFix"></image> -->
		<box-header></box-header>
		<u-button class="paca-btn" :loading="loading" @click="creationOrder">{{$t('fazer.zq')}}</u-button>
		<box-hoje></box-hoje>
		<box-pedido></box-pedido>
		<box-fama :list="famalist"></box-fama>
		<view style="padding: 10rpx;"></view>
		<u-modal style="position: relative;" :show="show" :showConfirmButton="false">
			<u-icon size="20" @click="show=false" class="close-icon" name="close"></u-icon>
			<view class="modal-main-box">
				<box-detail-item @paysuccess='paysuccess' :orderInfo="orderInfo" :order_id="order_id"></box-detail-item>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import boxFama from './components/box-fama.vue'
	import boxHoje from './components/box-hoje.vue'
	import boxPedido from './components/box-pedido.vue'
	import api from '@/api'
	import boxDetailItem from './components/box-detail-item.vue'
	import boxHeader from './components/box-header.vue'
	export default {
		data() {
			return {
				loading: false,
				order_today: [],
				show: false,
				orderInfo: {},
				order_id: '',
				famalist:[]
			}
		},
		components: {
			[boxFama.name]: boxFama,
			[boxHoje.name]: boxHoje,
			[boxPedido.name]: boxPedido,
			[boxDetailItem.name]: boxDetailItem,
			[boxHeader.name]:boxHeader
		},
		onShow() {
			this.orderToday()
			this.newsroll()
			this.$setTar()
		},

		methods: {
			newsroll() {
				api.newsroll(this, 'type=3', back => {
					if (back.code == 1) {
						this.famalist = back.data
					}
				})
			},
			paysuccess() {
				this.show = false
				this.$mRouter.switchTab({
					path: '/pages/tarefa/index'
				})
			},
			creationOrder() {
				uni.showLoading()
				if (this.loading) {
					return false;
				}
				this.loading = true;
				api.creationOrder(this, {}, back => {
					uni.hideLoading()
					this.$toast(back.msg);
					if (back.code == 1) {
						this.order_id = back.data.goods_id
						setTimeout(()=>{
							this.paysuccess()
						},1500)
						
						// api.payInfo(this, 'order_id=' + this.order_id, back => {
						// 	this.$hiddenLoading()
						// 	if (back.code == 1) {
						// 		this.orderInfo = back.data
						// 		this.show = true
						// 	}
						// })
					}
					this.loading = false;
				})
			},
			orderToday() {
				api.orderToday(this, {}, back => {
					if (back.code == 1) {
						this.order_today = back.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.u-modal__content {
		padding: 10rpx 5rpx !important;
	}

	.modal-main-box {
		max-height: 800rpx;
		overflow: auto;
		position: relative;

	}

	.close-icon {
		position: absolute;
		right: 45rpx;
		top: 25rpx;
		z-index: 11222;
	}

	.fazer-page {
		height: 100%;
		background-color: #eff3f2;
		padding-top: 25rpx;
	}

	.fazer-bg {
		width: 100%;
	}

	.paca-btn {
		width: 90%;
		background-color: #429EDA;
		color: #FFFFFF;
		font-weight: 700;
		margin: 25rpx auto;
		border-radius: 88rpx;
		height: 88rpx;
	}
</style>
