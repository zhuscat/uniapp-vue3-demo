<template>
  <view class="content">
    <button @tap="handleToggle">toggle</button>
    <view v-for="item in items" :key="item" @tap="handleItemTap(item)">{{ item }}</view>
  </view>
</template>

<script>
import Foo from './foo.vue'

export default {
  components: {
    Foo,
  },

  data() {
    return {
      item: {},
      content: '',
      items: [],
      flag: false,
    }
  },

  methods: {
    handleItemTap(item) {
      console.log(item)
    },

    handleToggle() {
      this.flag = !this.flag
      console.log('handle toggle')
      if (this.flag) {
        this.items = [1, 2, 3, 4, 5, 6]
      } else {
        this.items = [2, 3, 1, 4, 6, 5]
      }
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

.hey {
  color: blue;
}

.good {
  color: red;
}

.very-good {
  color: yellow;
}
</style>
