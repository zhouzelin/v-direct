# 倒数指令 countDown
绑定该指令实现倒数数字功能

## 正常用法
```vue
<template>
  <div ref="cd" v-count-down="10" @count-down-start="countDownStart" @count-down-end="countDownEnd"></div>
  <button @click="start">start</button>
  <button @click="stop">stop</button>
  <button @click="reset">reset</button>
</template>

<script>
export default {
  methods: {
    start() {
      this.$refs.cd.countDownStart()
    },
    stop() {
      this.$refs.cd.countDownStop()
    },
    reset() {
      this.$refs.cd.countDownRest()
    },
    countDownStart() {
      alert('start')
    },
    countDownEnd() {
      alert('end')
    }
  }
}
</script>
```
<template>
  <div ref="cd" v-count-down="10" @count-down-start="countDownStart" @count-down-end="countDownEnd"></div>
  <button @click="start">start</button>
  <button @click="stop">stop</button>
  <button @click="reset">reset</button>
</template>

<script>
export default {
  methods: {
    start() {
      this.$refs.cd.countDownStart()
    },
    stop() {
      this.$refs.cd.countDownStop()
    },
    reset() {
      this.$refs.cd.countDownReset()
    },
    countDownStart() {
      alert('start')
    },
    countDownEnd() {
      alert('end')
    }
  }
}
</script>

## 属性
|参数|说明|类型|默认值|可选值|
|---|---|:---:|:---:|---|
|count-down-delay|设置每次倒数的时间间隔（以毫秒为单位）|Number|1000|-|

## 事件回调
|事件名称|说明|回调参数|
|---|---|---|
|count-down-start|开始倒数时触发|-|
|count-down-end|倒数完成时触发|-|

## 方法
|方法名|说明|参数|
|---|---|---|
|countDownStart|开始倒数|-|
|countDownStop|停止倒数|-|
|countDownReset|重置倒数|-|

