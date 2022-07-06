<template>
  <div class="title">
    {{ getA() }}
    <div @click="handleClick">CLICK</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
    }
  },

  computed: {
    getA() {
      const a = this.a
      return function () {
        return a + this.b
      }
    }
  },

  methods: {
    handleClick() {
      this.a = Math.random()
    },
  }
}
</script>

<style>
.title {
  color: #000;
}
</style>
