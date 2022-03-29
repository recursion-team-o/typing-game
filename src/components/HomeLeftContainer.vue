<script setup lang="ts">
import LevelDialog from "../components/LevelDialog.vue";
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import { userStore } from "../stores/user";
let showLevelDialog = ref<boolean>(false);
const langMenu: string[] = ["JavaScript", "Java"];
const levelMenu: string[] = ["初級", "中級", "上級"];
const user = userStore();
const { lang, checkLang, level, checkLevel } = storeToRefs(user);
let langStatus = ref<boolean>(false);
let levelStatus = ref<boolean>(false);
const langInput = computed({
  get: () => langStatus.value,
  set: (value: boolean) => (langStatus.value = value),
});
const levelInput = computed({
  get: () => levelStatus.value,
  set: (value: boolean) => (levelStatus.value = value),
});
const checkInput = (check: any): boolean => {
  if (!check.value) return true;
  else return false;
};
const openDialog = (): void => {
  if (checkInput(checkLang) || checkInput(checkLevel)) {
    langInput.value = checkInput(checkLang);
    levelInput.value = checkInput(checkLevel);
    alert("必須項目を入力してください");
    return;
  }
  showLevelDialog.value = true;
};
const closeDialog = (): void => {
  showLevelDialog.value = false;
};
let errorClass = reactive({
  error: langInput,
});
let errorLevelClass = reactive({
  error: levelInput,
});
</script>

<template>
  <div class="flex justify-center items-center w-1/2 h-full">
    <div
      class="flex flex-col justify-center items-center max-w-md w-10/12 bg-gray-100 border border-gray-900 border-opacity-60 rounded-lg shadow-lg"
    >
      <h3 class="py-6 font-semibold text-2xl">レベル別練習</h3>
      <div class="relative inline-block w-7/12 mb-4 text-gray-700">
        <select
          @change="langInput = false"
          :class="errorClass"
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
