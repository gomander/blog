<template>
  <div
    class="alert"
    :style="{
      borderColor: color,
      color: `oklch(from ${color} 0.9 calc(c * 0.1) h)`,
      backgroundColor: `oklch(from ${color} calc(l * 0.3) c h)`
    }"
  >
    <Icon v-if="icon" :name="icon" />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const {
    color = 'orange',
    icon
  } = defineProps<{ color: string, icon?: string }>()
</script>

<style scoped>
  .alert {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0 1em;
    border: 2px solid;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    max-width: max-content;
    margin: 1em 0;
  }

  .alert:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgb(0 0 0 / 0.15);
  }
</style>
