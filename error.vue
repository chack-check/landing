<script setup lang="ts">
interface Props {
  error: object
}

const props = defineProps<Props>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <article>
    <button @click="handleError">Clear errors</button>
  </article>
</template>
