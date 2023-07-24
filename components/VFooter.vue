<script setup lang="ts"></script>

<template>
  <footer class="px-4">
    <div class="footer bg-violet grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center rounded-[10px] px-8 sm:px-12 py-10 sm:py-16 max-w-screen-lg mx-auto">
      <section>
        <h2 class="text-20 sm:text-32 font-bold text-white mb-2">
          {{ $t("footer.title") }}
        </h2>

        <p class="text-16 sm:text-18 text-violet800">
          {{ $t("footer.subtitle") }}
        </p>
      </section>

      <div class="justify-self-end w-full">
        <FormEmailSubscribe />
      </div>
    </div>
  </footer>
</template>

<style lang="postcss">
.footer {
  background-image: url('/assets/images/wave.png');
  background-position: right top;
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
