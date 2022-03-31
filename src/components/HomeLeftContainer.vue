<script setup lang="ts">
import LevelDialog from "../components/LevelDialog.vue";
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import { userStore } from "../stores/user";

let showLevelDialog = ref<boolean>(false);
const langMenu: string[] = ["JavaScript", "Java"];
const levelMenu: string[] = ["初級", "中級", "上級"];
const user = userStore();
const { lang, level } = storeToRefs(user);

const errorLangObj: {
  text: string;
  show: boolean;
} = reactive({
  text: "言語を選択してください",
  show: false,
});

const errorLevelObj: {
  text: string;
  show: boolean;
} = reactive({
  text: "レベルを選択してください",
  show: false,
});

const langInput = computed({
  get: () => errorLangObj.show,
  set: (value: boolean) => (errorLangObj.show = value),
});

const levelInput = computed({
  get: () => errorLevelObj.show,
  set: (value: boolean) => (errorLevelObj.show = value),
});

const openDialog = (): void => {
  if (lang.value == "" || level.value == "") {
    langInput.value = lang.value == "";
    levelInput.value = level.value == "";

    return;
  }
  showLevelDialog.value = true;
};
const closeDialog = (): void => {
  showLevelDialog.value = false;
};

let errorLangClass = reactive({
  error: langInput,
});
let errorLevelClass = reactive({
  error: levelInput,
});
</script>

<template>
  <div class="flex justify-center items-center w-1/2 h-full">
    <div
      class="flex flex-col justify-center items-center max-w-md w-10/12 bg-gray-100 border border-gray-900 border-opacity-60 rounded-lg shadow-lg relative"
    >
      <div
        v-show="langInput || levelInput"
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
          <span v-show="langInput" class="font-medium block">{{
            errorLangObj.text
          }}</span>
          <span v-show="levelInput" class="font-medium block">{{
            errorLevelObj.text
          }}</span>
        </div>
      </div>
      <h3 class="py-6 font-semibold text-2xl">レベル別練習</h3>
      <div class="relative inline-block w-7/12 mb-4 text-gray-700">
        <select
          @change="langInput = false"
          :class="errorLangClass"
          class="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline"
          v-model="lang"
        >
          <option disabled value="">言語を選択してください</option>
          <option v-for="(lang, index) in langMenu" :key="index" :value="lang">
            {{ lang }}
          </option>
        </select>
        <div
          class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"></svg>
        </div>
      </div>
      <div class="relative inline-block w-7/12 my-2 text-gray-700">
        <select
          @change="levelInput = false"
          :class="errorLevelClass"
          class="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline"
          v-model="level"
        >
          <option disabled value="">レベルを選んでください</option>
          <option
            v-for="(level, index) in levelMenu"
            :key="index"
            :value="level"
          >
            {{ level }}
          </option>
        </select>
        <div
          class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"></svg>
        </div>
      </div>
      <div class="w-10/12 my-4 flex space-x-2 justify-center">
        <button @click="openDialog()" type="button" class="btn bg-blue-600">
          START
        </button>
      </div>
    </div>
  </div>
  <LevelDialog
    :showLevelDialog="showLevelDialog"
    @closeDialog="closeDialog()"
  />
</template>

<style scoped>
.btn {
  @apply inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md;
}
.error {
  @apply bg-red-50 border-2 border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 transition-all duration-200;
}
</style>
