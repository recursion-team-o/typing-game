<script setup lang="ts">
const keyBoardFirstLineKeys: {
  top: string;
  bottom: string;
  keyCode: string;
  class: string;
}[] = [
  { top: "~", bottom: "`", keyCode: "Backquote", class: "" },
  { top: "!", bottom: "1", keyCode: "Digit1", class: "" },
  { top: "@", bottom: "2", keyCode: "Digit2", class: "" },
  { top: "#", bottom: "3", keyCode: "Digit3", class: "" },
  { top: "$", bottom: "4", keyCode: "Digit4", class: "" },
  { top: "%", bottom: "5", keyCode: "Digit5", class: "" },
  { top: "^", bottom: "6", keyCode: "Digit6", class: "" },
  { top: "&", bottom: "7", keyCode: "Digit7", class: "" },
  { top: "*", bottom: "8", keyCode: "Digit8", class: "" },
  { top: "(", bottom: "9", keyCode: "Digit9", class: "" },
  { top: ")", bottom: "0", keyCode: "Digit0", class: "" },
  { top: "_", bottom: "-", keyCode: "Minus", class: "" },
  { top: "+", bottom: "=", keyCode: "Equal", class: "" },
  { top: "", bottom: "Backspace", keyCode: "Backspace", class: "one-six" },
];

const keyBoardSecondLineKeys: {
  top: string;
  bottom: string;
  keyCode: string;
  class: string;
}[] = [
  { top: "", bottom: "", keyCode: "Tab", class: "one-five" },
  { top: "Q", bottom: "", keyCode: "KeyQ", class: "" },
  { top: "W", bottom: "", keyCode: "KeyW", class: "" },
  { top: "E", bottom: "", keyCode: "KeyE", class: "" },
  { top: "R", bottom: "", keyCode: "KeyR", class: "" },
  { top: "T", bottom: "", keyCode: "KeyT", class: "" },
  { top: "Y", bottom: "", keyCode: "KeyY", class: "" },
  { top: "U", bottom: "", keyCode: "KeyU", class: "" },
  { top: "I", bottom: "", keyCode: "KeyI", class: "" },
  { top: "O", bottom: "", keyCode: "KeyO", class: "" },
  { top: "P", bottom: "", keyCode: "KeyP", class: "" },
  { top: "{", bottom: "[", keyCode: "BracketLeft", class: "" },
  { top: "}", bottom: "]", keyCode: "BracketRight", class: "" },
  { top: "|", bottom: "￥", keyCode: "Backslash", class: "" },
];
const keyBoardThirdLineKeys: {
  top: string;
  bottom: string;
  keyCode: string;
  class: string;
}[] = [
  { top: "Caps lock", bottom: "", keyCode: "ControlRight", class: "one-seven" },
  { top: "A", bottom: "", keyCode: "KeyA", class: "" },
  { top: "S", bottom: "", keyCode: "KeyS", class: "" },
  { top: "D", bottom: "", keyCode: "KeyD", class: "" },
  { top: "F", bottom: "", keyCode: "KeyF", class: "" },
  { top: "G", bottom: "", keyCode: "KeyG", class: "" },
  { top: "H", bottom: "", keyCode: "KeyH", class: "" },
  { top: "J", bottom: "", keyCode: "KeyJ", class: "" },
  { top: "K", bottom: "", keyCode: "KeyK", class: "" },
  { top: "L", bottom: "", keyCode: "KeyL", class: "" },
  { top: ":", bottom: ";", keyCode: "Semicolon", class: "" },
  { top: '"', bottom: "'", keyCode: "Quote", class: "" },
  { top: "Enter", bottom: "", keyCode: "Enter", class: "one-seven" },
];

const keyBoardFourthLineKeys: {
  top: string;
  bottom: string;
  keyCode: string;
  class: string;
}[] = [
  { top: "Shift", bottom: "", keyCode: "ShiftLeft", class: "one-eight" },
  { top: "Z", bottom: "", keyCode: "KeyZ", class: "" },
  { top: "X", bottom: "", keyCode: "KeyX", class: "" },
  { top: "C", bottom: "", keyCode: "KeyC", class: "" },
  { top: "V", bottom: "", keyCode: "KeyV", class: "" },
  { top: "B", bottom: "", keyCode: "KeyB", class: "" },
  { top: "N", bottom: "", keyCode: "KeyN", class: "" },
  { top: "M", bottom: "", keyCode: "KeyM", class: "" },
  { top: "<", bottom: ",", keyCode: "Comma", class: "" },
  { top: ">", bottom: ".", keyCode: "Period", class: "" },
  { top: "?", bottom: "/", keyCode: "Slash", class: "" },
  { top: "Shift", bottom: "", keyCode: "ShiftRight", class: "one-eight" },
];

