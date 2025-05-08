import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import CandidateList from '../components/CandidateList.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/vote', name: 'Vote', component: CandidateList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router