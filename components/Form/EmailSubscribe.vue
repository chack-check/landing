<script setup lang="ts">
</script>

<template>
  <FormKit
    type="form"
    :actions="false"
  >
    <div class="form gap-4">
      <FormKit
        type="email"
        validation="required|email|ends_with:.edu"
        :placeholder="$t('forms.placeholder.email')"
      />

      <el-button>
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
