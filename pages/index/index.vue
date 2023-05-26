<template>
	<view class="content">
		<view class="box">
			<button class="button" type="primary" @click="startClick">Start</button>
			<button class="button" type="primary" @click="stopClick">Stop</button>
			<button class="button" type="primary" @click="pauseClick">Pause</button>
			<button class="button" type="primary" @click="playClick">Resume</button>
		</view>
		<view class="btn">
			<view style="margin-bottom: 10px;padding-left: 10px;">
				Muted? {{muted}}
			</view>
			<view class="box">
				<button class="button" type="primary" @click="mutedClick(true)">Yes</button>
				<button class="button" type="primary" @click="mutedClick(false)">No</button>
			</view>
			
		</view>
		<view class="btn">
			<view style="margin-bottom: 10px;padding-left: 10px;">
				Show Controls: {{controls}}
			</view>
			<view class="box">
				<button class="button" type="primary" @click="controlsClick(true)">Show</button>
				<button class="button" type="primary" @click="controlsClick(false)">Hide</button>
			</view>
		</view>
	</view>
</template>

<script>
	let driver = uni.requireNativePlugin('UniMlyDriver');
	export default {
		data() {
			return {
				muted: false,
				controls: true
			}
		},
		onLoad() {
			if (driver) {
				driver.initialize({clientID: "cegh8d9j11u91ba1u600"})
			}
		},
		onHide() {
			this.pauseClick()
		},
		methods: {
			startClick() {
				uni.$emit('start')
			},
			stopClick() {
				uni.$emit('stop')
			},
			playClick() {
				uni.$emit('play')
			},
			pauseClick() {
				uni.$emit('pause')
			},
			mutedClick(muted) {
				this.muted = muted
				uni.$emit('muted',muted)
			},
			controlsClick(controls) {
				this.controls = controls
				uni.$emit('controls',controls)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding-top: calc(56.25vw + var(--status-bar-height));
	}
	.btn {
		margin-bottom: 10px;
	}
	.box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.button {
		margin: 0 5px;
		margin-bottom: 20px;
		flex: 1;
		padding-left: 8px;
		padding-right: 8px;
	}
</style>
