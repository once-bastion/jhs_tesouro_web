
var token = ''
var lang = ''

function putApi(api, name, url, {
	method = 'get',
	isLoading = true,
} = {}) {
	api[name] = (vm, data, fun) => {
		(function doing() {
			if (typeof data === 'string' && data.length !== 0) {
				let tempArr = data.split("&");
				let tempData = {};
				tempArr.forEach(item => {
					var vArr = item.split("=");
					var key = vArr[0],
						value = vArr[1];
					tempData[key] = value;
				})
				data = tempData;
			}
			data = data || {}
			if (!!uni.getStorageSync('userInfo')) {
				token = JSON.parse(uni.getStorageSync('userInfo')).token
			}

			if (!!uni.getStorageSync('initInfo')) {
				lang = JSON.parse(uni.getStorageSync('initInfo')).lang
			}

			uni.request({
				method,
				url: vm.basePath + url, //仅为示例，并非真实接口地址。
				data,
				header: {
					'token': token, //自定义请求头信息,
					'content-type': "application/x-www-form-urlencoded",
					"lang": lang
				},
				success: (res) => {
					fun(res.data);
				},
				complete(res) {
					if (res.data.code == 401) {
						uni.showToast({
							icon: 'none',
							position: 'top',
							title: res.data.msg
						});
						vm.$mRouter.redirectTo({
							path: '/pages/login/index'
						})
						uni.setStorage({
							key: 'userInfo',
							data: null,
						})
					}
				}
			});
		})()
	}
}
export default putApi;
