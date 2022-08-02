var zh = {};
const requireComponent = require.context('./files', false, /\.js$/);
requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName)
	Object.assign(zh, componentConfig.default);
})
module.exports = zh
