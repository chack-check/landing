<script setup lang="ts">
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import { breakpointsTailwind } from '@vueuse/core'

const { locale } = useI18n()

const { data: content } = await useAsyncData(
  'main',
  () => queryContent(`/${locale.value}/main`)
    .only([
      'main_screen',
      'features_screen',
      'guide_screen'
    ])
    .findOne()
)

const breakpoints = useBreakpoints(breakpointsTailwind)

const greaterOrEqualSm = breakpoints.greaterOrEqual('sm')

const controlledSwiper = ref()
</script>

<template>
  <main class="main h-full min-h-screen bg-gray dark:bg-black transition pt-header-b-size-mobile sm:header-b-size-desktop px-4">
    <div class="max-w-screen-lg mx-auto">
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
          {{ content?.main_screen?.description }}
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
          {{ content?.features_screen?.title }}
        </h3>

        <div
          v-show="greaterOrEqualSm"
          class="grid grid-cols-3 max-w-screen-lg gap-16"
        >
          <v-feature-card
            v-for="feature of content?.features_screen?.list"
            :key="feature.id"
            v-bind="feature"
          />
        </div>

        <Swiper
          v-show="!greaterOrEqualSm"
          :modules="[SwiperController]"
          class="max-w-screen-sm w-full"
          :slides-per-view="1"
          :loop="true"
          @swiper="swiper => controlledSwiper = swiper"
        >
          <template #container-start>
            <div class="flex justify-end mb-2">
              <el-button
                :icon="ArrowLeftBold"
                :color="COLORS.PURPLE"
                @click="controlledSwiper?.slidePrev()"
              />
              <el-button
                :icon="ArrowRightBold"
                :color="COLORS.PURPLE"
                @click="controlledSwiper?.slideNext()"
              />
            </div>
          </template>

          <SwiperSlide
            v-for="feature of content?.features_screen?.list"
            :key="feature.id"
          >
            <v-feature-card
              class="select-none"
              v-bind="feature"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <el-divider class="el-plus page-divider" />

      <section class="flex flex-col items-center">
        <article class="mb-4 bg-lightGreen rounded-full font-semibold text-12 sm:text-14">
          <h4 class="text-green px-3 py-1">
            {{ content?.guide_screen?.badge }}
          </h4>
        </article>

        <h3 class="text-center text-20 sm:text-42 max-w-screen-md text-black dark:text-gray transition font-extrabold mb-5">
          {{ content?.guide_screen?.title }}
        </h3>
      </section>
    </div>

    <client-only>
      <v-cookie-modal />
    </client-only>
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
