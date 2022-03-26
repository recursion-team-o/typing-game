<script setup lang="ts">
import { timerStore } from "../stores/timer";
import { storeToRefs } from "pinia";

const timer = timerStore();
const { getMinString, getSecString, getPointMsec } = storeToRefs(timer);
const { startTimer, stopTimer, resetTimer } = timer;
</script>

<template>
  <div class="flex items-center justify-center border bg-gray-200 w-3/12 h-12">
    <div class="flex justify-center items-center h-10 mx-auto">
      <p class="text-black text-2xl w-[33px]">
        {{ getMinString }}
      </p>
      <span class="text-black text-2xl">:</span>
      <p class="text-black text-2xl w-[33px]">
        {{ getSecString }}
      </p>
      <span class="text-black text-2xl">.</span>
      <p class="text-black text-2xl w-[33px]">
        {{ getPointMsec }}
      </p>
    </div>
  </div>
</template>
