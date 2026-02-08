<template>
  <div>
    <h1>{{ error.status }}</h1>
    <p>{{ error.message ?? error.statusText }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app'

  defineProps<{ error: NuxtError }>()
</script>

<style scoped>
  div {
    margin-top: 50dvh;
    translate: 0 -50%;
    text-align: center;
  }
</style>
