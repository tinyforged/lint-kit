<template>
  <div class="greet">Hello {{ msg }}</div>
</template>

<script setup>
defineOptions({ name: 'HelloWorld' })
const msg = 'World'
</script>

<style scoped>
.greet { color: #333 }
</style>