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
      type: [Boolean, String],
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