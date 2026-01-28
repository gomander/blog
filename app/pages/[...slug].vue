<template>
  <main>
    <ContentRenderer
      v-if="data"
      :value="data"
    />
  </main>
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
    title: data.value.title,
    meta: [{ name: 'description', content: data.value.description }]
  })
</script>

<style scoped>
  main {
    max-width: 60em;
    margin: auto;
  }
</style>
