<script setup lang="ts">
import HeaderAll from "@/components/HeaderAll.vue";
</script>

<template>
  <HeaderAll />
  <!--背景が黄色の一番大本の箱-->
  <div class="box sm:bg-yellow-500">
    <!--welcome userと言語、レベルをいれるための箱。（ここは横並びのためflexboxの利用)-->
    <!--サイズの調整のため透明な横幅60%の箱にいったん入れる-->
    <div class="flex pt-10 justify-center items-center">
<<<<<<< HEAD
      <div class="welcome-box flex px-10 py-10 items-center justify-around">
        <div class="font-bold text-4xl">Welcome User!</div>
        <!--言語とレベルが縦並びなのでさらに箱を一つ加える-->
        <div>
          <div class="text-2xl px-0">プログラミング言語: JavaScript</div>
          <div class="text-2xl px-0">レベル: ２</div>
=======
      <div class="welcomebox flex px-10 py-10 items-center justify-around">
        <div class="font-bold text-4xl">Welcome User!</div>
        <!--言語とレベルが縦並びなのでさらに箱を一つ加える-->
        <div>
          <div class="text-2xl px-0">プログラミング言語；Javascript</div>
          <div class="text-2xl px-0">レベル： ２</div>
>>>>>>> ad12809 (コンフリクト解消)
        </div>
      </div>
    </div>

    <!--ルール説明のための箱-->
    <div class="justify-center mt-6 items-center flex">
<<<<<<< HEAD
      <ol class="rule-box rounded-lg p-10 bg-gray-100 list-disc">
        <span class="text-5xl">ルール</span>
        <li class="text-2xl pt-5">任意のキーを押すと始まります</li>
        <li class="text-2xl">
          左側にソースコードが、右側に自分の書いているコードがでます
        </li>
        <li class="text-2xl">全てのコードを書き終えたら自動的に終了します</li>
        <li class="text-2xl">レベルはコードを書く量により変わります</li>
      </ol>
=======
      <div class="rulebox rounded-lg p-10 bg-gray-100">
        <p class="text-5xl pb-4">ルール:</p>
        <p class="text-2xl">- 任意のキーを押すと始まります</p>
        <p class="text-2xl">- 左側にソースコードが、右側に自分の書いているコードがでます</p>
        <p class="text-2xl">- 全てのコードを書き終えたら自動的に終了します</p>
        <p class="text-2xl">- レベルはコードを書く量により変わります</p>
      </div>
>>>>>>> ad12809 (コンフリクト解消)
    </div>

    <!--「メインに戻る」と「スタート」のボタンを格納-->
    <div class="pt-20 pb-20 flex items-center justify-center">
<<<<<<< HEAD
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
=======
      <div class="flex buttonbox justify-around">
        <a
          href="#"
          class="inline-block px-20 py-3 rounded-lg shadow-lg bg-indigo-700 text-white"
        >メインに戻る</a>
        <a href="#" class="inline-block px-20 py-3 rounded-lg shadow-lg bg-gray-600 text-white">スタート</a>
>>>>>>> ad12809 (コンフリクト解消)
      </div>
    </div>
  </div>
</template>

<style>
.box {
<<<<<<< HEAD
  height: 92.2vh;
  width: 100%;
}

.welcome-box {
  width: 60%;
}

.rule-box {
  width: 70%;
}

.button-box {
=======
  height: 100vh;
  width: 100%;
}

.welcomebox {
  width: 60%;
}

.rulebox {
  width: 70%;
}

.buttonbox {
>>>>>>> ad12809 (コンフリクト解消)
  width: 800px;
}
</style>
