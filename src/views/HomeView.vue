<script setup lang="ts">
import HeaderAll from "@/components/HeaderAll.vue";
import HomeLeftContainer from "../components/HomeLeftContainer.vue";
import HomeRightContainer from "../components/HomeRightContainer.vue";
import { ref, onMounted } from "vue";
import { userStore } from "../stores/user";
import { storeToRefs } from "pinia";

const user = userStore();
const { name } = storeToRefs(user);
const headerRef = ref<InstanceType<typeof HeaderAll>>();
let homeHeightStyle = ref<string>();
onMounted(() => {
  const headerHeight = ref<number>(headerRef.value.$el.clientHeight);
  const headerHeightVh = ref<number>((headerHeight.value * 100) / 1000);
  homeHeightStyle.value = 100 - headerHeightVh.value + "vh";
});
</script>

<template>
  <main>
    <HeaderAll ref="headerRef" />
    <div :style="{ height: homeHeightStyle }" class="h-[84.8vh] bg-yellow-300">
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
              v-model="name"
              type="text"
              class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
              name="userName"
              placeholder="ユーザーネームを入力"
            />
          </div>
        </div>
      </div>
      <div class="flex h-1/2">
        <HomeLeftContainer />
        <HomeRightContainer />
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-height {
  height: v-bind("headerHeight") px;
}
</style>
