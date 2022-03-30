<script setup lang="ts">
import { ref, onMounted } from "vue";
import { codeStore } from "../stores/code";
import { timerStore } from "../stores/timer";
import { userStore } from "../stores/user";
import WinDialog from "../components/WinDialog.vue";

const user = userStore();
const code = codeStore();
const timer = timerStore();
const { setMisses, setGameFalse } = user;
const { startTimer, stopTimer } = timer;
const { moveIndex, startGame, setMissCount, changeLine } = code;
const keyboard = ref<HTMLElement>();
const upper = ref<HTMLElement>();
let showMyCodeDialog = ref<boolean>(false);
const openDialog = (): void => {
  showMyCodeDialog.value = true;
};
const closeDialog = (): void => {
  showMyCodeDialog.value = false;
};

//キーボードのhashmap
const keys: { [name: string]: string } = {};

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

const KeyDown = (event: KeyboardEvent) => {
  //スタート
  if (code.correctCode === "" && event.key === " ") {
    startGame();
    startTimer();
  }
  //ポインターとキーの照合
  else if (event.key === code.pointerCode) {
    moveIndex();
    // 最後の文字の処理
    if (code.finishCode.length + 1 === code.index) {
      stopTimer();
      setGameFalse();
      openDialog();
      return;
    }
    // 最終行の場合、次の行に飛ぶ
    if (code.pointerCode === "\n") {
      changeLine();
    }
  }
  //3: shiftの時、ポインターと打ったキーが同じかどうかの判定
  else if (event.shiftKey) {
    if (event.key === code.pointerCode) {
      moveIndex();
      if (code.finishCode.length + 1 === code.index) {
        stopTimer();
        setGameFalse();
        openDialog();
        return;
      }
      if (code.pointerCode === "\n") {
        changeLine();
      }
    }
    if (keys[event.key]) {
      console.log(keyboard.value);
      keyboard.value
        ?.getElementsByClassName(event.code)[0]
        ?.classList.remove("bg-gray-100");
      keyboard.value
        ?.getElementsByClassName(event.code)[0]
        ?.classList.add("bg-indigo-500");
    }
  } else {
    setMissCount();
    setMisses(event.key);
    user.setScore();
    console.log("you clicked wrong key");
  }

  if (keys[event.key]) {
    console.log(event.code + " " + event.key);

    keyboard.value
      ?.getElementsByClassName(event.code)[0]
      ?.classList.remove("bg-gray-100");
    keyboard.value
      ?.getElementsByClassName(event.code)[0]
      ?.classList.add("bg-indigo-500");
  }
  console.log(event.code + " " + event.key);
};

const KeyUp = (event: KeyboardEvent) => {
  if (keys[event.key]) {
    keyboard.value
      ?.getElementsByClassName(event.code)[0]
      ?.classList.remove("bg-indigo-500");
    keyboard.value
      ?.getElementsByClassName(event.code)[0]
      ?.classList.add("bg-gray-100");
  }
  if (event.shiftKey) {
    if (keys[event.key]) {
      keyboard.value
        ?.getElementsByClassName(event.code)[0]
        ?.classList.remove("bg-indigo-500");
      keyboard.value
        ?.getElementsByClassName(event.code)[0]
        ?.classList.add("bg-gray-100");
    }
  }
};

onMounted(() => {
  //ページ全体を開いている時にどこを押してもkeyEventが起こる
  document.onkeydown = (event: KeyboardEvent) => {
    if (user.canStartGame) KeyDown(event);
  };
  document.onkeyup = (event: KeyboardEvent) => {
    if (user.canStartGame) KeyUp(event);
  };
});

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
  <!-- 上半分のHTML -->
  <div
    ref="upper"
    class="upper-box mt-2 mb-2 bg-white flex justify-around items-center"
  >
    <div class="code-area overs flex justify-center items-center">
      <pre
        class="code-area p-5"
      ><code class="language-html"><span id="correct">{{code.correctCode}}</span><span id="that">{{code.pointerCode}}</span>{{code.notYetCode}}</code></pre>
    </div>
  </div>

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

  <div class="bottom-box flex justify-center items-center bg-gray-900">
    <div ref="keyboard" class="board-area bg-gray-200 p-1">
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
      <div class="oneLine flex justify-center">
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
      <div class="oneLine flex justify-center">
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
      <div class="oneLine flex justify-center">
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
      <div class="oneLine flex justify-center">
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
  </div>
  <WinDialog :showMyCodeDialog="showMyCodeDialog" @closeDialog="closeDialog" />
</template>
<style>
.upper-box {
  height: 45%;
  margin: 0;
}
.code-area {
  width: 80%;
  height: 100%;
}
.bottom-box {
  width: 100%;
  height: 55%;
}
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

textarea::selection {
  background: #fff;
  color: #ff0000;
}

#correct {
  color: #0000ff;
}
#that {
  animation: flash 1s linear infinite;
  background: #808080;
}
#wrong {
  color: #ff0000;
}
@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
