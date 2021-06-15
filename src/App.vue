<template>
  <div v-watermarker="'zery版权所有'" :watermarker-width="150" :watermarker-height="100" :watermarker-rotate="-25" style="height: 600px">
    <input v-model="content" placeholder="请输入">
    <button v-copy="content" :copy-success="success">复制</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '123456'
    }
  },
  methods: {
    success(v) {
      alert(v)
    }
  }
}
</script>
