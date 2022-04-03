<script setup lang="ts">
// todo
// 1.苦手キー 一覧のスクロール正常に動作しない
// 2.ミスしたキーの色付け
import { timerStore } from "../stores/timer";
import { storeToRefs } from "pinia";
import { codeStore } from "../stores/code";
import { userStore } from "../stores/user";
import { onMounted } from "vue";
import UsKeyboard from "../components/UsKeyboard.vue";

const user = userStore();
const code = codeStore();
const timer = timerStore();
const { getMinString, getSecString, getPointMsec } = storeToRefs(timer);
const { getMissCount, getSuccessPer } = storeToRefs(code);
const { lang, level } = storeToRefs(user);
const { resetMisses } = user;
const keys: { [name: string]: string } = {};
onMounted(() => {
  makeItRed();
});

//1
keys["1"] = "num1";
keys["2"] = "num2";
keys["3"] = "num3";
keys["4"] = "num4";
keys["5"] = "num5";
keys["6"] = "num6";
keys["7"] = "num7";
keys["8"] = "num8";
keys["9"] = "num9";
keys["0"] = "num0";
keys["-"] = "bar";
keys["^"] = "hat";
keys["¥"] = "¥";
keys["Backspace"] = "Backspace";
//uppercase
keys["!"] = "num1";
keys['"'] = "num2";
keys["#"] = "num3";
keys["$"] = "num4";
keys["%"] = "num5";
keys["&"] = "num6";
keys["'"] = "num7";
keys["("] = "num8";
keys[")"] = "num9";
keys["="] = "bar";
keys["~"] = "hat";
keys["|"] = "¥";

//2
keys["q"] = "q";
keys["w"] = "w";
keys["e"] = "e";
keys["r"] = "r";
keys["t"] = "t";
keys["y"] = "y";
keys["u"] = "u";
keys["i"] = "i";
keys["o"] = "o";
keys["p"] = "p";
keys["@"] = "atmark";
keys["["] = "bigparaini";
keys["]"] = "bigparafini";
//uppercase
keys["Q"] = "q";
keys["W"] = "w";
keys["E"] = "e";
keys["R"] = "r";
keys["T"] = "t";
keys["Y"] = "y";
keys["U"] = "u";
keys["I"] = "i";
keys["O"] = "o";
keys["P"] = "p";
keys["`"] = "atmark";
keys["{"] = "bigparaini";
keys["}"] = "bigparafini";

//3
keys["Control"] = "Control";
keys["a"] = "a";
keys["s"] = "s";
keys["d"] = "d";
keys["f"] = "f";
keys["g"] = "g";
keys["h"] = "h";
keys["j"] = "j";
keys["k"] = "k";
keys["l"] = "l";
keys[";"] = "semi";
keys[":"] = "coron";
keys["Enter"] = "Enter";
//uppercase
keys["A"] = "a";
keys["s"] = "s";
keys["D"] = "d";
keys["F"] = "f";
keys["G"] = "g";
keys["H"] = "h";
keys["J"] = "j";
keys["K"] = "k";
keys["L"] = "l";
keys["+"] = "semi";
keys["*"] = "coron";

//4
keys["Shift"] = "Shift";
keys["z"] = "z";
keys["x"] = "x";
keys["c"] = "c";
keys["v"] = "v";
keys["b"] = "b";
keys["n"] = "n";
keys["m"] = "m";
keys[","] = "hai";
keys["."] = "peri";
keys["/"] = "slash";
keys["_"] = "sub";
//4 uppercase
keys["Z"] = "z";
keys["X"] = "x";
keys["C"] = "c";
keys["V"] = "v";
keys["B"] = "b";
keys["N"] = "n";
keys["M"] = "m";
keys["<"] = "hai";
keys[">"] = "peri";
keys["?"] = "slash";

//5
keys["Alt"] = "Alt";
keys["Meta"] = "Meta";
keys[" "] = "space";

