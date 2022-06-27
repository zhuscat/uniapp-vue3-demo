<template>
  <view>
    <view @tap="handleTap">FOO</view>
    <Bar />
    <image src="@/assets/toys-statistics/box.png" />
  </view>
</template>

<script>
import Bar from './bar.vue'

export default {
  components: {
    Bar
  },

  mounted() {
    console.log('foo')
  },

  methods: {
    handleTap() {
      // this.$emit('something')
    }
  }
}
</script>