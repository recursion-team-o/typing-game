<script setup lang="ts">
import { timerStore } from "../stores/timer";
import { storeToRefs } from "pinia";

const timer = timerStore();
const { getMinString, getSecString, getPointMsec } = storeToRefs(timer);
</script>

<template>
  <div
    class="flex items-center justify-center border bg-gray-200 rounded-lg h-[35px]"
  >
    <div class="flex justify-center items-center text-xl p-2">
      <p class="text-black leading-none w-[25px]">
        {{ getMinString }}
      </p>
      <span class="text-black pl-1.5 pr-0.5 leading-none">:</span>
      <p class="text-black leading-none w-[25px]">
        {{ getSecString }}
      </p>
      <span class="text-black pl-1.5 pr-0.5 leading-none">.</span>
      <p class="text-black leading-none w-[25px]">
        {{ getPointMsec }}
      </p>
    </div>
  </div>
</template>
