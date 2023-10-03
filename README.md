# mly-stream-sdk-exoplayer-uniapp

## Initialize
​
```sh
const driver = uni.requireNativePlugin('UniMlyDriver');
driver.initialize({
	clientID: "YOUR_CLIENT_ID",
	sampleRate: 1.0
})
```
​
​
## Usage
​
```js
<mlyplayer ref="player" :src="YOUR_VIDEO_URL" :autoplay="true" style="width:200;height:100"></mlyplayer>

```
​
### mlyplayer attributes:
​
​
|NAME|TYPE|DEFAULT|DESC|
|---|---|---|---|
|src|String||play source URL|
|autoplay|Boolean|true|true: start play when ready|
|muted|Boolea|false|true: muted|
|controls|Boolean|true|true: show contolls|
|isMonitorAllowed|Boolean|true|true: allow monitor|
|isLoaderAllowed|Boolean|true|true: allow loader|

​
### mlyplayer functions:
​
```js
start() start player
stop() stop player
play() resume player when pause
pause() pause player
```