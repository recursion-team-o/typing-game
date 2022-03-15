<script setup lang="ts">
import HomeRightDialog from "../components/HomeRightDialog.vue";
import { ref } from "vue";

let showRightDialog = ref<boolean>(false);
const openDialog = ():void => {
  showRightDialog.value = true;
};
const closeDialog = ():void => {
  showRightDialog.value = false;
};
</script>

<template>
  <div class="flex justify-center items-center w-1/2 h-full">
    <div class="flex flex-col justify-center items-center max-w-md w-10/12 bg-gray-100 border border-gray-900 border-opacity-60 rounded-lg shadow-lg">
      <h3 class="py-6 font-semibold text-2xl">自分のソースコード練習</h3>
      <div class="w-7/12 mb-4">
        <textarea
          class="block w-full px-3 py-1.5 h-24 text-base font-normal text-gray-700 placeholder-gray-400 bg-white bg-clip-padding border rounded-lg appearance-none focus:shadow-outline transition ease-in-out m-0"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="コードをペーストしてください"
        ></textarea>
      </div>
      <div class="w-10/12 my-4 flex space-x-2 justify-center">
        <button
          @click="openDialog()"
        >
        </button>
      </div>
    </div>
  </div>
  <HomeRightDialog
    :showRightDialog="showRightDialog"
    @closeDialog="closeDialog()"
  />
</template>
