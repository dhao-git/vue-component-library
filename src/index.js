import VButton from './components/Button'

const components = [VButton];

const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}

// 导出单个组件，用于按需引入
export { VButton };

// 导出 install 方法和所有组件，用于全局引入
export default {
    install,
    ...components
}