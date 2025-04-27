<template>
  <div class="min-vh-100 d-flex flex-column bg-light">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background: linear-gradient(to right, #3b82f6, #6366f1);">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">SpensaVote</a>
        <button class="btn btn-outline-light ms-auto" @click="logout">
          Logout
        </button>
      </div>
    </nav>

    <!-- Content -->
    <div class="container py-5 flex-grow-1">
      <h2 class="text-center fw-bold text-primary mb-5">Pilih Kandidat</h2>
      <div class="d-flex flex-wrap justify-content-center gap-4">
        <div
          v-for="cand in candidates"
          :key="cand.id"
          class="card kandidat-card text-center shadow-sm p-3"
          @click="selectCandidate(cand)"
        >
          <img
            :src="cand.photo"
            :alt="cand.name"
            class="card-img-top kandidat-img mx-auto"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ cand.name }}</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Detail Kandidat -->
    <transition name="fade">
      <div v-if="selected" class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5);" @click.self="closeModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content animate__animated animate__fadeInDown">
            <div class="modal-header">
              <h5 class="modal-title">{{ selected.name }}</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <p><strong>Visi:</strong></p>
              <p>{{ selected.vision }}</p>

              <p><strong>Misi:</strong></p>
              <ul class="list-group list-group-flush mb-3">
                <li class="list-group-item" v-for="(m, idx) in selected.missions" :key="idx">{{ m }}</li>
              </ul>

              <button class="btn btn-primary w-100" @click="chooseCandidate(selected)">
                Pilih Saya
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-auto">
      © 2025 SpensaVote. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const candidates = ref([
  {
    id: 1,
    name: 'Kandidat A',
    photo: '/images/kandidatA.jpg',
    vision: 'Menjadikan OSIS lebih transparan dan inklusif',
    missions: ['Meningkatkan komunikasi', 'Mengadakan ekstrakurikuler', 'Meningkatkan fasilitas'],
  },
  {
    id: 2,
    name: 'Kandidat B',
    photo: '/images/kandidatB.jpg',
    vision: 'Mendorong kreativitas dan inovasi siswa',
    missions: ['Lomba kreativitas', 'Laboratorium informatika', 'Workshop penulisan'],
  },
]);

const selected = ref(null);

function selectCandidate(cand) {
  selected.value = cand;
}

function closeModal() {
  selected.value = null;
}

function chooseCandidate(cand) {
  alert(`Kamu memilih ${cand.name}!`);
  selected.value = null;
}

function logout() {
  router.push({ name: 'Login' });
}
</script>

<style scoped>
/* Card kandidat */
.kandidat-card {
  width: 220px;
  border-radius: 15px;
  background: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.kandidat-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.kandidat-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

/* Animasi fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Tambahan animasi di modal */
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
</style>
