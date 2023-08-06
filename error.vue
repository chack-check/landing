<script setup lang="ts">
useDark();

const localePath = useLocalePath()

const handleError = () => clearError({ redirect: localePath('/') })
</script>

<template>
  <div class="bg-black min-bs-screen grid place-content-center">
    <article>
      <h1 class="error-title text-center font-bold">
        404
      </h1>

      <section class="w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <h2 class="error-description text-16 sm:text-18 font-semibold text-center">
          {{ $t("404.description") }}
        </h2>

        <el-button :color="COLORS.PURPLE" class="el-plus btn base-font base-padding sm:justify-self-end justify-self-center" @click="handleError">
          {{ $t("buttons.go-to-back") }}
        </el-button>
      </section>
    </article>
  </div>
</template>

<style lang="postcss" scoped>
.error-title {
  font-size: 30vmin;

  background-image: linear-gradient(90deg in oklch, #00B3EE, #C200AF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.error-description {
  background-image: linear-gradient(90deg in oklch, #C200AF, #00B3EE);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
