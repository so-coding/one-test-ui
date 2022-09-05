import checkboxGroup from './index.vue'

checkboxGroup.install = function (Vue) {
  Vue.component(checkboxGroup.name, checkboxGroup)
}

export default checkboxGroup
