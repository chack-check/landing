<script setup lang="ts">
const { t, locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const title = computed(() => t('layouts.title'))

const config = inject<{ locale: string }>(Symbol.for('FormKitConfig'))!

watch(locale, v => {
  config.locale = v
}, { immediate: true })
</script>

<template>
  <div>
    <Html
      :lang="head.htmlAttrs?.lang"
      :dir="head.htmlAttrs?.dir"
    >
      <Head>
        <Title>{{ title }}</Title>
        <template
          v-for="link in head.link"
          :key="link.id"
        >
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template
          v-for="meta in head.meta"
          :key="meta.id"
        >
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body class="bg-gray dark:bg-black transition">
        <VHeader />
        <slot />

        <VFooter class="mb-8" />
      </Body>
    </Html>
  </div>
</template>
