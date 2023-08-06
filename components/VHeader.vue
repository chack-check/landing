<script setup lang="ts">
import MoonIcon from 'assets/icons/moon.svg?component'
import SunIcon from 'assets/icons/sun.svg?component'


const isDark = useDark({
  // @ts-ignore
  disableTransition: false
})

const { y } = useWindowScroll()
const { height } = useWindowSize()

const headerSeparate = computed(() => y.value > height.value / 6)
</script>

<template>
  <header class="header w-full sticky top-0 left-0 z-[100] px-2 transition">
    <div
      class="bg-transparent wrapper flex justify-between items-center max-w-screen-lg mx-auto p-3 sm:p-6 transition rounded-b-lg"
      :class="{'separate': headerSeparate}"
    >
      <div class="flex flex-row items-center">
        <ClientOnly>
          <el-switch
            v-model="isDark"
            class="el-plus theme-switcher mr-5"
            :inactive-icon="SunIcon"
            :active-icon="MoonIcon"
            size="large"
            inline-prompt
            :aria-label="$t('a11y.buttons.switch-theme')"
          />
        </ClientOnly>

        <v-locale-switcher />
      </div>

      <div>
        <el-button
          link
          class="el-plus btn link purple base-font base-padding"
          :aria-label="$t('buttons.sign-in')"
        >
          {{ $t("buttons.sign-in") }}
        </el-button>

        <el-button
          :color="COLORS.PURPLE"
          class="el-plus btn base-font base-padding"
          :aria-label="$t('buttons.sign-up')"
        >
          {{ $t("buttons.sign-up") }}
        </el-button>
      </div>
    </div>
  </header>
</template>

<style lang="postcss">
.header {
  block-size: var(--h-header);
}

.wrapper {
  &.separate {
    @apply
      bg-gray700-800
      dark:bg-darkGray800-300
      backdrop-blur
      drop-shadow-lg
      transition;
  }
}
</style>
