# 介绍
v-direct(原名vue-directive-zery)是一个vue的自定义指令扩展库，该库包含了一些常用的指令，例如：外部点击`clickOutside`，复制`copy`，防抖`debounce`，获取焦点`focus`，拖动`draggable`等等。减少重复的代码，使前端开发更加高效。

# 快速上手
::: warning 前提条件
v-direct 需要 Node.js (opens new window)>= 8.6，目前只支持vue版本为2.x。
:::
1. 安装
在控制台中执行以下指令
```bash
npm i -S v-direct
// or
yarn add v-direct
```
2. 引入依赖包
依赖于vue，引入vue和v-direct
```javascript
// main.js
import Vue from 'vue'
import direct from 'v-direct'
Vue.use(direct)
```
3. 使用
```vue
<template>
  <input v-model="text" placeholder="请输入">
  <button v-copy="success" :copy-text="text">复制</button>
</template>

<script>
export default {
  data() {
    return {
      text: 'v-direct'
    }
  },
  methods: {
    success(val) {
      alert('复制成功')
    }
  }
}
</script>
```
<template>
  <input v-model="text" placeholder="请输入">
  <button v-copy="success" :copy-text="text">复制</button>
</template>

<script>
import Vue from 'vue'
import direct from '@/index.js'
Vue.use(direct)
export default {
  data() {
    return {
      text: 'v-direct'
    }
  },
  methods: {
    success(val) {
      alert('复制成功')
    }
  }
}
</script>

## 防止冲突，按需加载
```javascript
direct.use(['watermarker', 'copy', 'longpress'])
Vue.use(direct)
```