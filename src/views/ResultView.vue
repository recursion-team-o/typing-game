<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";

</script>

<template>

  <!-- ヘッダーの追加　-->
  <Header />
    <!--背景が黄色の一番大本の箱-->
   <div class="box bg-yellow-500">
    <!--スコアの箱-->
    <div class="space-height"></div>
    <div class="pt-20 flex items-center justify-center pb-10">
      <p class="text-6xl font-bold">スコア : 100</p>
    </div>
    <!--「時間」「ミスタイプ」「苦手キー」の箱-->
    <div class="pt-5 flex items-center justify-center">
      <ol class="result-box text-center">
        <li class="text-2xl">時間: 3.23</li>
        <li class="text-2xl">ミスタイプ数:</li>
        <li class="text-2xl">苦手キー:</li>
      </ol>
    </div>
    <!--ツイッターでシェアの箱-->
    <div class="pt-10 flex items-center justify-center">
      <p class="text-4xl twitter-box text-center">Twitterでシェア</p>
    </div>
    <!--「メインに戻る」と「リスタート」のボタンを格納-->
    <div class="pt-20 pb-20 flex items-center justify-center">
      <div class="flex button-box justify-around">
        <RouterLink class="inline-block px-20 py-3 rounded-lg shadow-lg bg-indigo-700 text-white" to="/">メインに戻る</RouterLink>
        <a href="#" class="inline-block px-20 py-3 rounded-lg shadow-lg bg-gray-600 text-white">リスタート</a>
      </div>
    </div>
  </div>

</template>

<style>

.space-height {
  height: 70px
}
.box{
  height:92.2vh;
  width: 100%;
}
.result-box{
  width: 250px;
}
.twitter-box{
  width:350px;
}
.button-box{
  width:800px;
}

</style>
