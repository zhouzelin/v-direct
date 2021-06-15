<template>
  <div :style="{height: '400px'}">
    <input name="666" v-permission="'4'" v-draggable>
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
