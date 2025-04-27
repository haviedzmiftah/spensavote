<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
    <nav class="flex justify-between items-center p-6">
      <h1 class="text-3xl font-extrabold">SpensaVote</h1>
      <div>
        <router-link to="/login" class="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition">Login</router-link>
      </div>
    </nav>
    <header class="flex-grow flex flex-col justify-center items-center text-center px-6">
      <h2 class="text-5xl font-bold mb-4 leading-tight">Selamat Datang di <span class="text-yellow-300">SpensaVote</span></h2>
      <p class="max-w-xl mb-8">Platform pemilihan ketua OSIS modern, cepat, dan transparan. Login untuk memulai memilih kandidat favoritmu!</p>
      <router-link to="/login" class="mt-4 px-6 py-3 bg-yellow-300 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition">Mulai Voting</router-link>
    </header>
    <footer class="p-4 text-center text-sm bg-black bg-opacity-20">
      © 2025 SpensaVote. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// Komponen pasif, tidak perlu logic tambahan
</script>

<style scoped>
/* Bisa tambah animasi ringan */
</style>