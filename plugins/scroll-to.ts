import type { DirectiveBinding } from 'vue'

interface Binding {
  id: string,
  offset?: number,
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll', {
    mounted (el, binding: DirectiveBinding<Binding>) {
      if (process.server) return

      const { id, offset = 0 } = binding.value

      const target = document.getElementById(id)

      if (!target) {
        console.error('[V-Scroll]: Invalid target id')

        return
      }

      const yCoord = globalThis.scrollY + target.getBoundingClientRect()?.top

      el.addEventListener('click', () => {
        globalThis.scrollTo({ top: yCoord - offset, behavior: 'smooth' })
      })
    },
    getSSRProps () {
      // Stub
      return {}
    }
  })
})
