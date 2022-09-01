<template>
  <transition name="dialog-fade">
    <!-- @click.self避免冒泡，只有点击自己时才能触发   -->
    <div class="vt-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="vt-dialog" :style="{ width: width, marginTop: top }">
        <div class="vt-dialog_header">
          <!-- 将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
          <slot name="title">
            <span class="vt-dialog_title">{{ title }}</span>
          </slot>
          <button class="vt-dialog_headerbtn" @click="handleClose">
            <i class="vt-icon-cancel1"></i>
          </button>
        </div>

        <div class="vt-dialog_body">
          <slot></slot>
        </div>
        <div class="vt-dialog_footer">
          <!-- 如果footer不传递内容，则不显示footer -->
          <slot name="footer" v-if="$slots.footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vtDialog',
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      // 设置默认值：如果不传值，那么就使用default
      default: '标题'
    },
    width: {
      type: String,
      // 设置默认值：如果不传值，那么就使用default
      default: ''
    },
    top: {
      type: String,
      // 设置默认值：如果不传值，那么就使用default
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.vt-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // 如果内容被修剪，则浏览器会显⽰滚动条，以便查看其余内
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .vt-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .vt-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .vt-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .vt-icon-close {
          color: #909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      // 文本自动换行
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      :deep .vt-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

// 显示的动画
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    // 向上移动
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
