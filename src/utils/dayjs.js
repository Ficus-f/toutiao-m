// import Vue from 'vue'
import dayjs from 'dayjs'

// 加载中文语言包
import 'dayjs/locale/zh-cn'
// 加载相对时间
import relativeTime from 'dayjs/plugin/relativeTime'

// 配置为中文
dayjs.locale('zh-cn') // 全局使用

dayjs.extend(relativeTime)
// console.log(dayjs().to(dayjs('1990')))

// 定义一个全局过滤器，然后就可以在任何组件的模板中使用（js中没法调用）
// Vue.filter('relativeTime', value => {
//   return dayjs().to(dayjs(value))
// })
// dayjs() 获取当前最新时间
// dayjs().format('YYYY-MM-DD')
