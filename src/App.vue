<template>
  <div ref="container" class="container">
    <p>《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？
      欣赏它的歌词——“太阳当空照花儿对我笑/小鸟说早早早/你为什么背上小书包/我要上学校天天不迟到/爱学习爱劳动/长大要为人民立功劳”——一个时代有一个语境，这首歌诞生在那个英雄主义讲求奉献的年代，当时过
      境迁的我们青春不再时，我们的孩子依然会唱着我们那个年代哼唱的这首儿歌，饱含在这简单而质朴的旋律中的是无数老去的孩子们对下一代的殷切期望，即使我们拙于用语言表达自己对他们的无限疼爱。这首歌的曲
      作者段福培很偶然地在如此单调的旋律里把一个个方块字排列组合，成就了经典，也成就了无数老孩子的美好记忆
    </p>
    <button
      v-full-screen:container="flag"
      @enter-full-screen="enterFullScreen"
      @exit-full-screen="exitFullScreen"
    >{{text}}</button>
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
    },
    enterFullScreen() {
      console.log('进入全屏')
      this.flag = false
      this.text = '退出全屏'
    },
    exitFullScreen() {
      console.log('退出全屏')
      this.flag = true
      this.text = '进入全屏'
    }
  }
}
</script>

<style scoped>
.container {
  background: #fff;
}
</style>
