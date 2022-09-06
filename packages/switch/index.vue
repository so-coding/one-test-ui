<template>
	<div class="vt-switch" :class="{'is-checked': value}" @click.prevent="handleClick">
		<input class="vt-switch__input" type="checkbox" :name="name" />
		<!-- label中如果包含了input则点击事件将变为input -->
		<span class="vt-switch_core" ref="core">
			<span class="vt-switch_button"></span>
		</span>
	</div>
</template>

<script>
export default {
	name: 'VtSwitch',
	props: {
		// 实现switch组件数据双向绑定和input组件相同，使用v-model语法糖即可。
		value: {
			type: Boolean,
			default: false
		},
		activeColor: {
			type: String,
			default: ''
		},
		inactiveColor: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		}
	},
	watch: {
		value() {
			if (this.activeColor || this.inactiveColor) {
				this.setBackgroundColor()
			}
		}
	},
	methods: {
		handleClick() {
			this.$emit('input', !this.value)
		},
		/**
		  async asynchandleClick() {
				this.$emit('input', !this.value)
				// 其他代码
				// 等待value发生了改变，再setColor
				// 数据修改后，等待Dom更新 再修改按钮的颜色
				await this.$nextTick()
				this.setBackgroundColor()
			},
		 */
		// 设置背景颜色
		setBackgroundColor() {
			const newColor = this.value ? this.activeColor : this.inactiveColor
			this.$refs.core.style.borderColor = newColor
			this.$refs.core.style.backgroundColor = newColor
		}
	},
	mounted() {
		// 修改开关颜色
		if (this.activeColor || this.inactiveColor) {
			this.setBackgroundColor()
		}

		// if (this.activeColor || this.inactiveColor) {
		// 	let color = this.value ? this.activeColor : this.inactiveColor
		// 	this.$refs.core.style.borderColor = color
		// 	this.$refs.core.style.backgroundColor = color
		// }
	}
}
</script>

<style lang="scss" scoped>
.vt-switch {
	display: inline-block;
	// 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。
	align-items: center;
	position: relative;
	font-size: 14px;
	line-height: 20px;
	// 隐藏input标签
	.vt-switch__input {
		position: absolute;
		width: 0;
		height: 0;
		opacity: 0;
		margin: 0;
	}
	// 对行内元素生效 该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。
	vertical-align: middle;
	.vt-switch_core {
		margin: 0;
		// span是行元素 转为行内块块级元素可以设置宽高
		display: inline-block;
		position: relative;
		width: 40px;
		height: 20px;
		border: 1px solid #dcdfe6;
		outline: none;
		border-radius: 10px;
		box-sizing: border-box;
		background: #dcdfe6;
		cursor: pointer;
		// 定义边框颜色和背景色的过渡时间
		transition: border-color 0.3s, background-color 0.3s;
		vertical-align: middle;
		.vt-switch_button {
			// 首先区别内联元素和块元素
			// 块级元素可设置宽高，内联元素设置无效。
			// 块级元素的 width 默认为 100%，而内联元素则是根据其自身的内容或子元素来决定其宽度。
			// 内联元素改变宽高，可以通过设置 display: block;当 display 的值设为 block 时，元素将以块级形式呈现。
			// 当position为absolute、fixed、float的时候，元素脱离原来的文档流。变为块级元素，所以span此时也可以设置宽高。
			// 因此：
			// span元素是内联元素，但是通过绝对定位或者float之后可以脱离文档流，变成块级元素，，因此可设置宽高。
			position: absolute;
			top: 1px;
			left: 1px;
			border-radius: 100%;
			transition: all 0.3s;
			// 外边的vt-switch_core 的宽度为20 -2 -2得到
			width: 16px;
			height: 16px;
			background-color: #fff;
		}
	}
}

// 选中的样式
.is-checked {
	.vt-switch_core {
		border-color: #409eff;
		background-color: #409eff;
		.vt-switch_button {
			// Transform属性 translateX() 在x轴上进行平移 x>0 向右
			// 20px = 40px -2px -2px - 16px(一个 (.vt-switch_button)圆按钮的宽度) 因为vt-switch_core的border边框就左右占了1px
			transform: translateX(20px);
		}
	}
}
</style>
