<template>
  <view>
    <view @tap="handleTap">FOO</view>
    <Bar />
    <image src="@/assets/toys-statistics/box.png" />
        <RawTextarea
      v-model="content"
      @input="onInput"
      @focus="handleFocus"
      placeholder-class="very-good"
      placeholder="haha"
      class="ok"
    />
  </view>
</template>

<script>
import Bar from './bar.vue'
import RawTextarea from '../../components/raw-textarea.vue'


export default {
  components: {
    Bar,
    RawTextarea
  },

  data() {
    return {
      content: ''
    }
  },

  mounted() {
    console.log('foo')
  },

  methods: {
    onInput(e) {
      console.log(e)
    },
    handleTap() {
      // this.$emit('something')
    },
    handleFocus() {
      console.log('handle focus')
    }
  },

  watch: {
    content() {
      console.log('content changed', this.content)
    }
  }
}
</script>


<style lang="scss">
.very-good {
  color: yellow;
}
</style>