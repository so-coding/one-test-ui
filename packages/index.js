// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from './button/index.js'
import Dialog from './dialog/index.js'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'

import './fonts/iconfont.css'
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]
// 定义install方法，它将作为export暴露的对象的方法被Vue.use调用
const install = function (Vue) {
  // 判断当前组件是否已被安装过，如果已安装过则不再安装
  if (install.installed) return
  // install.installed = true
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}

// 如果只需要部分组件，请使用import {button} from '';
// Vue.component(Button)的语法手动注册组件
// 这样便可以实现按需引入
