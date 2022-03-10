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
      <div class="welcomebox flex px-10 py-10 items-center justify-around ">
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
      <ol class="rulebox rounded-lg  p-10  bg-gray-100">
        <li class="text-5xl pb-4">ルール:</li>
        <li class="text-2xl"> 任意のキーを押すと始まります</li>
        <li class="text-2xl"> 左側にソースコードが、右側に自分の書いているコードがでます</li>
        <li class="text-2xl"> 全てのコードを書き終えたら自動的に終了します</li>
        <li class="text-2xl"> レベルはコードを書く量により変わります</li>
      </ol>
    </div>

    <!--「メインに戻る」と「スタート」のボタンを格納-->
    <div class="pt-20 pb-20 flex items-center justify-center">
      <div class="flex buttonbox justify-around">
        <RouterLink class="inline-block px-20 py-3 rounded-lg shadow-lg bg-indigo-700 text-white" to="/">ホーム画面</RouterLink>
        <a href="#" class="inline-block px-20 py-3 rounded-lg shadow-lg bg-gray-600 text-white">スタート</a>
      </div>
    </div>

  </div>
</template>

<style>
.box{
  height: 92.2vh;
  width: 100%;
}

.welcomebox{
  width: 60%;
}

.rulebox{
  width: 70%;
}

.buttonbox{
  width:800px;
}
</style>
