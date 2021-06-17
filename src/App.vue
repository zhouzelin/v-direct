<template>
  <div v-infiniteScroll="callbck" style="height: 200px;" :infinite-scroll-distance="20">
    <ul>
      <li v-for="item in count" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 20
    }
  },
  methods: {
    callbck(e) {
      if (this.count <= 100) {
        this.count += 2
      }
    }
  }
}
</script>
