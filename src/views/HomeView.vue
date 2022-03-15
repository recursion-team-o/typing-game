<script setup lang="ts">
import Header from "@/components/Header.vue";
import { reactive } from "vue";
import HomeLeftContainer from "../components/HomeLeftContainer.vue";
import HomeRightContainer from "../components/HomeRightContainer.vue";

export interface User {
  name: string;
  selectLang: string;
  selectLevel: number | string;
}
const user = reactive<User>({
  name: "",
  selectLang: "",
  selectLevel: "",
});
</script>

<template>
  <main>
    <Header />
    <div class="h-screen bg-yellow-300">
      <div class="flex flex-col justify-center text-center h-1/2">
        <p>A website focused on improving your coding skills</p>
        <h2 class="text-5xl my-4">CODE-TYPING</h2>
        <div class="flex mx-auto h-4/12">
          <div class="flex relative">
            <span
              class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm"
            >
              UserName
            </span>
            <input
              v-model="user.name"
              type="text"
              class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
              name="userName"
              placeholder="ユーザーネームを入力"
            />
          </div>
        </div>
      </div>
      <div class="flex h-1/2">
        <HomeLeftContainer :user="user" />
        <HomeRightContainer :user="user" />
      </div>
    </div>
  </main>
</template>
