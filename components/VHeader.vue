<script setup lang="ts">
const isDark = useDark({
  // @ts-ignore
  disableTransition: false
})
</script>

<template>
  <header class="w-full p-6 fixed top-0 left-0">
    <div class="flex justify-between items-center max-w-screen-lg mx-auto">
      <ClientOnly>
        <el-switch
          v-model="isDark"
        />
      </ClientOnly>

      <div>
        <el-button>
          {{ $t("buttons.sign-in") }}
        </el-button>

        <el-button>
          {{ $t("buttons.sign-up") }}
        </el-button>
      </div>
    </div>
  </header>
</template>
