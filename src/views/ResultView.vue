<script setup lang="ts">
import { timerStore } from "../stores/timer";
import { storeToRefs } from "pinia";
import { codeStore } from "../stores/code";
import { userStore } from "../stores/user";
import { ref, onMounted } from "vue";
const user = userStore();
const code = codeStore();
const timer = timerStore();
const { getMinString, getSecString, getPointMsec } = storeToRefs(timer);
const { getMissCount, getSuccessPer } = storeToRefs(code);
const { lang, level } = storeToRefs(user);
const { setGameTrue } = user;
const keyboard = ref(null);
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
          .querySelectorAll("." + keys[key])[0]
          .classList.remove("bg-gray-100");
        document
          .querySelectorAll("." + keys[key])[0]
          .classList.add("bg-red-200");
      } else if (index < 7) {
        document
          .querySelectorAll("." + keys[key])[0]
          .classList.remove("bg-gray-100");
        document
          .querySelectorAll("." + keys[key])[0]
          .classList.add("bg-red-500");
      } else {
        document
          .querySelectorAll("." + keys[key])[0]
          .classList.remove("bg-gray-100");
        document
          .querySelectorAll("." + keys[key])[0]
          .classList.add("bg-red-900");
      }
    }
  });
}
</script>

<template>
  <!-- ヘッダーの追加 -->
  <div class="bg-gray-800 box flex">
    <div class="left-box flex justify-center items-center">
      <div class="bg-white p-8 result-card rounded-lg">
        <div class="text-5xl mt-5 font-bold text-center">
          スコア: {{ user.score }}
        </div>
        <ol class="result-box mt-10 text-center">
          <li class="text-2xl mt-1">選択言語: {{ lang }}</li>
          <li class="text-2xl mt-2">レベル: {{ level }}</li>
          <li class="text-2xl mt-2">
            時間: {{ getMinString }}:{{ getSecString }}:{{ getPointMsec }}
          </li>
          <li class="text-2xl mt-2">ミスタイプ数: {{ getMissCount }}</li>
          <li class="text-2xl mt-2">成功率: {{ getSuccessPer }}%</li>
        </ol>
        <div class="flex justify-center items-center">
          <a
            href="http://twitter.com/share?url=[シェアするURL]&text=[ツイート内テキスト]&via=[ツイート内に含むユーザ名]&related=[ツイート後に表示されるユーザー]&hashtags=[ハッシュタグ]"
            class="flex mt-3 items-center s-button inline-block hover:bg-sky-200 px-5 py-3 rounded-lg shadow-lg bg-white text-sky-600 justify-center text-2xl text-center"
            target="_blank"
          >
            Twitterでシェア
            <img class="h-10" src="../image/twitter2.png" />
          </a>
        </div>

        <div class="flex justify-center items-center">
          <a
            class="inline-block mt-5 px-2 py-3 text-center s-button hover:bg-indigo-400 rounded-lg shadow-lg bg-indigo-700 text-white"
            href="/"
            >メインに戻る</a
          >
        </div>
        <div class="flex justify-center items-center">
          <a
            @click="
              code.resetCode();
              timer.resetTimer();
              setGameTrue();
            "
            class="inline-block mt-5 px-2 py-3 s-button text-center rounded-lg hover:bg-gray-400 shadow-lg bg-gray-600 text-white"
            href="/game"
            >リスタート</a
          >
        </div>
      </div>
    </div>
    <div class="right-box p-8">
      <div class="mt-5 bg-white upper-box overs nigate-keys p-12">
        <div class="text-4xl font-bold underline mb-4">
          あなたの苦手キー<span class="text-2xl ml-4"
            >[ミスタッチキー => 間違えた回数]</span
          >
        </div>
        <div>
          <div class="text-3xl nigate-box m-2 flex flex-wrap">
            <span class="text-3xl m-2" v-for="value in user.missTypes"
              >[ "{{ value[0] }}"=> {{ value[1] }}回 ]</span
            >
          </div>
        </div>
      </div>
      <div class="flex mt-2 justify-center items-center">
        <!-- キーボード-->
        <div
          class="bottom-box mt-10 flex justify-center items-center bg-gray-800"
        >
          <div ref="keyboard" class="board-area bg-gray-200 p-1">
            <!-- １行目 -->
            <div class="one-line flex">
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num1 bg-gray-100 p-1 inner-buttons">
                  <div>!</div>
                  <div>1</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num2 bg-gray-100 p-1 inner-buttons">
                  <div>"</div>
                  <div>2</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num3 bg-gray-100 p-1 inner-buttons">
                  <div>#</div>
                  <div>3</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num4 bg-gray-100 p-1 inner-buttons">
                  <div>$</div>
                  <div>4</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num5 bg-gray-100 p-1 inner-buttons">
                  <div>%</div>
                  <div>5</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num6 bg-gray-100 p-1 inner-buttons">
                  <div>&amp;</div>
                  <div>6</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num7 bg-gray-100 p-1 inner-buttons">
                  <div>'</div>
                  <div>7</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num8 bg-gray-100 p-1 inner-buttons">
                  <div>(</div>
                  <div>8</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num9 bg-gray-100 p-1 inner-buttons">
                  <div>)</div>
                  <div>9</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="num0 bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>0</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="bar bg-gray-100 p-1 inner-buttons">
                  <div>=</div>
                  <div>-</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="hat bg-gray-100 p-1 inner-buttons">
                  <div>^</div>
                  <div>~</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="¥ bg-gray-100 p-1 inner-buttons">
                  <div>¥</div>
                  <div>|</div>
                </div>
              </div>
              <div class="bg-gray-600 one-six flex justify-center items-center">
                <div class="Backspace bg-gray-100 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>backspace</div>
                </div>
              </div>
            </div>

            <!-- 2行目 -->
            <div class="one-line flex">
              <div
                class="bg-gray-600 one-five flex justify-center items-center"
              >
                <div class="tabs bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div></div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="q bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>Q</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="w bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>W</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="e bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>E</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="r bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>R</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="t bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>T</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="y bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>Y</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="u bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>U</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="i bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>I</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="o bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>O</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="p bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>P</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="atmark bg-gray-100 p-1 inner-buttons">
                  <div>`</div>
                  <div>@</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="bigparaini bg-gray-100 p-1 inner-buttons">
                  <div>{</div>
                  <div>[</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="bigparafini bg-gray-100 p-1 inner-buttons">
                  <div>}</div>
                  <div>]</div>
                </div>
              </div>
            </div>

            <!-- 3行目　-->
            <div class="one-line flex">
              <div
                class="bg-gray-600 one-seven flex justify-center items-center"
              >
                <div class="Control bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>control</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="a bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>A</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="s bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>S</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="d bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>D</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="f bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>F</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="g bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>G</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="h bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>H</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="j bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>J</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="k bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>K</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="l bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>L</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="semi bg-gray-100 p-1 inner-buttons">
                  <div>+</div>
                  <div>;</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="coron bg-gray-100 p-1 inner-buttons">
                  <div>*</div>
                  <div>:</div>
                </div>
              </div>
              <div
                class="bg-gray-600 one-seven flex justify-center items-center"
              >
                <div class="Enter bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>Enter</div>
                </div>
              </div>
            </div>

            <!-- 4行目 -->
            <div class="one-line flex">
              <div
                class="bg-gray-600 one-five flex justify-center items-center"
              >
                <div class="Shift bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>Shift</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="z bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>Z</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="x bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>x</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="c bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>C</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="v bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>V</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="b bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>B</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="n bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>N</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="m bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>M</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="hai bg-gray-100 p-1 inner-buttons">
                  <div>&lt;</div>
                  <div>,</div>
                  &gt;
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="peri bg-gray-100 p-1 inner-buttons">
                  <div>&gt;</div>
                  <div>.</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="slash bg-gray-100 p-1 inner-buttons">
                  <div>?</div>
                  <div>/</div>
                </div>
              </div>
              <div class="bg-gray-600 buttons flex justify-center items-center">
                <div class="sub bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>_</div>
                </div>
              </div>
              <div
                class="bg-gray-600 one-eight flex justify-center items-center"
              >
                <div class="bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <!-- 5行目 -->
            <div class="one-line flex">
              <div
                class="bg-gray-600 one-four flex justify-center items-center"
              >
                <div class="Alt bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>option</div>
                </div>
              </div>
              <div class="bg-gray-600 one-ten flex justify-center items-center">
                <div class="Meta bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>command</div>
                </div>
              </div>
              <div
                id="space"
                class="bg-gray-600 space-bar flex justify-center items-center"
              >
                <div class="space bg-gray-100 p-1 inner-buttons"></div>
              </div>
              <div class="bg-gray-600 one-ten flex justify-center items-center">
                <div class="Meta bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div></div>
                </div>
              </div>
              <div
                class="bg-gray-600 one-four flex justify-center items-center"
              >
                <div class="bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- キーボード -->
      </div>
    </div>
  </div>
</template>

<style>
.box {
  width: 100%;
  height: 100%;
}
.upper-box {
  height: 50%;
  width: 100%;
}
.bottom-box {
  width: 100%;
  height: 50%;
}
.nigate-box {
  height: 80%;
  width: 100%;
}
.left-box {
  width: 40%;
  height: 100%;
}
.right-box {
  width: 60%;
  height: 100%;
}
.s-button {
  width: 270px;
}
.nigate-keys {
  font-family: Georgia;
}
.result-card {
  width: 80%;
}
.board-area {
  width: 746px;
  height: 258px;
}
.one-line {
  height: 50px;
  width: 100%;
}
.buttons {
  width: 50px;
  height: 50px;
}
.inner-buttons {
  width: 97%;
  height: 97%;
}
.one-four {
  width: 73px;
  height: 50px;
}
.one-five {
  width: 81px;
  height: 50px;
}
.one-six {
  width: 85px;
  height: 50px;
}
.one-seven {
  width: 92px;
  height: 50px;
}
.one-eight {
  width: 117px;
  height: 50px;
}
.one-ten {
  width: 146px;
  height: 50px;
}
.overs {
  overflow: scroll;
}
.space-bar {
  width: 303px;
  height: 50px;
}
/* .makeit {
  word-wrap: break-word;
} */
</style>
