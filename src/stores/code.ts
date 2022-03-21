import { defineStore } from "pinia";

export const codeStore = defineStore({
  id: "code",
  state: () => ({
    fullcode: config.newcode,
    correctcode: "",
    pointercode: config.newcode.substring(0, 1),
    notyetcode: config.newcode.substring(1),
    finishcode: config.newcode.replace(/\s+$/g, ""),
    index: 0
  }),
  getters: {
    getSource(state): string {
      return state.sampleCode;
    },
    getMyCode(state): string {
      return state.writeCode;
    },
  },
  actions: {
    setSource(value: string): void {
      this.sampleCode = value;
    },
    setMyCode(value: string): void {
      this.writeCode = value;
    },
    setNextIndexCode(i: number): void {
      this.correctcode = this.fullcode.substring(0, i);
      this.pointercode = this.fullcode.substring(i, i + 1);
      this.notyetcode = this.fullcode.substring(i + 1);
    },
    setControlIndex(events: string, shifted: boolean): void {
      if (this.correctcode === "" && events === " ") {
        for (let i = 0; i < this.fullcode.length; i++) {
          if (this.fullcode[i] === "<") {
            this.setNextIndexCode(i)
            this.index = i + 1
            break;
          }
        }
      }
      else if (shifted) {
        if (events === this.pointercode) {
          this.setNextIndexCode(this.index)
          this.index += 1;
          if (this.finishcode.length + 1 === this.index) {
            console.log("finished");
            return;
          }
          else if (this.pointercode === "\n") {
            for (let i = this.index; i < this.fullcode.length; i++) {
              if (this.fullcode[i] !== "\n" && this.fullcode[i] !== " ") {
                this.setNextIndexCode(i)
                this.index = i + 1;
                break
              }
            }
          }
        }
      }
      //3: ポインターと打ったキーが同じかどうかの判定
      else if (events === this.pointercode) {
        this.setNextIndexCode(this.index)
        this.index += 1
        if (this.finishcode.length + 1 === this.index) {
          console.log("finished");
          return;
        }
        if (this.pointercode === "\n") {
          for (let i = this.index; i < this.fullcode.length; i++) {
            if (this.fullcode[i] !== "\n" && this.fullcode[i] !== " ") {
              this.setNextIndexCode(i)
              this.index = i + 1;
              break
            }
          }
        }
      }
      //4: 間違っていた場合の処理
      else {
        console.log("you clicked wrong key");
      }
    }
  },
});

//仮のデータ
const config = {
  newcode:
    `
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
    `
}
