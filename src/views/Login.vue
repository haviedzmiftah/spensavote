<template>
  <div class="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
    <div class="card shadow-sm p-4" style="width: 100%; max-width: 400px;">
      <h2 class="text-center mb-4 text-primary fw-bold">Login Pemilih</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="form-control"
            placeholder="Masukkan username"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="form-control"
            placeholder="Masukkan password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
    <div class="align-items-center m-2 small text-muted link-underline-opacity-0">
      <a href="#" @click="Home">Home</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const username = ref('');
const password = ref('');

async function login() {
  axios.post('http://localhost:8000/login.php', {
  username: username.value,
  password: password.value,
})
.then(response => {
  const res = response.data;
  if (res.success) {
    if (res.role === 'pemilih') {
      router.push({ name: 'Vote' });
    } else {
      alert('Login berhasil, tapi belum ada halaman admin.');
    }
  } else {
    alert(res.message || 'Login gagal.');
  }
})
.catch(() => {
  alert('Terjadi kesalahan menghubungi server.');
});
}

function Home() {
  router.push({ name: 'Landing' });
}
</script>
