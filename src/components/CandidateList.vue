<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Pilih Kandidat</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="cand in candidates"
        :key="cand.id"
        class="bg-white rounded-lg shadow p-4 text-center"
      >
        <img
          :src="cand.photo"
          :alt="cand.name"
          class="w-32 h-32 object-cover rounded-full mx-auto cursor-pointer"
          @click="selectCandidate(cand)"
        />
        <h3 class="mt-2 text-lg font-semibold">{{ cand.name }}</h3>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="selected"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
          <button
            @click="selected = null"
            class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          >&times;</button>

          <h3 class="text-xl font-bold mb-2">{{ selected.name }}</h3>
          <p class="font-semibold">Visi:</p>
          <p class="mb-4">{{ selected.vision }}</p>

          <p class="font-semibold">Misi:</p>
          <ul class="list-disc list-inside">
            <li v-for="(m, idx) in selected.missions" :key="idx">{{ m }}</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>