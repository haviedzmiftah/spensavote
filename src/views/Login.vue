<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-4 text-center">Login Pemilih</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Username</label>
          <input
            v-model="username"
            type="text"
            class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring"
            placeholder="Masukkan username"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring"
            placeholder="Masukkan password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
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
  // TODO: ganti pengecekan ini dengan API call ke backend
  if (username.value === 'pemilih' && password.value === '1234') {
    router.push({ name: 'Vote' });
  } else {
    alert('Username atau password salah.');
  }
}
</script>