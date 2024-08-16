import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FireworksPage from '../views/FireworksPage.vue';
import BirthdayNotes from '../views/BirthdayNotes.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fireworks',
      name: 'fireworks',
      component: FireworksPage
    },
    {
      path: '/birthday-notes',
      name: 'notes',
      component: BirthdayNotes
    },
  ]
})

export default router
