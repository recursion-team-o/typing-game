<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeaderAll from "@/components/HeaderAll.vue";
import { timerStore } from "../stores/timer";
import { storeToRefs } from "pinia";
import { codeStore } from "../stores/code";
import { userStore } from "../stores/user";
const user = userStore();
const code = codeStore();
const timer = timerStore();
const { getMinString, getSecString, getPointMsec, resetTimer } =
  storeToRefs(timer);
const { getSuccessPer, getMissCount } = storeToRefs(code);
const { getNigate, getMissCounts, getMissObj, setNigate, resetCode } =
  storeToRefs(user);
</script>

<template>
  <!-- ヘッダーの追加 -->
  <HeaderAll />
  <!--背景が黄色の一番大本の箱-->
  <div class="box bg-yellow-500 pt-20">
    <!--スコアの箱-->
    <div class="pt-20 flex items-center justify-center pb-10">
      <p class="text-6xl font-bold">スコア : {{user.score}}</p>
    </div>
    <!--「時間」「ミスタイプ」「苦手キー」の箱-->
    <div class="pt-5 flex items-center justify-center">
      <ol class="result-box text-center">
        <li class="text-2xl">時間: {{ getMinString }}:{{getSecString}}:{{getPointMsec}}</li>
        <li class="text-2xl">ミスタイプ数: {{ getMissCount }}</li>
        <li class="text-2xl nigate">苦手キー:</li>
        <li v-for="(value, name) in user.missTypes">{{ value }}: {{ name }}</li>
      </ol>
    </div>
    <!--ツイッターでシェアの箱-->
    <div class="flex mt-10 justify-center items-center">
      <a
        href="#"
        class="flex items-center twitter-box inline-block hover:bg-sky-200 px-5 py-3 rounded-lg shadow-lg bg-white text-sky-600 justify-center text-2xl text-center"
      >
        Twitterでシェア
        <img class="h-10" src="../image/twitter2.png" />
      </a>
    </div>
    <!--「メインに戻る」と「リスタート」のボタンを格納-->
    <div class="pt-20 pb-20 flex items-center justify-center">
      <div class="flex button-box justify-around">
        <RouterLink
          class="inline-block px-20 py-3 hover:bg-indigo-400 rounded-lg shadow-lg bg-indigo-700 text-white"
          to="/"
        >メインに戻る</RouterLink>
        <RouterLink
          @click="code.resetCode(); timer.resetTimer()"
          class="inline-block px-20 py-3 rounded-lg hover:bg-gray-400 shadow-lg bg-gray-600 text-white"
          to="/game"
        >リスタート</RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  width: 100%;
  height: 92.1vh;
  background-position: center;
}
.result-box {
  width: 250px;
}
.twitter-box {
  width: 350px;
}
.button-box {
  width: 800px;
}
</style>
