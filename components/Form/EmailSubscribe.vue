<script setup lang="ts">
</script>

<template>
  <FormKit
    type="form"
    :actions="false"
  >
    <div class="form gap-4 items-stretch">
      <FormKit
        type="email"
        input-class="w-full h-full bg-darkBlue rounded-sm border border-solid border-violet600 py-3 px-4 text-white text-14 sm:text-16"
        inner-class="h-full"
        wrapper-class="h-full"
        messages-class="static sm:absolute mt-2 text-error sm:max-w-[300px]"
        validation="email"
        name="email"
        :placeholder="$t('forms.placeholder.email')"
      />

      <el-button
        class="!h-auto !text-violet !px-8 el-plus btn base-font !py-3"
        :color="COLORS.WHITE"
        :aria-label="$t('a11y.buttons.email')"
      >
        {{ $t("buttons.subscribe") }}
      </el-button>
    </div>
  </FormKit>
</template>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 1fr;

  @media (width >= 640px) {
    grid-template-columns: 1fr auto;
  }
}
</style>
