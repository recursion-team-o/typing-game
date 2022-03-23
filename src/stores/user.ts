import { defineStore } from "pinia";
//import { stat } from "fs";

export const userStore = defineStore({
  id: "user",
  state: () => ({
    name: "" as string,
    lang: "" as string,
    level: 0 as number,
    time: 0 as number,
    score: 100 as number,
    missTypes: new Map<string, number>(),
    nigateString: "" as string,
  }),
  getters: {
    getName(state): string {
      return state.name;
    },
    getLang(state): string {
      return state.lang;
    },
    getLevel(state): number {
      return state.level;
    },
    getTime(state): number {
      return state.time;
    },
    getScore(state): number {
      return state.score;
    },
    getMissCounts(state): any {
      const missCount = (key: string) => {
        return state.missTypes.get(key);
      };
      return missCount;
    },
  },
  actions: {
    setName(value: string): void {
      this.name = value;
    },
    setLang(value: string): void {
      this.lang = value;
    },
    setLevel(value: number): void {
      this.level = value;
    },
    setTime(value: number): void {
      this.time = value;
    },
    setScore(): void {
      this.score -= 1;
    },
    setMisses(key: string): void {
      const value = this.missTypes.get(key);
      if (!this.missTypes.has(key)) {
        this.missTypes.set(key, 1);
        console.log("first miss of key " + key);
      } else {
        this.missTypes.set(key, value + 1);
        console.log(this.missTypes.get(key));
      }
    },
  },
});
