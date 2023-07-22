<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  description: string;
}

const props = defineProps<Props>()
</script>

<template>
  <article class="flex flex-col items-center text-center">
    <figure class="bg-violet p-6 sm:p-7 rounded-full mb-4">
      <nuxt-icon
        class="card-icon"
        :name="props.icon"
        filled
      />
    </figure>

    <h3 class="mb-2 dark:text-gray text-black text-18 font-bold transition">
      {{ props.title }}
    </h3>

    <p class="text-14 text-black600 dark:text-gray700 transition">
      {{ props.description }}
    </p>
  </article>
</template>

<style lang="postcss" scoped>
:deep(.card-icon.nuxt-icon) svg {
  inline-size: 18px;
  block-size: 18px;

  @media (width > 640px) {
    inline-size: 20px;
    block-size: 20px;
  }
}
</style>
