<script setup lang="ts">
const cookieNotification = useLocalStorage('app.cookie_notification', true)
</script>

<template>
  <div class="fixed left-1/2 transform -translate-x-1/2 bottom-2 z-50 px-4 w-full max-w-screen-lg">
    <el-dialog
      v-model="cookieNotification"
      title="Shipping address"
      class="!bg-white dark:!bg-darkGray800 transition"
      modal-class="cookie-modal !rounded-md"
      :lock-scroll="false"
      :close-on-click-modal="false"
      :modal="false"
      :show-close="false"
    >
      <template #header>
        <h3 class="text-black dark:text-white transition font-semibold">
          {{ $t("cookie-modal.title") }}
        </h3>
      </template>

      <p class="mb-3 text-black dark:text-white transition">
        {{ $t("cookie-modal.description") }}
      </p>

      <div>
        <el-button
          :color="COLORS.GREEN"
          @click="cookieNotification = false"
        >
          {{ $t("buttons.accept") }}
        </el-button>

        <el-button :color="COLORS.RED">
          {{ $t("buttons.decline") }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="postcss">
.cookie-modal {
  position: relative !important;

  .el-overlay-dialog {
    position: relative !important;
    margin: 0;
    width: 100%;
  }

  .el-dialog {
    --el-border-radius-small: 8px;

    width: 100%;
    margin: 0;
  }

  .el-dialog__body {
    padding: 0 16px;
    padding-top: 6px;
    padding-bottom: 16px;
  }

  .el-dialog__header {
    padding-top: 16px;
    padding-left: 16px;
    margin-right: 16px;
    padding-bottom: 0;
  }
}
</style>
