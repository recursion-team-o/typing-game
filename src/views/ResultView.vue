<script setup lang="ts">
import { RouterLink } from "vue-router";
import { timerStore } from "../stores/timer";
import { storeToRefs } from "pinia";
import { codeStore } from "../stores/code";
import { userStore } from "../stores/user";
const user = userStore();
const code = codeStore();
const timer = timerStore();
const { getMinString, getSecString, getPointMsec } = storeToRefs(timer);
const { getMissCount } = storeToRefs(code);
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
            href="#"
            class="flex mt-3 items-center s-button inline-block hover:bg-sky-200 px-5 py-3 rounded-lg shadow-lg bg-white text-sky-600 justify-center text-2xl text-center"
          >
            Twitterでシェア
            <img class="h-10" src="../image/twitter2.png" />
          </a>
        </div>

        <div class="flex justify-center items-center">
          <RouterLink
            class="inline-block mt-5 px-2 py-3 text-center s-button hover:bg-indigo-400 rounded-lg shadow-lg bg-indigo-700 text-white"
            to="/"
            >メインに戻る</RouterLink
          >
        </div>
        <div class="flex justify-center items-center">
          <RouterLink
            @click="
              code.resetCode();
              timer.resetTimer();
            "
            class="inline-block mt-5 px-2 py-3 s-button text-center rounded-lg hover:bg-gray-400 shadow-lg bg-gray-600 text-white"
            to="/game"
            >リスタート</RouterLink
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

            <!-- 2行目　-->
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

            <!-- 4行目　-->
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
                <div class="Shift bg-gray-100 p-1 inner-buttons">
                  <div>
                    <br />
                  </div>
                  <div>Shift</div>
                </div>
              </div>
            </div>

            <!-- 5行目　-->
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
                <div
                  class="space bg-gray-100 p-1 hover:bg-indigo-400 inner-buttons"
                ></div>
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
  background-position: center;
}
.result-box {
  width: 250px;
  height: 200px;
}
.twitter-box {
  width: 350px;
}
.button-box {
  width: 800px;
}
</style>
