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
  <div
    class="p-4 mx-3 lg:w-2/5 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 relative"
  >
    <form class="space-y-6" action="#">
      <h5 class="text-2xl font-bold text-gray-900 text-center">レベル別練習</h5>
      <!-- alert -->
      <div
        v-show="langInput || levelInput"
        class="w-10/12 flex justify-center items-center text-sm text-red-700 bg-red-100 rounded-lg text-center absolute z-10 -top-2 p-2 transition-all duration-200"
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

      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >language
        </label>
        <select
          @change="langInput = false"
          :class="errorLangClass"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5"
          v-model="lang"
        >
          <option disabled value="">言語を選択してください</option>
          <option v-for="(lang, index) in langMenu" :key="index" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900"
          >level
        </label>
        <select
          @change="levelInput = false"
          :class="errorLevelClass"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5"
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

  <LevelDialog
    :showLevelDialog="showLevelDialog"
    @closeDialog="closeDialog()"
  />
</template>
