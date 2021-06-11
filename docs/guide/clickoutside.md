# 外部点击 clickoutside
1. 被绑定元素被点击之后，再点击其外部会触发一次；
2. 重复步骤1可以重复触发事件。

## 正常用法
```vue
<template>
  <div class="box" v-clickoutside="clickoutside">
    点一下我，再点外部元素
  </div>
</template>

<script>
export default {
  methods: {
    clickoutside(e) {
      console.log(e)
      alert('已点了我的外部')
    }
  }
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  color: #fff;
  background-color: purple;
  border-radius: 8px;
  text-align: center;
  line-height: 200px;
}
</style>
```
<template>
  <div class="box" v-clickoutside="clickoutside">
    点一下我，再点外部元素
  </div>
</template>

<script>
export default {
  methods: {
    clickoutside(e) {
      console.log(e)
      alert('已点了我的外部')
    }
  }
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  color: #fff;
  background-color: purple;
  border-radius: 8px;
  line-height: 200px;
  text-align: center;
}
</style>
