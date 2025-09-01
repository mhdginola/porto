import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome',
    description: 'This is a multi-language app.',
    button: 'Click Me',
    save: 'Save',
    dark: 'Dark',
    light: 'Light',
    themeToggle: 'Switch Theme',
  },
  id: {
    welcome: 'Selamat Datang',
    description: 'Ini adalah aplikasi multi-bahasa.',
    button: 'Klik Saya',
    save: 'Simpan',
    dark: 'Gelap',
    light: 'Terang',
    themeToggle: 'Ganti Tema',
  },
}

const i18n = createI18n({
  locale: 'en', // default language
  fallbackLocale: 'en',
  messages,
})

export default i18n
