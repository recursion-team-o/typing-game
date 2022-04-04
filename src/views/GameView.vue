<script setup lang="ts">
import GamePage from "@/components/GamePage.vue";
import { authStore } from "@/stores/auth";
const auth = authStore();
auth.getAuthState();
</script>

<template>
  <div class="top">
    <GamePage />
  </div>
</template>
