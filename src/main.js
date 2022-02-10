import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载 Vant 核心组件库
import Vant from 'vant'
// 加载 Vant 全局样式
import 'vant/lib/index.css'
// 加载全局样式
import './styles/index.less'
// 加载动态设置 REM 基准值
import 'amfe-flexible'
// 加载 dayjs 初始化配置
import './utils/dayjs'

createApp(App).use(store).use(router).use(Vant).mount('#app')
