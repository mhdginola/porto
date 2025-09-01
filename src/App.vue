<template>
  <div class="container py-4">
    <button class="btn btn-outline-primary" @click="toggleTheme">
      {{ t('themeToggle') }} {{ theme === 'light' ? t('dark') : t('light') }}
    </button>
    <!-- Language Switcher -->
    <select class="form-select w-auto" @change="changeLang($event.target.value)">
      <option value="en">English</option>
      <option value="id">Bahasa Indonesia</option>
    </select>
    <h1>{{ t('welcome') }}</h1>
  </div>

  <RouterView />
</template>

<script lang="js">
import { defineComponent, ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'app',
  components: {
    RouterView,
  },
  setup() {
    const theme = ref('light');

    // Toggle theme
    function toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    }

    // Ensure default theme on mount
    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    })

    const { t, locale } = useI18n()

    function changeLang(lang) {
      locale.value = lang
    }

    return {
      toggleTheme,
      theme,
      changeLang,
      t,
    }
  },
})
</script>

<style></style>
