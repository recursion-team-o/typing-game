<script setup lang="ts">
import { ref, onMounted } from "vue";
import { codeStore } from "../stores/code";
import { timerStore } from "../stores/timer";
import { userStore } from "../stores/user";
import { soundStore } from "../stores/sound";
import WinDialog from "../components/WinDialog.vue";
import UsKeyboard from "../components/UsKeyboard.vue";
const user = userStore();
const code = codeStore();
const timer = timerStore();
const sound = soundStore();
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
  document.getElementsByClassName(event.code)[0]?.classList.add("bg-gray-400");
  //スタート
  if (code.correctCode === "" && event.key === " ") {
    startGame();
    startTimer();
  }
  //ポインターとキーの照合
  else if (event.key === code.pointerCode) {
    moveIndex();
    sound.onSuccess();
    //最後の文字の場合の処理
    if (code.finishCode.length + 1 === code.index) {
      stopTimer();
      setGameFalse();
      finishResetKeyBoardColor(event);
      openDialog();
      return;
    }
    // 最終行の場合、次の行に飛ぶ
    if (code.pointerCode === "\n") {
      changeLine();
    }
  } else if (event.shiftKey) {
    if (event.key == "Shift") return;
    else {
      setMissCount();
      setMisses(event.key);
      user.setScore();
      sound.onMiss();
    }
  }
  // miss
  else {
    setMissCount();
    setMisses(event.key);
    user.setScore();
    sound.onMiss();
  }
};
const KeyUp = (event: KeyboardEvent) => {
  document
    .getElementsByClassName(event.code)[0]
    ?.classList.remove("bg-gray-400");
  document.getElementsByClassName(event.code)[0]?.classList.add("bg-gray-100");
};
const finishResetKeyBoardColor = (event: KeyboardEvent) => {
  document
    .getElementsByClassName(event.code)[0]
    ?.classList.remove("bg-gray-400");
  document.getElementsByClassName(event.code)[0]?.classList.add("bg-gray-100");
  if (event.shiftKey) {
    let shiftArr = ["ShiftLeft", "ShiftRight"];
    for (let i = 0; i < shiftArr.length; i++) {
      document
        .getElementsByClassName(shiftArr[i])[0]
        ?.classList.remove("bg-gray-400");
      document
        .getElementsByClassName(shiftArr[i])[0]
        ?.classList.add("bg-gray-100");
    }
  }
};
</script>

<template>
  <!-- 上半分のHTML -->
  <div class="bg-gray-50 flex items-center">
    <div
      class="h-full container mx-auto px-5 sm:py-12 py-4 flex flex-col justify-between"
    >
      <div
        ref="upper"
        class="mt-2 mb-2 rounded-lg border border-gray-600 h-screen overflow-y-scroll"
      >
        <div class="w-full overs flex justify-center items-center">
          <pre
            class="w-full p-5"
          ><code class="language-html"><span id="correct">{{code.correctCode}}</span><span id="that">{{code.pointerCode}}</span>{{code.notYetCode}}</code></pre>
        </div>
      </div>

      <div class="flex justify-center items-center p-4 bg-gray-200 rounded-lg">
        <UsKeyboard ref="keyboard" />
      </div>
      <WinDialog
        :showMyCodeDialog="showMyCodeDialog"
        @closeDialog="closeDialog"
      />
    </div>
  </div>
</template>
<style scoped>
#correct {
  color: #0000ff;
}
#that {
  animation: flash 1s linear infinite;
  background: #808080;
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
