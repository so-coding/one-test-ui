<template>
  <div id="app">
    <vt-button type="primary" icon="delete">primary</vt-button>
    <vt-input placeholder="请输入内容"  type="password" v-model="input" clearable> </vt-input>
    <vt-input placeholder="请输入内容" v-model="input" showPassword> </vt-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

	},
	data() {
		return {
			input: ''
		}
	}
}
</script>

<style lang="scss"></style>
