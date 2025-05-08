import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import CandidateList from '../components/CandidateList.vue'
import AdminDashboard from '../views/AdminDashboard.vue'; // kamu buat file ini nanti

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/vote', name: 'Vote', component: CandidateList },
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router