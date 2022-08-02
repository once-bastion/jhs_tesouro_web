var putApi = require('../utils').default;
var api = {};
putApi(api, "init", "/common/init", {
	method: "post"
});
putApi(api, "login", "/user/login", {
	method: "post"
});
putApi(api, "register", "/user/register", {
	method: "post"
});
putApi(api, "creationOrder", "/order/creation", {
	method: "post"
});
putApi(api, "orderToday", "/order/today", {
	method: "get"
});
putApi(api, "news", "/news/index", {
	method: "get"
});

putApi(api, "orderStatistics", "/order/statistics", {
	method: "get"
});
putApi(api, "orderList", "/order/orderList", {
	method: "get"
});
putApi(api, "userInfo", "/user/index", {
	method: "get"
});
putApi(api, "userOut", "/user/logout", {
	method: "get"
});
putApi(api, "orderitem", "/order/item", {
	method: "get"
});
putApi(api, "orderpay", "/order/pay", {
	method: "post"
});
putApi(api, "payInfo", "/order/payInfo", {
	method: "get"
});
putApi(api, "newsList", "/news/index", {
	method: "get"
});
putApi(api, "newsroll", "/news/roll", {
	method: "get"
});
putApi(api, "userindex", "/user/index", {
	method: "get"
});
putApi(api, "dclist", "/capital/dclist", {
	method: "get"
});
putApi(api, "deposit", "/capital/deposit", {
	method: "post"
});
putApi(api, "paylist", "/capital/paylist", {
	method: "get"
});
putApi(api, "recharge", "/capital/recharge", {
	method: "post"
});
putApi(api, "depositOrder", "/capital/depositOrder", {
	method: "get"
});
putApi(api, "rechargeOrder", "/capital/rechargeOrder", {
	method: "get"
});
putApi(api, "teamTotal", "/invite/teamTotal", {
	method: "get"
});
putApi(api, "poster", "/invite/poster", {
	method: "get"
});
putApi(api, "capitalrecord", "/capital/record", {
	method: "get"
});
putApi(api, "resetpwd", "/user/resetpwd", {
	method: "post"
});
putApi(api, "service", "/service/index", {
	method: "get"
});
putApi(api, "pictureCode", "/common/pictureCode", {
	method: "get"
});
putApi(api, "ranking", "/news/ranking", {
	method: "get"
});
export default api
