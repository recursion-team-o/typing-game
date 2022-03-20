import { defineStore } from "pinia";

export const codeStore = defineStore({
  id: "code",
  state: () => ({
    fullcode: config.newcode,
    correctcode: "",
    pointercode: config.newcode.substring(0, 1),
    notyetcode: config.newcode.substring(1),
    finishcode: config.newcode.replace(/\s+$/g, "")
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
