<template>
  <view class="content">
    <view>HAHA</view>
    <Foo />
    <image src="@/assets/toys-statistics/box.png" />
  </view>
</template>

<script>
import Foo from './foo.vue'

export default {
  components: {
    Foo
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
