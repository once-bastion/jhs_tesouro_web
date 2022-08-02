import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 引入vuex
import store from './store'
// 引入公共方法
import $mHelper from '@/common/helper';
// 引入router
import $mRouter from '@/common/router.js';
Vue.prototype.$mRouter = $mRouter;
$mRouter.beforeEach((navType, to) => {
	// 
	if (!to.path) {
		uni.reLaunch({
			url: '/pages/index/index'
		});
		return;
	}
	// 
	if (!!to.isloginToast) {
		const query = {
			redirectUrl: to.path,
			...to.query
		};
		uni.setStorageSync('backPath', JSON.stringify(query))
		uni[navType]({
			url: $mHelper.objParseUrlAndParam('/pages/login/index', to.query)
		});
		return;
	} else {
		uni[navType]({
			url: $mHelper.objParseUrlAndParam(to.path, to.query)
		});
	}
})
// 引入uview
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

Vue.prototype.basePath = "https://api.hetianxia.shop"

//Vue.prototype.basePath = "http://api.qd.com"
// 引入多语言设置
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: 'pt-br',
	messages: {
		'pt-br': require('./common/i18n/pt-br/index'),
		'zh-cn': require('./common/i18n/zh-cn/index'), // 中文语言包
		// 'en-us': require('./common/i18n/en-us/index'), // 英文语言包

		// 'zh-tw': require('./common/i18n/zh-tw/index'),
		// 'ar-ae': require('./common/i18n/ar-ae/index'),
		// 'ja-jp': require('./common/i18n/ja-jp/index'),
		// 'ko-rkr': require('./common/i18n/ko-rkr/index'),
		'es-mx': require('./common/i18n/es-mx/index'),
		'fi': require('./common/i18n/fi/index')
	}
})

Vue.prototype.$toast = function(title) {
	uni.showToast({
		icon: 'none',
		title: title
	})
}
Vue.prototype.$showLoading = function(title) {
	uni.showLoading({
		title: title
	})
}

//定义菜单名称
Vue.prototype.$setTar = function() {
	uni.setTabBarItem({
		index: 0,
		text: this.$t('tarbar.sy'),
	})
	uni.setTabBarItem({
		index: 1,
		text: this.$t('tarbar.cz'),
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

Vue.prototype.$jump = function(path) {

	let tabarr = [
		'/pages/index/index',
		//'/pages/minha/service',
		'/pages/recharge/index',
		'/pages/fazer/index',
		'/pages/tarefa/index',
		'/pages/minha/index',
	]
	if (tabarr.includes(path)) {
		this.$mRouter.switchTab({
			path: path
		})
	} else {
		this.$mRouter.push({
			path: path
		})
	}
}


Vue.prototype.$hiddenLoading = function() {
	uni.hideLoading()
}
// 引入moment
import moment from 'moment'
Vue.filter('dataFormat', function(time, format) {
	if (time) {
		return moment.unix(time).format(format)
	}
})
App.mpType = 'app'

const app = new Vue({
	...App,
	i18n,
	store
})
app.$mount()
