<template>
	<view class="box-fama-main">
		<view class="box-fama" :style="{transform: 'translateY('+translateIndex+'px)'}">
			<view class="fama-list" v-for="(item,index) in list" :key="index">
				<view class="list-name">
					{{item.username}}
				</view>
				<view class="list-txt">
					{{$t('retirar.txcg')}}
				</view>
				<view class="list-money">
					{{item.money}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "box-fama",
		data() {
			return {
				// list: [],
				translateIndex: -72,
				setInter: null
			};
		},
		props:{
			list:{
				type:Array,
				default:()=>[]
			}
			
		},
		beforeDestroy() {
			clearInterval(this.setInter)
			this.setInter = null
		},
		mounted() {
			// for (let i = 0; i < 10; i++) {
			// 	this.list.push({
			// 		name: 'Hardol coll',
			// 		txt: "dadsadadddddddddddddddasd",
			// 		money: '23123.90'
			// 	})
			// }

			this.setInter = setInterval(() => {
				this.translateIndex--
				if (this.translateIndex < -100) {
					this.translateIndex = 0
				}
			}, 20)
		}
	}
</script>

<style lang="less">
	.box-fama-main {
		margin: 20rpx;
		background-color: #fff;
		padding: 25rpx 0;
		height: 480rpx;
		border-radius: 15rpx;
		// box-shadow: 0 4rpx 16rpx 0 rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.box-fama {
		transform: translate(0px, 0px);
		transition: all 0ms ease-in 0s;

		.fama-list {
			padding: 15rpx;
			display: flex;
			width: calc(~'100% - 30rpx');
			align-items: center;
			justify-content: center;
			text-align: left;
			color: #858585;

			.list-name {
				flex: 1;
				margin-left: 15rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 24rpx;
				margin: 0 5rpx;
				color: #858585;
			}
			.list-txt {
				flex: 2;
				margin-left: 15rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 28rpx;
				margin: 0 5rpx;
				color: #858585;
			}

			.list-money {
				flex: 1;
				margin: 0 5rpx;
				font-size: 24rpx;
				text-align: right;
				color: #858585;
			}
		}
	}
</style>
