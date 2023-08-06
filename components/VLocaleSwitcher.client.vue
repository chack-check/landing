<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';
import { breakpointsTailwind } from '@vueuse/core'

const buttonRef = ref()
const isDark = useDark({
  // @ts-ignore
  disableTransition: false
})

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const breakpoints = useBreakpoints(breakpointsTailwind)
const greaterOrEqualSm = breakpoints.greaterOrEqual('sm')

const [switchDialog, toggleSwitchDialog] = useToggle(false)

watch(greaterOrEqualSm, (state) => {
  if (state && switchDialog.value) toggleSwitchDialog(false);
})
</script>

<template>
  <div>
    <button
      ref="buttonRef"
      class="uppercase select-none text-violet text-14 sm:text-18 font-semibold"
      @click="() => {
        !greaterOrEqualSm && toggleSwitchDialog(true)
      }"
    >
      {{ locale }}
    </button>

    <el-popover
      v-if="greaterOrEqualSm"
      :virtual-ref="buttonRef"
      :effect="isDark ? 'dark' : 'light'"
    >
      <ul class="space-y-2 w-full">
        <li
          v-for="({ code, name }, idx) of (locales as LocaleObject[])"
          :key="idx"
          class="select-none w-full"
        >
          <NuxtLink
            class="
              px-3
              py-1
              hover:bg-violet-100
              hover:text-violet
              block
              cursor-pointer
              rounded-md
              capitalize
              text-16
              transition
            "
            :class="[code === locale && 'bg-violet-100 text-violet pointer-events-none']"
            :to="switchLocalePath(code)"
          >
            {{ name }}
          </NuxtLink>
        </li>
      </ul>
    </el-popover>

    <el-dialog v-model="switchDialog" append-to-body modal-class="el-plus modal skiny">
      <ul class="space-y-2 w-full">
        <li
          v-for="({ code, name }, idx) of (locales as LocaleObject[])"
          :key="idx"
          class="select-none w-full text-black dark:text-gray"
        >
          <NuxtLink
            class="
              p-3
              hover:bg-violet-100
              hover:text-violet
              block
              cursor-pointer
              rounded-md
              text-center
              font-semibold
              capitalize
              text-16
              transition
            "
            :class="[code === locale && 'bg-violet-100 text-violet']"
            :to="switchLocalePath(code)"
          >
            {{ name }}
          </NuxtLink>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<style lang="postcss"></style>
