<template>
  <button
    class="vt-button"
    :class="[
      `vt-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="`vt-icon-${icon}`"></i>
    <!-- 如果没传入文本插槽，则不显示span内容 -->
    <!-- 关于$slots的官网解释 https://cn.vuejs.org/v2/api/#vm-slots -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'vtButton',
  // 此时对props进行校验，值接收string类型的type值
  props: {
    type: {
      type: String,
      // 设置默认值：如果不传值，那么就使用default
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    // console.log(this.type)
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.vt-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: nvt;
  text-align: center;
  box-sizing: border-box;
  outline: nvt;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: nvt;
  // 加上下面这个警告就消失了
  user-select: nvt;
  -webkit-user-select: nvt;
  -moz-user-select: nvt;
  -ms-user-select: nvt;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #aec4da;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

// 不同类型按钮的颜色风格
.vt-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.vt-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.vt-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.vt-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.vt-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

// 朴素按钮的特点
// 朴素按钮样式
.vt-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.vt-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.vt-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.vt-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.vt-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.vt-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// 是否圆角
.vt-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆按钮
.vt-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// 设置图标和文字之间有一定的距离
.vt-button [class*="vt-icon-"] + span {
  margin-left: 5px;
}

// 不同按钮禁用的样式
.vt-button.is-disabled {
  cursor: no-drop;
}
.vt-button-primary.is-disabled {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.vt-button-success.is-disabled {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.vt-button-info.is-disabled {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.vt-button-danger.is-disabled {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.vt-button-warning.is-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
</style>
