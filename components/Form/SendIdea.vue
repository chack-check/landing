<script setup lang="ts">
const isDark = useDark({
  // @ts-ignore
  disableTransition: false
})

const onSubmit = () => {
  alert('Request');
}
</script>

<template>
  <FormKit
    type="form"
    :actions="false"
    :config="{ validationVisibility: 'submit' }"
    :incomplete-message="false"
    @submit="onSubmit"
  >
    <div class="grid grid-cols-1 gap-4 items-stretch">
      <FormKit
        type="email"
        :label="$t('forms.labels.email')"
        outer-class="formkit-theme input with-icon"
        messages-class="mt-2 text-error sm:max-w-[300px]"
        validation="email|required"
        name="email"
        placeholder="name@example.com"
      />

      <FormKit
        type="textarea"
        rows="8"
        :label="$t('forms.labels.idea')"
        outer-class="formkit-theme input"
        messages-class="mt-2 text-error sm:max-w-[300px]"
        validation="required"
        name="message"
        :placeholder="$t('forms.placeholder.text')"
      />

      <el-button
        class="!h-auto !px-8 el-plus btn base-font !py-3"
        :color="isDark ? COLORS.DARK_BLUE : COLORS.PRIMARY_BLUE"
        :aria-label="$t('a11y.buttons.email')"
        native-type="submit"
      >
        {{ $t("buttons.subscribe") }}
      </el-button>
    </div>
  </FormKit>
</template>
