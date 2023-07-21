<script setup lang="ts">
import MoonIcon from 'assets/icons/moon-icon.svg?component'
import SunIcon from 'assets/icons/sun-icon.svg?component'

const isDark = useDark({
  // @ts-ignore
  disableTransition: false
})
</script>

<template>
  <header class="header w-full fixed top-0 left-0">
    <div class="flex justify-between items-center max-w-screen-lg mx-auto backdrop-blur-sm p-3 sm:p-6">
      <ClientOnly>
        <el-switch
          v-model="isDark"
          class="el-plus theme-switcher"
          :inactive-icon="SunIcon"
          :active-icon="MoonIcon"
          size="large"
          inline-prompt
        />
      </ClientOnly>

      <div>
        <el-button
          link
          class="el-plus btn link purple"
        >
          {{ $t("buttons.sign-in") }}
        </el-button>

        <el-button :color="COLORS.PURPLE">
          {{ $t("buttons.sign-up") }}
        </el-button>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  block-size: var(--h-header);
}
</style>