function makeItRed(): void {
  console.log("make it red");
  user.missTypes.forEach((index, key) => {
    console.log(index + " , " + key);
    if (keys[key]) {
      if (index < 3) {
        document
          ?.querySelectorAll("." + keys[key])[0]
          ?.classList.remove("bg-gray-100");
        document
          ?.querySelectorAll("." + keys[key])[0]
          ?.classList.add("bg-red-200");
      } else if (index < 7) {
        document
          ?.querySelectorAll("." + keys[key])[0]
          ?.classList.remove("bg-gray-100");
        document
          ?.querySelectorAll("." + keys[key])[0]
          ?.classList.add("bg-red-500");
      } else {
        document
          ?.querySelectorAll("." + keys[key])[0]
          ?.classList.remove("bg-gray-100");
        document
          ?.querySelectorAll("." + keys[key])[0]
          ?.classList.add("bg-red-900");
      }
    }
  });
}
</script>

<template>
  <!-- ヘッダーの追加 -->
  <div class="bg-gray-200 flex items-center">
    <div
      class="h-full container mx-auto px-5 sm:py-12 py-4 flex justify-between flex-col md:flex-row-reverse"
    >
      <div
        class="left-box bg-white flex flex-col justify-around lg:ml-8 ml-2 p-4 result-card rounded-lg"
      >
        <div class="lg:text-5xl text-3xl font-bold text-center">
          スコア: {{ user.score }}
        </div>
        <ol class="result-box text-center">
          <li class="text-2xl mt-1">選択言語: {{ lang }}</li>
          <li class="text-2xl mt-2">レベル: {{ level }}</li>
          <li class="text-2xl mt-2">
            時間: {{ getMinString }}:{{ getSecString }}:{{ getPointMsec }}
          </li>
          <li class="text-2xl mt-2">ミスタイプ数: {{ getMissCount }}</li>
          <li class="text-2xl mt-2">成功率: {{ getSuccessPer }}%</li>
        </ol>

        <div class="flex justify-center items-center mt-5">
          <a
            href="http://twitter.com/share?url=https://recursionist.io/&text=Code Typing クリアしました"
            class="flex items-center hover:bg-sky-200 px-8 py-2 rounded-lg shadow-lg bg-white text-sky-600 justify-center text-2xl text-center"
            target="_blank"
          >
            <img class="h-10 pr-2" src="../image/twitter2.png" />
            tweet
          </a>
        </div>
        <div class="flex items-center justify-around">
          <RouterLink
            @click="
              code.resetCode();
              timer.resetTimer();
              resetMisses();
            "
            class="inline-block mr-4 px-2 py-3 text-center w-full hover:bg-indigo-400 rounded-lg shadow-lg bg-indigo-700 text-white"
            to="/newHome"
            >メインに戻る
          </RouterLink>

          <RouterLink
            @click="
              code.resetCode();
              timer.resetTimer();
              resetMisses();
            "
            class="inline-block ml-4 px-2 py-3 s-button text-center w-full rounded-lg hover:bg-gray-400 shadow-lg bg-gray-600 text-white"
            to="/newGame"
            >リスタート
          </RouterLink>
        </div>
      </div>

      <div
        class="right-box flex justify-between flex-col lg:mr-8 mr-2 p-4 bg-white rounded-lg"
      >
        <div class="nigate-keys upper-box flex flex-col">
          <div class="text-4xl font-bold underline mb-4 text-center">
            あなたの苦手キー
          </div>
          <div class="h-full text-3xl p-2 m-2 flex flex-wrap overflow-y-scroll">
            <span
              class="text-3xl m-2"
              v-for="value in user.missTypes"
              :key="value[0]"
              >[ {{ value[0] }}: {{ value[1] }}回 ]
            </span>
          </div>
        </div>
        <div class="flex mt-2 justify-center items-center">
          <!-- キーボード-->
          <div class="bottom-box bg-gray-200 rounded-lg">
            <UsKeyboard />
          </div>
          <!-- キーボード -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upper-box {
  height: 50%;
  width: 100%;
}
.bottom-box {
  width: 100%;
}
.nigate-box {
  height: 80%;
  width: 100%;
}
.left-box {
  width: 40%;
}
.right-box {
  width: 60%;
}

.nigate-keys {
  font-family: Georgia;
}
</style>
