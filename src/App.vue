<template>
  <div>
    <div v-formatter="'0a'" formatter-value="2012090156"></div>
    <div v-formatter="'YYYY年MM月DD日HH时mm分ss秒'" formatter-value="20191122090856"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    success(v) {
      alert(v)
    }
  }
}
</script>
