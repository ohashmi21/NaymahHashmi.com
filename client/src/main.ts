import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useCategories } from '@/stores/Projects'

import App from './App.vue'
import router from './router'
import CategoriesService from './services/CategoriesService'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const categoriesStore = useCategories()
CategoriesService.getCategories().then((res) => (categoriesStore.categories = res))
