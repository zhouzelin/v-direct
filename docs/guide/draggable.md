# 允许拖拽 draggable
绑定该指令，实现元素拖拽功能。给父元素添加position: relative的样式，被绑定的元素就可以在父元素内拖拽移动。

## 正常用法
```vue
<template>
  <div class="container">
    <div class="box" v-draggable></div>
  </div>
</template>

<style scoped>
.container {
  height: 400px;
  width: 400px;
  border: 1px solid #ddd;
}
.container .box {
  height: 20px;
  width: 20px;
  background-color: red;
}
</style>
```
<template>
  <div class="container">
    <div class="box" v-draggable></div>
  </div>
</template>

<style scoped>
.container {
  height: 200px;
  border: 1px solid #ddd;
  position: relative;
}
.container .box {
  height: 20px;
  width: 20px;
  background-color: yellow;
  border-radius: 50%;
}
</style>
