<script setup lang="ts">
interface Props {
  top_title: string;
  title: string;
  description: string;
  sublist: Array<{ id: number, title: string }>
  reverse?: boolean;
}

const props = defineProps<Props>()
</script>

<template>
  <article class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-16">
    <section class="text-start">
      <h3 class="text-violet text-16 sm:text-20 font-AD mb-2 transition">
        {{ props.top_title }}
      </h3>

      <h2 class="text-18 sm:text-32 font-bold text-black dark:text-gray mb-1.5 transition">
        {{ props.title }}
      </h2>

      <p class="text-black600 dark:text-gray700-600 text-14 sm:text-20 font-regular mb-4 transition">
        {{ props.description }}
      </p>

      <ul>
        <li
          v-for="({ id, title }) of props.sublist"
          :key="id"
          class="text-black600 dark:text-gray700 mb-2 text-14 sm:text-20 transition flex items-center"
        >
        <nuxt-icon name="check-mark" filled class="inline-block mr-2 card-icon" />
        <span>{{ title }}</span>
      </li>
      </ul>
    </section>

    <figure class="w-full aspect-video sm:aspect-[4/3] bg-gray rounded-[10px] bg-white dark:bg-darkGray transition" :class="{ 'order-first': reverse }" />
  </article>
</template>

<style lang="postcss">
.card-icon.nuxt-icon svg {
  inline-size: 10px;

  @media (width >= 640px) {
    inline-size: 14px;
  }
}
</style>
