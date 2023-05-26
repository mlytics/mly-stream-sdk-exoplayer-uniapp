## Mlytics Uniapp Plugin README

## Initialize
​
```sh
const driver = uni.requireNativePlugin('UniMlyDriver');
driver.initialize({
	clientID: ""
})
```
​
​
## Usage
​
```js
<mlyplayer ref="player" style="width:200;height:100"></mlyplayer>

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

​
### mlyplayer functions:
​
```js
start() start player
stop() stop player
play() resume player when pause
pause() pause player
```