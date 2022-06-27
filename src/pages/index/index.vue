<template>
  <view class="content">
    <Foo v-if="showFoo" :item="item" @something="doSomething" />
    <textarea
      :value="content"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
  </view>
</template>

<script>
import Foo from './foo.vue'

export default {
  components: {
    Foo
  },

  data() {
    return {
      item: {},
      noShowFoo: false,
      content: ''
    }
  },

  computed: {
    showFoo() {
      return this.item.showFoo
    },
  },

  onLoad() {
    setTimeout(() => {
      this.item = {
        showFoo: true
      }
    }, 2000)
  },

  methods: {
    onInput(e) {
      this.content = e.target.value
      console.log('content content')
    },

    onBlur() {
      console.log('blur')
    },

    onFocus() {
      console.log('focus')
    },

    doSomething() {
      console.log('do something')
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
