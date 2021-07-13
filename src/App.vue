<template>
  <div>
    <div
      ref="a"
      v-count-down="1000"
      @count-down-end="countDownEnd"
      @click="handleClick"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 20,
      text: '进入全屏',
      flag: true
    }
  },
  methods: {
    countDownEnd() {
      alert('倒计时结束')
    },
    handleClick() {
      this.$refs.a.start()
    }
  }
}
</script>

<style scoped>
.container {
  background: #fff;
}
</style>
