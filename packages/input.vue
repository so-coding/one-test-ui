<template>
  <div class="vt-input" :class="{ 'vt-input_suffix': showSuffix }">
    <input
      class="vt-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :value="value"
      @input="handleInput"
      :disabled="disabled"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    />
    <span class="vt-input_suffix">
      <!-- v-if="clearable && value"  -->
      <i
        class="on-input_icon vt-icon-cancel"
        v-if="clearable && value && hovering"
        @click="clear"
      ></i>
      <!-- v-if="showPassword && type == 'password'" -->
      <!-- 只有展示密码且input的类型为文本框 -->
      <i
        class="on-input_icon vt-icon-child"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vtInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  data () {
    return {
      // 显示是否显示密码框
      passwordVisible: false,
      // 鼠标的移入移除判断
      hovering: false
    }
  },
  methods: {
    // 绑定input事件进行回调
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // input 绑定着父组件的 v-model的值
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    },
    focus () {}
  }
}
</script>

<style lang="scss" scoped>
.vt-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  // input img 属于行内替换元素，可以设置宽高，在一行上显示 属于inline元素,但是拥有inlin-block的特性
  display: inline-block;
  .vt-input_inner {
    -webkit-appearance: none; /*去掉webkit默认的表单样式*/
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    // cubic-bezier() 函数定义了一个贝塞尔曲线(Cubic Bezier)。
    transition: border-color 0.2s cubic-bezier(0.645, 0.45, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.vt-input_suffix {
  .vt-input_inner {
    padding-right: 30px;
  }
  .vt-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
