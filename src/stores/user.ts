import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user",
  state: () => ({
    name: "" as string,
    lang: "" as string,
    level: "" as string,
    time: 0 as number,
    score: 100 as number,
    missTypes: new Map<string, number>(),
    canStartGame: false as boolean,
  }),
  getters: {
    getName(state): string {
      return state.name;
    },
    getLang(state): string {
      return state.lang;
    },
    getLevel(state): string {
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
    setLevel(value: string): void {
      this.level = value;
    },
    setTime(value: number): void {
      this.time = value;
    },
    setScore(): void {
      this.score -= 1;
    },
    setMisses(key: string): void {
      if (!this.missTypes.has(key)) {
        this.missTypes.set(key, 1);
      } else {
        this.missTypes.set(key, Number(this.missTypes.get(key)) + 1);
      }
    },
    setGameFalse(): void {
      this.canStartGame = false;
    },
    setGameTrue(): void {
      this.canStartGame = true;
    },
    resetMisses(): void {
      this.missTypes = new Map();
    },
  },
});
