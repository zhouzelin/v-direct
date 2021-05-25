<template>
  <div v-copy="{text: '666', success}">666</div>
</template>

<script>
export default {
  methods: {
    success(v) {
      alert(v)
    }
  }
}
</script>
