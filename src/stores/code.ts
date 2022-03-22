import { defineStore } from "pinia";
//import { stat } from "fs";

export const codeStore = defineStore({
  id: "code",
  state: () => ({
    fullcode: config.newcode,
    correctcode: "",
    pointercode: "",
    notyetcode: config.newcode.substring(0),
    //コード全体の最後にある空白を全て消す
    finishcode: config.newcode.replace(/\s+$/g, ""),
    actualString: config.newcode.replace(/^\s+|\s+$/g, ""),
    index: 0,
    missCount: 0
  }),
  getters: {
    getSource(state): string {
      return state.sampleCode;
    },
    getMyCode(state): string {
      return state.writeCode;
    },
    getSuccessPer(state): number {
      let actual = state.actualString.length;
      let totalTouch = actual + state.missCount;
      return actual / totalTouch * 100;
    },
    getMissCount(state): number {
      return state.missCount
    }
  },
  actions: {
    setFullCode(value: string): void {
      this.fullcode = value;
    },
    setPointerCode(value: string): void {
      this.pointercode = value;
    },
    setNotYetCode(value: string): void {
      this.notyetcode = value;
    },
    setFinishCode(value: string): void {
      this.finishcode = value;
    },
    setSampleCode(value: string): void {
      this.sampleCode = value;
    },
    setJustCode(): void {
      this.setFullCode(this.getSampleCode);
      this.setPointerCode(this.getSampleCode.substring(0, 1));
      this.setNotYetCode(this.getSampleCode.substring(1));
      this.setFinishCode(this.getSampleCode.replace(/\s+$/g, ""));
    },
    setNextIndexCode(i: number): void {
      this.correctcode = this.fullcode.substring(0, i);
      this.pointercode = this.fullcode.substring(i, i + 1);
      this.notyetcode = this.fullcode.substring(i + 1);
    },
    startgame(): void {
      if (this.fullcode[0] !== "\n" && this.fullcode[0] !== " ") {
        this.setNextIndexCode(0)
        this.index += 1;
      }
      else {
        for (let i = 0; i < this.fullcode.length; i++) {
          if (this.fullcode[i] !== "\n" && this.fullcode[i] !== " ") {
            this.setNextIndexCode(i)
            this.index = i + 1
            break;
          }
        }
      }
    },
    changeline(): void {
      for (let i = this.index; i < this.fullcode.length; i++) {
        if (this.fullcode[i] !== "\n" && this.fullcode[i] !== " ") {
          this.setNextIndexCode(i)
          this.index = i + 1;
          break
        }
      }
    },
    moveIndex(): void {
      this.setNextIndexCode(this.index)
      this.index += 1;
    },
    setMissCount(): void {
      this.missCount += 1;
    },
    resetCode(): void {
      this.correctcode = "";
      this.pointercode = "";
      this.notyetcode = config.newcode.substring(0);
      this.index = 0;
      this.missCount = 0
    }
  },
});

//仮のデータ
const config = {
  newcode:
    `
    <template>
    <div ref="upper" class="upperbox mt-2 mb-2 bg-white flex justify-around items-center">
      <div class="codearea overs flex justify-center items-center">
        <pre class="codearea p-5"><code class="language-html"><span id="correct">{{code.correctcode}}</span><span id="that">{{code.pointercode}}</span>{{code.notyetcode}}</code></pre>
      </div>
    </div>
    </template>
    `,
};
