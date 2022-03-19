import { defineStore } from "pinia";

export const codeStore = defineStore({
  id: "code",
  state: () => ({
    sampleCode: "" as string,
    writeCode: "" as string,
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
