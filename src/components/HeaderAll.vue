<script setup lang="ts">
import StopWatch from "./StopWatch.vue";
</script>

<template>
  <div class="flex px-4 py-4 bg-gray-400 items-center justify-between">
    <div class="px-2 font-bold text-2xl">CODE-TYPING</div>
    <StopWatch v-show="$route.name == 'game'" />
    <div class="px-2 flex items-center">
      <RouterLink class="px-2" to="/">ホーム画面</RouterLink>
      <RouterLink class="px-2" to="/about">説明画面</RouterLink>
      <RouterLink class="px-2" to="/game">ゲーム画面</RouterLink>
      <RouterLink class="px-2" to="/result">結果画面</RouterLink>
      <p class="pl-3">VOL</p>
      <img class="pr-4 h-6" src="../image/vol1.png" />
      <p class="pl-2">BGMを選んでください</p>
      <img class="h-6" src="../image/head.png" />
    </div>
  </div>
</template>
