<template>
  <div :style="{height: '600px'}">
    <button v-draggable @drag-start="dragStart">复制</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 20,
      a: ''
    }
  },
  methods: {
    copy(v) {
      console.log(v)
    },
    longpress(e) {
      alert(666)
    },
    dragStart(e) {
      console.log('开始', e)
    },
    dragEnd(e) {
      console.log('结束', e)
    },
    drag(e) {
      console.log('拖动', e)
    }
  }
}
</script>
