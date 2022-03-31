<script setup lang="ts">
import { ref, onMounted } from "vue";
import { codeStore } from "../stores/code";
import { timerStore } from "../stores/timer";
import { userStore } from "../stores/user";
import WinDialog from "../components/WinDialog.vue";
import UsKeyboard from "../components/UsKeyboard.vue";

const user = userStore();
const code = codeStore();
const timer = timerStore();

const { setMisses, setGameFalse } = user;
const { startTimer, stopTimer } = timer;
const { moveIndex, startGame, setMissCount, changeLine } = code;

const upper = ref<HTMLElement>();
let showMyCodeDialog = ref<boolean>(false);

const openDialog = (): void => {
  showMyCodeDialog.value = true;
};
const closeDialog = (): void => {
  showMyCodeDialog.value = false;
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

const KeyDown = (event: KeyboardEvent) => {
  document
    .getElementsByClassName(event.code)[0]
    ?.classList.remove("bg-gray-100");
  document
    .getElementsByClassName(event.code)[0]
    ?.classList.add("bg-indigo-500");

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
    return;
  } else {
    setMissCount();
    setMisses(event.key);
    user.setScore();
    console.log("you clicked wrong key");
  }
};

const KeyUp = (event: KeyboardEvent) => {
  document
    .getElementsByClassName(event.code)[0]
    ?.classList.remove("bg-indigo-500");
  document.getElementsByClassName(event.code)[0]?.classList.add("bg-gray-100");
};
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

  <div class="bottom-box flex justify-center items-center bg-gray-900">
    <UsKeyboard />
  </div>
  <WinDialog :showMyCodeDialog="showMyCodeDialog" @closeDialog="closeDialog" />
</template>
<style scoped>
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
