<script setup lang="ts">
import MyCodeDialog from "../components/MyCodeDialog.vue";
import { ref, reactive, computed } from "vue";
import { codeStore } from "../stores/code";
import { storeToRefs } from "pinia";

let showMyCodeDialog = ref<boolean>(false);
const code = codeStore();
const { sampleCode, checkSampleCode } = storeToRefs(code);
let codeStatus = ref<boolean>(false);
const sampleCodeInput = computed({
  get: () => codeStatus.value,
  set: (value: boolean) => (codeStatus.value = value),
});
const checkInput = (check: any): boolean => {
  if (!check.value) return true;
  else return false;
};
const openDialog = (): void => {
  if (checkInput(checkSampleCode)) {
    sampleCodeInput.value = checkInput(checkSampleCode);
    alert("必須項目を入力してください");
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
      class="flex flex-col justify-center items-center max-w-md w-10/12 bg-gray-100 border border-gray-900 border-opacity-60 rounded-lg shadow-lg"
    >
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
