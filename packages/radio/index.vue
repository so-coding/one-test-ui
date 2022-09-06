<template>
	<label class="vt-radio" :class="{'is-checked': label == model}">
		<!-- label包括input,label被点击会触发里面的input -->
		<span class="vt-radio_input">
			<span class="vt-radio_inner"></span>
			<input type="radio" class="vt-radio_original" :value="label" v-model="model" />
		</span>
		<span class="vt-radio_label">
			<slot></slot>
			<!-- 如果没有传值，就把label作为文本显示 -->
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script>
export default {
	name: 'VtRadio',
	props: {
		label: {
			type: [String, Number, Boolean],
			defualt: ''
		},
		value: null,
		name: {
			type: String,
			defualt: ''
		}
	},
	inject: {
		RadioGroup: {
			default: ''
		}
	},
	// 计算属性
	computed: {
		model: {
			get() {
				return this.isGroup ? this.RadioGroup.value : this.value
			},
			set(value) {
				// 触发父组件的input事件
				// this.$emit('input', value)
				this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
			}
		},
		// 用于判断radio是否被radioGroup包裹
		isGroup() {
			return !!this.RadioGroup
		}
	}
}
</script>

<style lang="scss" scoped>
.vt-radio {
	color: #606266;
	font-weight: 500;
	line-height: 1;
	position: relative;
	cursor: pointer;
	display: inline-block;
	// 文本不进行换行
	white-space: nowrap;
	outline: none;
	font-size: 14px;
	margin-right: 30px;
	-moz-user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	.vt-radio_input {
		white-space: nowrap;
		cursor: pointer;
		outline: none;
		display: inline-block;
		line-height: 1;
		position: relative;
		// 自身属性
		vertical-align: middle;
		.vt-radio_inner {
			border: 1px solid #dcdfe6;
			border-radius: 100%;
			width: 14px;
			height: 14px;
			background-color: #fff;
			position: relative;
			cursor: pointer;
			display: inline-block;
			box-sizing: border-box;
			// 中间的小白圆圈
			&:after {
				// 相对父元素居中
				width: 4px;
				height: 4px;
				border-radius: 100%;
				background-color: #fff;
				content: '';
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%) scale(0);
				transition: transform 0.15s ease-in;
			}
		}
		.vt-radio_original {
			opacity: 0;
			outline: none;
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: 0;
		}
	}
	.vt-radio_label {
		font-size: 14px;
		padding-left: 10px;
	}
}
.vt-radio.is-checked {
	.vt-radio_input {
		.vt-radio_inner {
			border-color: #409eff;
			background-color: #409eff;
			&:after {
				// 显示小白点
				transform: translate(-50%, -50%) scale(1);
			}
		}
	}
	.vt-radio_label {
		color: #409eff;
	}
}
</style>
