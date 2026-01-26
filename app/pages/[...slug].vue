<template>
  <div>
    <ContentRenderer
      v-if="data"
      :value="data"
    />
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()

  const { data } = await useAsyncData('page-' + route.path, () => {
    return queryCollection('content').path(route.path).first()
  })

  if (!data.value) {
    throw createError({ status: 404, statusText: 'Page not found', fatal: true })
  }

  useHead({
    title: data.value.title
  })
</script>

<style scoped>
  div {
    max-width: 60em;
    margin: auto;
  }
</style>
