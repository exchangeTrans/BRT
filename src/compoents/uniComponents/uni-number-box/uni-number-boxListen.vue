<template>
	<view class="uni-numbox">
		<view :class="{'uni-numbox--disabled': inputValue <= min || disabled}" class="uni-numbox__minus" @click="_calcValue('minus')" v-bind:style="{'color':numberBoxStyle&&numberBoxStyle.color?numberBoxStyle.color:''}">
			<span>-</span>
			<view class="boxOpacityBg" v-bind:style="{'background':numberBoxStyle&&numberBoxStyle.background?numberBoxStyle.background:'','opacity':numberBoxStyle&&numberBoxStyle.opacity?numberBoxStyle.opacity:''}"></view></view>
		<input :disabled="disabled" v-model="inputValue"  class="uni-numbox__value" type="number" @blur="_onBlur" v-bind:style="{'color':numberBoxStyle&&numberBoxStyle.inputColor?numberBoxStyle.inputColor+'!important':'','background':numberBoxStyle&&numberBoxStyle.inputBg?numberBoxStyle.inputBg+'!important':''}">
		<view :class="{'uni-numbox--disabled': inputValue >= max || disabled}" class="uni-numbox__plus" @click="_calcValue('plus')" v-bind:style="{'color':numberBoxStyle&&numberBoxStyle.color?numberBoxStyle.color:''}
">
			<span>+</span>
			<view class="boxOpacityBg" v-bind:style="{'background':numberBoxStyle&&numberBoxStyle.background?numberBoxStyle.background:'','opacity':numberBoxStyle&&numberBoxStyle.opacity?numberBoxStyle.opacity:''}"></view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'UniNumberBox',
		props: {
			value: {
				type: [Number, String],
				default: 1
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 100
			},
			step: {
				type: Number,
				default: 1
			},
			disabled: {
				type: Boolean,
				default: false
			},
            numberBoxStyle: {
                type: Object,
                default: ()=>{}
            }
		},
		data() {
			return {
				inputValue: 0
			}
		},
        computed:{
            style() {
                let {numberBoxStyle}=this.$props;
                let style = {
                    ...numberBoxStyle
                }
                return style
            },
        },
		watch: {
			value(val) {
				this.inputValue = +val
			},
			inputValue(newVal, oldVal) {
				if (+newVal !== +oldVal) {
					this.$emit('change', {new:newVal,old:oldVal})
				}
			}
		},
		created() {
			this.inputValue = +this.value
		},
		methods: {
			_calcValue(type) {
				if (this.disabled) {
					return
				}
				const scale = this._getDecimalScale()
				let value = this.inputValue * scale
				let step = this.step * scale
				if (type === 'minus') {
					value -= step
				} else if (type === 'plus') {
					value += step
				}
				if (value < this.min || value > this.max) {
					return
				}
				this.inputValue = value / scale
			},
			_getDecimalScale() {
				let scale = 1
				// 浮点型
				if (~~this.step !== this.step) {
					scale = Math.pow(10, (this.step + '').split('.')[1].length)
				}
				return scale
			},
			_onBlur(event) {
				let value = event.detail.value
				if (!value) {
					this.inputValue = 0
					return
				}
				value = +value
				if (value > this.max) {
					value = this.max
				} else if (value < this.min) {
					value = this.min
				}
				this.inputValue = value
			}
		}
	}
</script>
<style lang="less">
	// @charset "UTF-8";

	.uni-numbox {
		margin-left: 10rpx;
		display: inline-flex;
		flex-direction: row;
		justify-content: flex-start;
		height: 50rpx;
		position: relative;
		background:rgba(229,230,231,1);
		border-radius:4px;
		overflow: hidden;
		float: left;
	}

	.uni-numbox:after {
		/* content: '';
		position: absolute;
		transform-origin: center;
		box-sizing: border-box;
		pointer-events: none;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%; */
		/* border: 1rpx solid #c8c7cc; */
		/* border-radius: 12rpx;
		transform: scale(.5) */
	}

	.uni-numbox__minus,
	.uni-numbox__plus {
		margin: 0;
		width: 50rpx;
		font-size: 40rpx;
		height: 100%;
		line-height: 50rpx;
		text-align: center;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: rgba(226,227,227,1);
		position: relative;

		span{
			z-index: 2;
		}

		.boxOpacityBg{
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top:0;
			opacity: 1;
			background:rgba(187,187,187,1);
			z-index: 1;
		}
	}

	.uni-numbox__value {
		position: relative;
		/* background:rgba(103,94,125,1); */
		width: 70rpx;
		height: 100%;
		text-align: center;
		color: #444444;
		padding: 0;
		background: rgba(229,230,231,1)!important;
	}

	.uni-numbox__value:after {
		/* content: '';
		position: absolute;
		transform-origin: center;
		box-sizing: border-box;
		pointer-events: none;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		border-style: solid;
		border-color: #c8c7cc;
		border-left-width: 1px;
		border-right-width: 1px;
		border-top-width: 0;
		border-bottom-width: 0;
		transform: scale(.5) */
	}

	.uni-numbox--disabled {
		background:rgba(194,196,195,1);
		opacity:0.4;
	}


</style>
