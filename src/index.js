import VButton from './components/Button'
import * as utils from './utils'

const components = [VButton];

const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

// 导出单个组件，用于按需引入
export { VButton };
export * from './utils';

// 导出 install 方法和所有组件，用于全局引入
export default {
    install,
    ...components,
    utils
}