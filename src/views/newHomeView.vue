<script setup lang="ts">
import HomeLeftContainer from "../components/HomeLeftContainer.vue";
import HomeRightContainer from "../components/HomeRightContainer.vue";
import { userStore } from "../stores/user";
import { storeToRefs } from "pinia";

const user = userStore();
const { name } = storeToRefs(user);
</script>

<template>
  <main>
    <div class="h-full bg-yellow-300 flex items-center">
      <div class="container mx-auto px-5 sm:py-12 py-4">
        <div class="mb-20">
          <div class="text-center">
            <p>A website focused on improving your coding skills</p>
            <h2 class="text-5xl my-4">CODE-TYPING</h2>
          </div>
        </div>``

        <div class="flex justify-around">
          <div
            class="p-4 mx-3 lg:w-2/5 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8"
          >
            <form class="space-y-6" action="#">
              <h5 class="text-2xl font-bold text-gray-900 text-center">
                レベル別練習
              </h5>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >言語</label
                >
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5"
                >
                  <option disabled selected value="">
                    言語を選択してください
                  </option>
                  <option>Java</option>
                  <option>JavaScript</option>
                </select>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >レベル</label
                >
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2.5"
                >
                  <option disabled selected value="">
                    レベルを選択してください
                  </option>
                  <option>初級</option>
                </select>
              </div>
              <div class="flex justify-center">
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  START
                </button>
              </div>
            </form>
          </div>
          <div
            class="p-4 mx-3 lg:w-2/5 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8"
          >
            <form class="space-y-6" action="#">
              <h5 class="text-2xl font-bold text-gray-900 text-center">
                Myコード練習
              </h5>
              <div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Your code</label
                >
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave a code"
                ></textarea>
              </div>

              <div class="flex justify-center">
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  START
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
