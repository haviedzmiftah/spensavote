<template>
  <div class="d-flex flex-column min-vh-100 bg-primary text-white">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent px-4">
      <div class="container-fluid justify-content-between">
        <h1 class="navbar-brand fw-bold fs-3">SpensaVote</h1>
        <router-link to="/login" class="btn btn-outline-light">Login</router-link>
      </div>
    </nav>

    <!-- Header -->
    <header class="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center px-4">
      <h2 class="display-3 fw-bold mb-4">Selamat Datang di <span class="text-warning">SpensaVote</span></h2>
      <p class="lead mb-4" style="max-width: 600px;">
        Platform pemilihan ketua OSIS modern, cepat, dan transparan. Login untuk memulai memilih kandidat favoritmu!
      </p>
      <router-link to="/login" class="btn btn-warning text-dark fw-semibold shadow mt-3">
        Mulai Voting
      </router-link>
    </header>

    <!-- Footer -->
    <footer class="bg-dark bg-opacity-25 text-center p-3 small mt-auto">
      © 2025 SpensaVote. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// Tidak ada logic tambahan
</script>

<style scoped>
/* Untuk background gradasi mirip Tailwind */
.bg-primary {
  background: linear-gradient(to bottom right, #3b82f6, #6366f1);
}
</style>
