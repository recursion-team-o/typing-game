<script setup lang="ts">
import GamePage from "@/components/GamePage.vue";
import { timerShowStore } from "../stores/timerShow";

const timerShow = timerShowStore();
timerShow.setShowState();
</script>

<template>
  <div class="top">
    <GamePage />
  </div>
</template>
