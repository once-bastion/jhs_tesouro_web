var api = {};
const requireComponent = require.context('./files', false, /\.js$/)
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    Object.assign(api, componentConfig.default);
})
export default api;