<script>
	import Vue from 'vue'
	import api from '@/api'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					Vue.prototype.screenHeight = e.screenHeight;
					Vue.prototype.screenWidth = e.screenWidth;
					Vue.prototype.windowHeight = e.windowHeight;

					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {

			if (!!uni.getStorageSync('langid')) {
				this.$i18n.locale = uni.getStorageSync('langid');
				uni.setTabBarItem({
					index: 0,
					text: this.$t('tarbar.sy'),
				})
				uni.setTabBarItem({
					index: 1,
					text: this.$t('tarbar.hd'),
				})
				uni.setTabBarItem({
					index: 2,
					text: this.$t('tarbar.zq'),
				})
				uni.setTabBarItem({
					index: 3,
					text: this.$t('tarbar.rw'),
				})
				uni.setTabBarItem({
					index: 4,
					text: this.$t('tarbar.wd'),
				})
			}
			if (!uni.getStorageSync('initInfo')) {
				var h = location.href.split(".")[0];
				var domain = h.split("//")[1];
				api.init(this, {
					domain: domain || 'www'
				}, back => {
					if (back.code == 1) {
						console.log(back);
						this.$i18n.locale = back.data.lang;
						uni.setStorage({
							key: 'langid',
							data: back.data.lang
						})
						uni.setStorage({
							key: 'initInfo',
							data: JSON.stringify(back.data),
							success: function() {
								console.log(1111)
							}
						})
					}
				})
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "./static/css/default.css";

	@font-face {
		font-family: 'Sans-Serif';
		src: url('~@/static/font.woff2');
	}

	/*每个页面公共css */
	uni-app,
	uni-page {
		min-height: 100%;
		// background-color: #eff3f2 !important;
		font-family: 'Sans-Serif';
		font-size: 18rpx;
	}
</style>
