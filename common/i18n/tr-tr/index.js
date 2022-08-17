
var en = {};
const requireComponent = require.context('./files', false, /\.js$/);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    Object.assign(en, componentConfig.default);
})
module.exports = en