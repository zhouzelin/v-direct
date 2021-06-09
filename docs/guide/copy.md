<script>
import Vue from 'vue'
import zery from '@/index.js'
Vue.use(zery)

export default {
  data() {
    return {
      content: 'Hello Zery!'
    }
  },
  methods: {
    success(val) {
      alert('复制成功，内容为：' + val)
    }
  }
}
</script>

# 复制文本 copy
绑定该指令，点击元素才能实现复制功能

## 正常用法
支持接收text，success，empty三个参数。
1. text接收需要复制的文本；
2. success接收复制成功的回调函数，函数传入复制的文本；
3. empty接收文本为空值的回调函数。
```vue
<template>
  <textarea v-model="content"></textarea>
  <br>
  <button v-copy="{text: content, success}"></button>
</template>

<script>
export default {
  data() {
    return {
      content: 'Hello Zery!'
    }
  },
  methods: {
    success(val) {
      alert('复制成功，内容为：' + val)
    }
  }
}
</script>
```
<template>
  <textarea v-model="content"></textarea>
  <br>
  <button v-copy="{text: content, success}">复制</button>
</template>

## 接收参数
|参数|说明|类型|必填|
|:---|:---|:---:|:---:|
|text|复制文本内容|String|是|
|success|执行成功回调函数，接收一个text参数, text为复制文本内容|Function|否|
|empty|复制文本为空值时触发的回调函数，接收一个text参数, text为复制文本内容|Function|否|
