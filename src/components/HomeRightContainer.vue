<script setup lang="ts">
import MyCodeDialog from "../components/MyCodeDialog.vue";
import type{ User } from "../views/HomeView.vue";
import { ref } from "vue";
import { codeStore } from "../stores/code";
import { storeToRefs } from "pinia";

defineProps<{
  user: User;
}>();
let showMyCodeDialog = ref<boolean>(false);
const code = codeStore();
const { sampleCode } = storeToRefs(code);
const openDialog = (): void => {
  showMyCodeDialog.value = true;
};
const closeDialog = (): void => {
  showMyCodeDialog.value = false;
};
</script>

<template>
  <div class="flex justify-center items-center w-1/2 h-full">
    <div
      class="flex flex-col justify-center items-center max-w-md w-10/12 bg-gray-100 border border-gray-900 border-opacity-60 rounded-lg shadow-lg"
    >
      <h3 class="py-6 font-semibold text-2xl">自分のソースコード練習</h3>
      <div class="w-7/12 mb-4">
        <textarea
          v-model.trim="sampleCode"
          class="mycode-textarea"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="コードをペーストしてください"
        ></textarea>
      </div>
      <div class="w-10/12 my-4 flex space-x-2 justify-center">
        <button @click="openDialog()" type="button" class="btn bg-blue-600">
          START
        </button>
      </div>
    </div>
  </div>
  <MyCodeDialog
    :user="user"
    :showMyCodeDialog="showMyCodeDialog"
    @closeDialog="closeDialog"
  />
</template>

<style scoped>
.btn {
  @apply inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md;
}
.mycode-textarea {
  @apply block w-full px-3 py-1.5 h-24 text-base font-normal text-gray-700 placeholder-gray-400 bg-white bg-clip-padding border rounded-lg appearance-none m-0;
}
</style>
