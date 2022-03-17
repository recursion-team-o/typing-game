import { defineStore } from "pinia";

export const codeStore = defineStore({
  id: "code",
  state: () => ({
    source: "" as string,
    myCode: "" as string,
  }),
  getters: {
    getSource(state): string {
      return state.source;
    },
    getMyCode(state): string {
      return state.myCode;
    },
  },
  actions: {
    setSource(value: string): void {
      this.source = value;
    },
    setMyCode(value: string): void {
      this.myCode = value;
    },
  },
});
