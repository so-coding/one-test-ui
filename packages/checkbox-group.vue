<template>
  <div class="vt-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vtCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
