<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

function login() {
  // TODO: Ganti dengan validasi backend
  if (username.value === 'pemilih' && password.value === '1234') {
    router.push({ name: 'Vote' });
  } else {
    alert('Username atau password salah.');
  }
}
</script>
