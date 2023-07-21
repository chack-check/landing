<script setup>

</script>

<template>
  <main class="main h-full min-h-screen bg-gray dark:bg-black transition pt-header-b-size-mobile sm:header-b-size-desktop px-4">
    <div class="pt-24 mx-auto flex flex-col items-center">
      <section class="flex flex-row items-center flex-wrap justify-center mb-4">
        <h1
          class="
            text-32
            sm:text-52
            font-extrabold
            text-black
            dark:text-gray
            transition
            mr-3.5
            text-center
          "
        >
          {{ $t("layouts.title") }}
        </h1>

        <nuxt-icon
          name="logo"
          filled
          class="mg-0 icon lg"
        />
      </section>

      <h2 class="max-w-3xl text-center text-black600 dark:text-gray700 text-16 sm:text-20 transition mb-10">
        {{ $t("content.title-text") }}
      </h2>

      <el-button
        class="mb-10"
        :color="COLORS.GRAY_500"
        size="large"
      >
        {{ $t("buttons.learn-more") }}
      </el-button>
    </div>

    <div class="w-full max-w-screen-lg transition bg-white dark:bg-darkGray aspect-video mx-auto rounded-lg mb-20" />

    <section class="flex flex-col items-center">
      <h3 class="text-center text-20 sm:text-42 max-w-screen-md text-black dark:text-gray transition font-extrabold mb-5">
        {{ $t("content.second-title") }}
      </h3>
    </section>
  </main>
</template>

<style scoped>
.main {
  background-image: url('images/wave-left.svg'), url('images/wave-right.svg'), url('images/wave-top.svg');
  background-repeat: no-repeat;
  background-size: 15%, 15%, 70%;
  background-position: left top, right top, center top;
}
</style>