const keyBoardFifthLineKeys: {
  top: string;
  bottom: string;
  keyCode: string;
  class: string;
}[] = [{ top: "Enter", bottom: "", keyCode: "Space", class: "space-bar" }];
</script>
<template>
  <!--キーボードの設計
    - 縦五行である。
      - １４(割合: 13が同サイズ、一番右約1.6倍)
      - １４(割合: 13が同サイズ、一番ひだり約1.5倍...これは見た目の調整的に1.6ではなく1.5）
      - １３(割合: 11が同じ、残り２が1.7倍）
      - １２(割合: 10が同じ、残り２が1.8倍）
      - ５(横970pxを10等分。97px 1:2:4:2;1 => 97:194:388:194:97px)

    - 下半分の画面のサイズが338pxなのでpaddingをのぞいて330pxとする
    - 一個66pxとなる

      横が978px
        66 * 13 = 858px
        112 = 970px
        978px

      たてが338px
        - padding 8
        - 330px
      - 330 / 5 = 66px

      10
      12421

    以下キーボードのHTML-->
  <div class="board-area bg-gray-200 p-1">
    <!-- １行目 -->
    <div class="one-line flex justify-center">
      <div
        v-for="(keyBoardFirstLineKey, index) in keyBoardFirstLineKeys"
        :key="index"
        :class="keyBoardFirstLineKey.class"
        class="bg-gray-600 buttons flex justify-center items-center"
      >
        <div
          :class="keyBoardFirstLineKey.keyCode"
          class="bg-gray-100 hover:bg-indigo-400 flex flex-col justify-center items-center inner-buttons"
        >
          <div>{{ keyBoardFirstLineKey.top }}</div>
          <div>{{ keyBoardFirstLineKey.bottom }}</div>
        </div>
      </div>
    </div>

    <!-- 2行目 -->
    <div class="one-line flex justify-center">
      <div
        v-for="(keyBoardSecondLineKey, index) in keyBoardSecondLineKeys"
        :key="index"
        :class="keyBoardSecondLineKey.class"
        class="bg-gray-600 buttons flex justify-center items-center"
      >
        <div
          :class="keyBoardSecondLineKey.keyCode"
          class="bg-gray-100 hover:bg-indigo-400 flex flex-col justify-center items-center inner-buttons"
        >
          <div>{{ keyBoardSecondLineKey.top }}</div>
          <div>{{ keyBoardSecondLineKey.bottom }}</div>
        </div>
      </div>
    </div>

    <!-- 3行目 -->
    <div class="one-line flex justify-center">
      <div
        v-for="(keyBoardThirdLineKey, index) in keyBoardThirdLineKeys"
        :key="index"
        :class="keyBoardThirdLineKey.class"
        class="bg-gray-600 buttons flex justify-center items-center"
      >
        <div
          :class="keyBoardThirdLineKey.keyCode"
          class="bg-gray-100 hover:bg-indigo-400 flex flex-col justify-center items-center inner-buttons"
        >
          <div>{{ keyBoardThirdLineKey.top }}</div>
          <div>{{ keyBoardThirdLineKey.bottom }}</div>
        </div>
      </div>
    </div>

    <!-- 4行目 -->
    <div class="one-line flex justify-center">
      <div
        v-for="(keyBoardFourthLineKey, index) in keyBoardFourthLineKeys"
        :key="index"
        :class="keyBoardFourthLineKey.class"
        class="bg-gray-600 buttons flex justify-center items-center"
      >
        <div
          :class="keyBoardFourthLineKey.keyCode"
          class="bg-gray-100 hover:bg-indigo-400 flex flex-col justify-center items-center inner-buttons"
        >
          <div>{{ keyBoardFourthLineKey.top }}</div>
          <div>{{ keyBoardFourthLineKey.bottom }}</div>
        </div>
      </div>
    </div>

    <!-- 5行目 -->
    <div class="one-line flex justify-center">
      <div
        v-for="(keyBoardFifthLineKey, index) in keyBoardFifthLineKeys"
        :key="index"
        :class="keyBoardFifthLineKey.class"
        class="bg-gray-600 buttons flex justify-center items-center"
      >
        <div
          :class="keyBoardFifthLineKey.keyCode"
          class="bg-gray-100 hover:bg-indigo-400 flex flex-col justify-center items-center inner-buttons"
        >
          <div>{{ keyBoardFifthLineKey.top }}</div>
          <div>{{ keyBoardFifthLineKey.bottom }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.board-area {
  width: 978px;
  height: 338px;
}
.one-line {
  height: 66px;
  width: 100%;
}
.buttons {
  width: 66px;
  height: 66px;
}
.inner-buttons {
  width: 98%;
  height: 98%;
}
.one-four {
  width: 97px;
  height: 66px;
}
.one-five {
  width: 107px;
  height: 66px;
}
.one-six {
  width: 112px;
  height: 66px;
}
.one-seven {
  width: 122px;
  height: 66px;
}
.one-eight {
  width: 155px;
  height: 66px;
}
.one-ten {
  width: 194px;
  height: 66px;
}
.overs {
  overflow: scroll;
}
.space-bar {
  width: 400px;
  height: 66px;
}
</style>
