<script setup lang="ts">
import { timerStore } from "../stores/timer.ts";
import { storeToRefs } from "pinia";

const timer = timerStore();
const { getDurationString, getMinString, getSecString, getPointMsec } =
  storeToRefs(timer);
const { startTimer, stopTimer, resetTimer } = timer;
</script>

<template>
  <div class="flex items-center justify-center border bg-gray-200 w-3/12 h-24">
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
    <div class="flex flex-col justify-center items-center">
      <button
        class="border w-24 mb-2 bg-red-200 rounded-lg uppercase shadow hover:border-red-400"
        @click="startTimer()"
      >
        start
      </button>
      <button
        class="border w-24 mb-2 bg-blue-200 rounded-lg uppercase shadow hover:border-blue-400"
        @click="stopTimer()"
      >
        stop
      </button>
      <button
        class="border w-24 bg-purple-400 rounded-lg uppercase shadow hover:border-blue-400"
        @click="resetTimer()"
      >
        reset
      </button>
    </div>
  </div>
</template>
