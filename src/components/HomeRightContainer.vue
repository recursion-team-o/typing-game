<script setup lang="ts">
import MyCodeDialog from "../components/MyCodeDialog.vue";
import { ref, reactive, computed } from "vue";
import { codeStore } from "../stores/code";
import { storeToRefs } from "pinia";

let showMyCodeDialog = ref<boolean>(false);
const code = codeStore();
const { sampleCode } = storeToRefs(code);
let codeStatus = ref<boolean>(false);

const sampleCodeInput = computed({
  get: () => codeStatus.value,
  set: (value: boolean) => (codeStatus.value = value),
});

const openDialog = (): void => {
  if (sampleCode.value == "") {
    sampleCodeInput.value = sampleCode.value == "";
    return;
  }
  showMyCodeDialog.value = true;
};
const closeDialog = (): void => {
  showMyCodeDialog.value = false;
};

let errorClass = reactive({
  error: sampleCodeInput,
});
</script>

<template>
  <div class="flex justify-center items-center w-1/2 h-full">
    <div
      class="flex flex-col justify-center items-center max-w-md w-10/12 bg-gray-100 border border-gray-900 border-opacity-60 rounded-lg shadow-lg relative"
    >
      <div
        v-show="sampleCodeInput"
        class="flex justify-center items-center mb-4 text-sm text-red-700 bg-red-100 rounded-lg text-center absolute z-10 w-10/12 h-1/4 top-2 transition-all duration-200"
        role="alert"
      >
        <svg
          class="inline flex-shrink-0 mr-3 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>
          <span v-show="sampleCodeInput" class="font-medium block"
            >コードをペーストしてください</span
          >
        </div>
      </div>
      <h3 class="py-6 font-semibold text-2xl">自分のソースコード練習</h3>
      <div class="w-7/12 mb-4">
        <textarea
          @change="sampleCodeInput = false"
          :class="errorClass"
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
.error {
  @apply bg-red-50 border-2 border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 transition-all duration-200 placeholder-red-700;
}
</style>
