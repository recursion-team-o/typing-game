<script setup lang="ts">
import { authStore } from "@/stores/auth";
import UsKeyboard from "../components/UsKeyboard.vue";
const auth = authStore();
auth.getAuthState();
</script>

<template>
  <div class="top h-auto border border-red-500 py-3 flex justify-between">
    <div
      class="left-container border border-lime-500 h-auto w-4/12 flex flex-col bg-white rounded-lg shadow-md text-center"
    >
      <div class="img-wrap max-h-1/5 border border-red-500">
        <!-- アカウントimage -->
        <div
          class="relative m-auto w-1/4 h-32 overflow-hidden bg-gray-100 rounded-full"
        >
          <svg
            class="absolute w-32 h-32 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="">
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          ユーザー名
        </h5>
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          ゲームプレイ回数の合計
        </h5>
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          成功率の平均
        </h5>
        <div class="flex justify-center items-center mt-2.5 mb-5">
          <svg
            v-for="(n, index) in 5"
            :key="index"
            class="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >5.0</span
          >
        </div>
        <div class="flex flex-col items-center overflow-y-scroll">
          <div class="pt-4 bg-white border-t shadow-md w-full sm:py-4 sm:px-4">
            <h5
              class="mb-2 text-xl font-medium text-gray-500 dark:text-gray-400"
            >
              最新のプレイ情報
            </h5>
            <div
              class="flex justify-center items-baseline text-gray-900 dark:text-white"
            >
              <span class="text-3xl font-semibold">スコア</span>
              <span class="text-5xl font-extrabold tracking-tight">:</span>
              <span class="text-5xl font-extrabold tracking-tight">100</span>
              <!-- <span
                class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"
                >/month</span -->
              <!-- > -->
            </div>

            <ul
              role="list"
              class="my-7 space-y-5 flex flex-col justify-center items-center"
            >
              <li class="flex space-x-3">
                <div class="flex-shrink-0 w-20 h-5 text-blue-600">言語</div>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  >JavaScript</span
                >
              </li>
              <li class="flex space-x-3">
                <div class="flex-shrink-0 w-20 h-5 text-blue-600">レベル</div>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  >初級</span
                >
              </li>
              <li class="flex space-x-3">
                <div class="flex-shrink-0 w-20 h-5 text-blue-600">時間</div>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  >00:15:60</span
                >
              </li>
              <li class="flex space-x-3">
                <div class="flex-shrink-0 w-20 h-5 text-blue-600">
                  ミスタイプ
                </div>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  >6 回</span
                >
              </li>
              <li class="flex space-x-3">
                <div class="flex-shrink-0 w-20 h-5 text-blue-600">成功率</div>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  >86.04%</span
                >
              </li>

              <!-- <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  >20GB Cloud storage</span
                >
              </li>
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
                  >Integration help</span
                >
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >Sketch Files</span
                >
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >API Access</span
                >
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >Complete documentation</span
                >
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500"
                  >24×7 phone &amp; email support</span
                >
              </li> -->
            </ul>
            <!-- <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center uppercase"
            >
              play game
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="right-container border border-blue-500 h-auto w-7/12 p-4">
      <div
        class="right-top-container flex flex-col border border-red-500 w-full h-2/4"
      >
        <div class="relative shadow-md sm:rounded-lg">
          <div class="p-4 border border-blue-500">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <div class="scroll-wrap border-yellow-500">
            <table class="w-full text-sm text-left text-gray-500 m-0">
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3 text-center">言語</th>
                  <th scope="col" class="px-6 py-3 text-center">
                    ミスタイプ数
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">日付</th>
                  <th scope="col" class="px-6 py-3 text-center">苦手キー</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(n, index) in 5"
                  :key="index"
                  class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center"
                  >
                    JavaScript
                  </th>
                  <td class="px-6 py-4 text-center">10回</td>
                  <td class="px-6 py-4 text-center">2022年3月31日</td>
                  <td class="px-6 py-4 text-center">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Display</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        class="right-bottom-container border border-lime-500 w-full h-2/4 flex justify-center items-center"
      >
        <UsKeyboard />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-wrap {
  overflow: auto;
  width: 100%;
  height: 200px;
}
.scroll-wrap table {
  margin: 0;
  border-spacing: 0;
}
.scroll-wrap td {
  white-space: nowrap;
  padding: 5px;
}
.scroll-wrap th {
  white-space: nowrap;
}
.scroll-wrap tr:first-child th:first-child {
  z-index: 1;
}
</style>
