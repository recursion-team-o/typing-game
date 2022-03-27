<script setup lang="ts">
import test1 from "@/assets/sound/yoru no zattou.mp3";
import { soundStore } from "../stores/sound";
import { storeToRefs } from "pinia";

const sound = soundStore();
sound.$subscribe((mutation, state) => {
  const newVol = mutation.events.newValue;
  sound.setVol(newVol);
});
const { getMuteStatus, vol } = storeToRefs(sound);
</script>

<template>
  <div class="top">
    <div class="flex flex-col justify-center items-center">
      <button
        class="border w-24 mb-2 bg-red-200 rounded-lg uppercase shadow hover:border-red-400"
        @click="sound.onSound()"
      >
        start
      </button>
      <button
        class="border w-24 bg-purple-400 rounded-lg uppercase shadow hover:border-blue-400"
        v-show="!getMuteStatus"
        @click="sound.toggleMute()"
      >
        onミュート
      </button>
      <button
        class="border w-24 bg-lime-400 rounded-lg uppercase shadow hover:border-blue-400"
        v-show="getMuteStatus"
        @click="sound.toggleMute()"
      >
        offミュート
      </button>
      <button
        class="border w-24 bg-lime-400 rounded-lg uppercase shadow hover:border-blue-400"
        @click="sound.onSuccess()"
      >
        success
      </button>
      <button
        class="border w-24 bg-yellow-400 rounded-lg uppercase shadow hover:border-blue-400"
        @click="sound.onMiss()"
      >
        miss
      </button>
      <div class="w-1/2">
        <label for="step" class="font-bold text-gray-600">Volume range</label>
        <input
          type="range"
          min="0"
          step="0.1"
          max="0.5"
          v-model.number="vol"
          class="w-full h-2 bg-blue-100 appearance-none"
        />
      </div>
    </div>
    <!--背景が黄色の一番大本の箱-->
    <div class="box h-full sm:bg-yellow-500">
      <!--welcome userと言語、レベルをいれるための箱。（ここは横並びのためflexboxの利用)-->
      <!--サイズの調整のため透明な横幅60%の箱にいったん入れる-->
      <div class="flex pt-10 justify-center items-center">
        <div class="welcome-box flex px-10 py-10 items-center justify-around">
          <div class="font-bold text-4xl">Welcome User!</div>
          <!--言語とレベルが縦並びなのでさらに箱を一つ加える-->
          <div>
            <div class="text-2xl px-0">プログラミング言語: JavaScript</div>
            <div class="text-2xl px-0">レベル: ２</div>
          </div>
        </div>
      </div>

      <!--ルール説明のための箱-->
      <div class="justify-center mt-6 items-center flex">
        <ol class="rule-box rounded-lg p-10 bg-gray-100 list-disc">
          <span class="text-5xl">ルール</span>
          <li class="text-2xl pt-5">任意のキーを押すと始まります</li>
          <li class="text-2xl">
            左側にソースコードが、右側に自分の書いているコードがでます
          </li>
          <li class="text-2xl">全てのコードを書き終えたら自動的に終了します</li>
          <li class="text-2xl">レベルはコードを書く量により変わります</li>
        </ol>
      </div>

      <!--「メインに戻る」と「スタート」のボタンを格納-->
      <div class="pt-10 flex items-center justify-center">
        <div class="flex button-box justify-around">
          <RouterLink
            class="inline-block px-20 py-3 rounded-lg shadow-lg bg-indigo-700 text-white"
            to="/"
            >ホーム画面</RouterLink
          >
          <a
            href="#"
            class="inline-block px-20 py-3 rounded-lg shadow-lg bg-gray-600 text-white"
            >スタート</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  width: 100%;
}

.welcome-box {
  width: 60%;
}

.rule-box {
  width: 70%;
}

.button-box {
  width: 800px;
}
</style>
