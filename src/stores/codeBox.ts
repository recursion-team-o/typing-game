import { defineStore } from "pinia";
import { userStore } from "./user";
import codeStorage from "../config/codeStorage";
const { codeBox } = codeStorage();

export const codeBoxStore = defineStore({
  id: "codeBox",
  state: () => ({
    codeBox: codeBox as any,
    selectCode: "" as string,
  }),
  getters: {
    getCodeBox(state): any {
      return state.codeBox;
    },
    getCodeList(): any {
      const codeList = (lang: string, level: string) => {
        return this.getCodeBox[lang][level];
      };
      return codeList;
    },
    getSelectCode(state): string {
      return state.selectCode;
    },
  },
  actions: {
    setSelectCode(): void {
      const user = userStore();
      const codeList = this.getCodeList(user.getLang, user.getLevel);
      const codeListLength = Object.keys(codeList).length;
      const randomNum: Function = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
      };
      const codeNum = randomNum(1, codeListLength);
      this.selectCode = codeList[codeNum];
    },
  },
});
