<template>
  <view>
    <view>FOO</view>
    <Bar />
  </view>
</template>

<script>
import Bar from './bar.vue'

export default {
  props: {
    initialState: {
      type: [String, Boolean],
      default: ''
    }
  },

  components: {
    Bar
  },

  mounted() {
    console.log('initialState', this.initialState)
    console.log('foo')
  }
}
</script>