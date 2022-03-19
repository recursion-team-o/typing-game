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
     
    `
}
