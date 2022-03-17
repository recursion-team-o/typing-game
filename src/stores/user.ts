import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user",
  state: () => ({
    name: "" as string,
    lang: "" as string,
    level: 0 as number,
    time: 0 as number,
    score: 0 as number,
    misses: new Map<string, number>(),
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
    getMisses(state): Map<string, number> {
      return state.misses;
    },
    getMissCount(state): any {
      const messCount = (key: string) => {
        return state.misses.get(key);
      };
      return messCount;
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
    setScore(value: number): void {
      this.score = value;
    },
    setMisses(key: string): void {
      const value = this.misses.get(key);
      if (typeof value !== "number") {
        this.misses.set(key, 1);
        console.log("first set");
      } else {
        this.misses.set(key, value + 1);
        console.log("plus set");
      }
    },
  },
});
