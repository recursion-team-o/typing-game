<script setup lang="ts">
import HomeLeftDialog from "../components/HomeLeftDialog.vue";
import { ref } from "vue";

let showLeftDialog = ref<boolean>(false);
const openDialog = ():void => {
  showLeftDialog.value = true;
};
const closeDialog = ():void => {
  showLeftDialog.value = false;
};
</script>

<template>
  <div class="flex justify-center items-center w-1/2 h-full">
    <div class="flex flex-col justify-center items-center max-w-md w-10/12 bg-gray-100 border border-gray-900 border-opacity-60 rounded-lg shadow-lg">
      <h3 class="py-6 font-semibold text-2xl">レベル別練習</h3>
      <div class="relative inline-block w-7/12 mb-4 text-gray-700">
        <select
          class="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline"
          v-model="selectTestLang">
          <option disabled value="">言語を選択してください</option>
          <option value="1">test1</option>
          <option value="2">test2</option>
          <option value="3">test3</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg  class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
              fill-rule="evenodd">
            </path>
          </svg>
        </div>
      </div>
      <div class="relative inline-block w-7/12 my-2 text-gray-700">
        <select class="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline"
          v-model.number="selectTestLevel">
          <option disabled value="">レベルを選んでください</option>
          <option value="1">test1</option>
          <option value="2">test2</option>
          <option value="3">test3</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
              fill-rule="evenodd">
            </path>
          </svg>
        </div>
      </div>
      <div class="w-10/12 my-4 flex space-x-2 justify-center">
        <button
          @click="openDialog()"
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transiton duration-150 ease-in-out">START</button>
      </div>
    </div>
  </div>
  <HomeLeftDialog
    :showLeftDialog="showLeftDialog"
    @closeDialog="closeDialog()"
  />
</template>
