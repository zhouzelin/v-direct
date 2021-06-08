<template>
  <div :style="{height: '400px'}" v-watermarker="'华锐金融权限所有'">
    <input name="666" v-permission="'4'">
  </div>
</template>

<script>
export default {
  created() {
    this.$zery.setOption({
      permission: {
        list: ['1', '2', '4']
      }
    })
  },
  methods: {
    success(v) {
      alert(v)
    }
  }
}
</script>
