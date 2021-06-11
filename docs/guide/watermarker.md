# 背景水印 watermarker
给元素添加背景水印
## 正常用法
```vue
<template>
  <div class="background" v-watermarker="'zery版权所用'"></div>
</template>

<style scoped>
.background {
  height: 400px;
  border: 1px solid #ddd;
}
</style>
```
<template>
  <div class="background" v-watermarker="'zery版权所用'"></div>
</template>

<style scoped>
.background {
  height: 400px;
  border: 1px solid #ddd;
}
</style>

## 特殊设置
可以通过以下配置自定义水印的样式
1. 方式一
```javascript
import zery from 'vue-directive-zery'
// 以下为默认值，可以通过修改以下的值修改样式
zery.setOption({
  watermarker: {
    width: 200,
    height: 150,
    font: '16px Microsoft YaHei',
    textColor: 'rgba(180, 180, 180, 0.3)',
    rotate: -30,
    textAlign: 'center',
    textBaseline: 'center'
  }
})
```
2. 方式二
```vue
<template>
  <div class="background" v-watermarker="'zery版权所用'"></div>
</template>

<script>
export default {
  created() {
    this.$zery.setOption({
      watermarker: {
        width: 200,
        height: 150,
        font: '16px Microsoft YaHei',
        textColor: 'rgba(180, 180, 180, 0.3)',
        rotate: -30,
        textAlign: 'center',
        textBaseline: 'center'
      }
    })
  }
}
</script>
```
