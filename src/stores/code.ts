import { defineStore } from "pinia";
import { codeBoxStore } from "./codeBox";

export const codeStore = defineStore({
  id: "code",
  state: () => ({
    fullcode: config.newcode,
    correctcode: "",
    pointercode: config.newcode.substring(0, 1),
    notyetcode: config.newcode.substring(1),
    finishcode: config.newcode.replace(/\s+$/g, ""),
    sampleCode:
      `<function getLowestTemperature(x, y) { return x - y; }>` as string,
  }),
  getters: {
    getSampleCode(state): string {
      return `${state.sampleCode}`;
    },
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
        this.setNextIndexCode(0);
        this.index += 1;
      } else {
        for (let i = 0; i < this.fullcode.length; i++) {
          if (this.fullcode[i] !== "\n" && this.fullcode[i] !== " ") {
            this.setNextIndexCode(i);
            this.index = i + 1;
            break;
          }
        }
      }
    },
    changeline(): void {
      for (let i = this.index; i < this.fullcode.length; i++) {
        if (this.fullcode[i] !== "\n" && this.fullcode[i] !== " ") {
          this.setNextIndexCode(i);
          this.index = i + 1;
          break;
        }
      }
    },
    moveIndex(): void {
      this.setNextIndexCode(this.index);
      this.index += 1;
      if (this.finishcode.length + 1 === this.index) {
        console.log("finished");
        return;
      }
      if (this.pointercode === "\n") {
        this.changeline();
      }
    },
    setJustSelectCode(): void {
      console.log("select level lang");
      const codeBox = codeBoxStore();
      codeBox.setSelectCode();
      console.log(codeBox.getSelectCode);
      const selectCode = codeBox.getSelectCode;
      this.setFullCode(selectCode);
      this.setPointerCode(selectCode.substring(0, 1));
      this.setNotYetCode(selectCode.substring(1));
      this.setFinishCode(selectCode.replace(/\s+$/g, ""));
    },
  },
});

//仮のデータ
const config = {
  newcode: `
      <HeaderAll />
      <div class=7box bg-yellow-400'>
      <div class=7box bg-yellow-400'>
          <div class='upperbox bg-white flex justify-center items-center'>
            <div class='codearea flex justify-center items-center '>
              <input class='codearea p-5' type='textarea' placeholder='hello' disabled>
            </div>
          </div>
        </div>
        <div class=7box bg-yellow-400'>
          <div class='upperbox bg-white flex justify-center items-center'>
            <div class='codearea flex justify-center items-center '>
              <input class='codearea p-5' type='textarea' placeholder='hello' disabled>
            </div>
          </div>
        </div>
      </div>
    `,
};
