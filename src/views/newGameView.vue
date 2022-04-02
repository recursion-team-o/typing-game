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
const { onCountDown, onFinish } = sound;

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
    let count = 3;
    let container = document.getElementById("count-down");
    container?.classList.add("zoom-in");
    onCountDown();
    const anim = () => {
      if (count >= 1) {
        if (container) container.innerHTML = String(count - 1);
        count--;
        setTimeout(anim, 1000);
      } else if (count === 0) {
        if (container) container.innerHTML = "START";
        count--;
        setTimeout(anim, 1000);
      } else {
        document.getElementById("click-space")?.classList.add("invisible");
        startGame();
        startTimer();
      }
    };
    anim();
  }
  //ポインターとキーの照合
  else if (event.key === code.pointerCode) {
    moveIndex();
    sound.onSuccess();
    //最後の文字の場合の処理
    if (code.finishCode.length + 1 === code.index) {
      onFinish();
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
      <!-- ここからスタート時のスペースばー対応 -->
      <div
        id="click-space"
        style="position: absolute; left: 0px; top: 0px"
        class="click-space text-shadow text-8xl flex justify-center text-white items-center"
      >
        <!-- 文字（click space to start) -->
        <p id="count-down">click space-bar to start</p>
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

.click-space {
  opacity: 0.8;
  background-color: gray;
  width: 100%;
  height: 100%;
}

.zoom-in {
  animation: zoom-in-anim 4s;
}

.text-shadow {
  text-shadow: 3px 3px 3px black;
}

#correct {
  color: #a7a2a2;
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

@keyframes zoom-in-anim {
  0% {
    transform: scale(1);
  }
  24% {
    transform: scale(2.5);
  }
  25% {
    transform: scale(1);
  }
  49% {
    transform: scale(2.5);
  }
  50% {
    transform: scale(1);
  }
  74% {
    transform: scale(2.5);
  }
  75% {
    transform: scale(1);
  }
  100% {
    transform: scale(2.5);
  }
}
</style>
