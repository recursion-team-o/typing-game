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
  <div
    class="p-4 mx-3 lg:w-2/5 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 relative"
  >
    <div
      v-show="sampleCodeInput"
      class="w-10/12 flex justify-center items-center text-sm text-red-700 bg-red-100 rounded-lg text-center absolute z-10 top-4 p-2 transition-all duration-200"
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
    <div class="flex items-center justify-center">
      <span
        class="bg-gray-300 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >BETA
      </span>
      <h5 class="text-2xl font-bold text-gray-900 text-center">Myコード練習</h5>
    </div>
    <form class="space-y-6" action="#">
      <div></div>
      <div>
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Your code</label
        >
        <textarea
          @change="sampleCodeInput = false"
          :class="errorClass"
          v-model.trim="sampleCode"
          id="message"
          rows="6"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a code"
        ></textarea>
      </div>

      <div class="flex justify-center">
        <button
          @click="openDialog()"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          START
        </button>
      </div>
    </form>
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
