<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center w-1/2 h-full">
    <div class="flex flex-col justify-center items-center max-w-md w-10/12 bg-gray-100 border border-gray-900 border-opacity-60 rounded-lg shadow-lg">
      <h3 class="py-6 font-semibold text-2xl">自分のソースコード練習</h3>
      <div class="w-7/12 mb-4">
        <textarea
          class="block w-full px-3 py-1.5 h-24 text-base font-normal text-gray-700 placeholder-gray-400 bg-white bg-clip-padding border rounded-lg appearance-none focus:shadow-outline transition ease-in-out m-0"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="コードをペーストしてください"
        ></textarea>
      </div>
      <div class="w-10/12 my-4 flex space-x-2 justify-center">
        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transiton duration-150 ease-in-out">START</button>
      </div>
    </div>
  </div>
</template>
