<template>
  <div class="home">
    <div class="container">
      <div>{{count}}</div>
      <button @click="count++">click me</button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'Home',
  setup () {
    const count = ref(0)
    return {
      count
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
    //padding: 50px 0 84px;
    position: relative;
  }
}

</style>
