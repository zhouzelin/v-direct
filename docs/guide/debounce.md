# 防抖操作 debounce
防止按钮在短事件内被多次点击，使用防抖函数限制在规定时间内只能点击一次

## 正常用法
```vue
<template>
  <button v-debounce="debounceClick">防抖</button>
</template>

<script>
export default {
  methods: {
    debounceClick(e) {
      console.log(e)
      alert('触发一次')
    }
  }
}
</script>
```
<template>
  <button v-debounce="debounceClick">防抖</button>
</template>

<script>
export default {
  methods: {
    debounceClick(e) {
      console.log(e)
      alert('触发一次')
    }
  }
}
</script>
