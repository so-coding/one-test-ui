<template>
	<div class="vt-item">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'vtForm',
	provide() {
		return {
			Form: this
		}
	},
	props: {
		model: {
			type: Object,
			required: true
		},
		labelWidth: {
			type: String,
			default: '80px'
		}
	}
}
</script>

<style lang="scss" scoped></style>
