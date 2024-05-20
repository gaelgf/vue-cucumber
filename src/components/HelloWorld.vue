<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style lang="scss" scoped>
.hello {
  h1 {
    color: blue;
  }
}
</style>
