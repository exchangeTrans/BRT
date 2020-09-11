<template>
	<view :class="isVoice?'uni-countdown-voice':'uni-countdown'">
		<view v-if="showDay" :style="{borderColor:borderColor, color:color, background:backgroundColor}" class="uni-countdown__number">{{ d }}</view>
		<view v-if="showDay" :style="{color:splitorColor}" class="uni-countdown__splitor">天</view>
		<view v-if="showHour" :style="{borderColor:borderColor, color:color, background:backgroundColor}" class="uni-countdown__number">{{ h }}</view>
		<view v-if="showHour" :style="{color:splitorColor}" class="uni-countdown__splitor">{{ showColon ? ':' : '时' }}</view>
		<view v-if="showMinute" :style="{borderColor:borderColor, color:color, background:backgroundColor}" class="uni-countdown__number">{{ i }}</view>
		<view v-if="showMinute" :style="{color:splitorColor}" class="uni-countdown__splitor">{{ showColon ? ':' : '分' }}</view>
		<view :style="{borderColor:borderColor, color:color, background:backgroundColor}" class="uni-countdown__number">{{ s }}</view>
		<view v-if="!showColon" :style="{color:splitorColor}" class="uni-countdown__splitor">秒</view>
	</view>
</template>
<script>
	export default {
		name: 'UniCountdown',
		props: {
            isVoice: {
                type: Boolean,
                default: false
            },
            showDay: {
                type: Boolean,
                default: false
            },
            showHour: {
                type: Boolean,
                default: false,
            },
            showMinute: {
                type: Boolean,
                default: true,
            },
            showColon: {
                type: Boolean,
                default: true
            },
            backgroundColor: {
                type: String,
                default: ''
            },
            borderColor: {
                type: String,
                default: '#000000'
            },
            color: {
                type: String,
                default: '#000000'
            },
			splitorColor: {
				type: String,
				default: '#000000'
			},
			day: {
				type: Number,
				default: 0
			},
			hour: {
				type: Number,
				default: 0
			},
			minute: {
				type: Number,
				default: 0
			},
			second: {
				type: Number,
				default: 0
			}
		},
		watch:{
			second(v){
				clearInterval(this.timer);
				this.init();

			},

            seconds(v){
                this.$emit('timeChange',v);
			}
		},

		data() {
			return {
				timer: null,
				d: '00',
				h: '00',
				i: '00',
				s: '00',
				leftTime: 0,
				seconds: 0,
				isUp:false
			}
		},
		created: function(e) {
			this.init();

		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods: {
			init(){
				this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second)
				this.countDown()
				this.timer = setInterval(() => {
					this.seconds--
					if (this.seconds < 0) {
						this.timeUp()
						return
					}
					this.countDown()
				}, 1000)
			},
			toSeconds(day, hours, minutes, seconds) {
				return (day * 60 * 60 * 24) + (hours * 60 * 60) + (minutes * 60) + seconds
			},
			timeUp() {
				clearInterval(this.timer)

				if(this.isUp){
					this.$emit('timeup');
					this.isUp = false;
				}

			},
			countDown() {
				let seconds = this.seconds
				let [day, hour, minute, second] = [0, 0, 0, 0]
				if (seconds > 0) {
					this.isUp = true;
					day = Math.floor(seconds / (60 * 60 * 24))
					hour = Math.floor(seconds / (60 * 60)) - (day * 24)
					minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
					second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
				} else {
					this.timeUp()
				}
				if (day < 10) {
					day = '0' + day
				}
				if (hour < 10) {
					hour = '0' + hour
				}
				if (minute < 10) {
					minute = '0' + minute
				}
				if (second < 10) {
					second = '0' + second
				}
				this.d = day;
				this.h = hour;
				this.i = minute;
				this.s = second;
			}
		}
	}
</script>
<style lang="less">
	@charset "UTF-8";

	.uni-countdown {
		/*padding: 2rpx 0;*/
		display: inline-flex;
		flex-wrap: nowrap;
		justify-content: center;



	.uni-countdown__splitor {
		justify-content: center;
		line-height: 44rpx;
		/*padding: 0 5rpx;*/
		font-size: 24rpx
	}

	.uni-countdown__number {
		font-family:Source Han Sans CN;
		line-height: 44rpx;
		justify-content: center;
		height: 44rpx;
		border-radius: 6rpx;
		/*margin: 0 5rpx;*/
		/*font-size: 28rpx;*/
		font-size: 24rpx;
		/*border: 1px solid #000;*/
		font-size: 24rpx;
		/*padding: 0 10rpx*/
	}
	}


	.uni-countdown-voice{
		font-size:42rpx;
		font-family:FZCuHeiSongS-B-GB;
		font-weight:400;
		color:rgba(68,68,68,1);
		text-align: center;

		.uni-countdown__splitor {
			//float: left;
			display: inline-block;
		}

		.uni-countdown__number {
			//  float: left;
			display: inline-block;
		}
	}
</style>
