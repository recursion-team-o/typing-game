import { defineStore } from "pinia";

export const timerStore = defineStore({
  id: "timer",
  state: () => ({
    intervalId: null as number | NodeJS.Timer | null,
    startTime: 0 as number,
    stopTime: 0 as number,
    durationTime: 0 as number,
  }),
  getters: {
    getStartTime(state): number {
      return state.startTime;
    },
    getStopTime(state): number {
      return state.stopTime;
    },
    getDurationTime(state): number {
      return state.durationTime;
    },
    getMsec(): number {
      return Math.floor(this.getDurationTime % 1000);
    },
    getPointMsec(): string {
      return this.getMsec !== 0
        ? String(this.getMsec).slice(-3, -1).padStart(2, "0")
        : "00";
    },
    getSec(): number {
      return Math.floor(this.getDurationTime / 1000) % 60;
    },
    getSecString(): string {
      return String(this.getSec).padStart(2, "0");
    },
    getMin(): number {
      return Math.floor(this.getDurationTime / 1000 / 60) % 60;
    },
    getMinString(): string {
      return String(this.getMin).padStart(2, "0");
    },
  },
  actions: {
    setStartTime(value: number): void {
      this.startTime = value;
    },
    setStopTime(value: number): void {
      this.stopTime = value;
    },
    setDurationTime(value: number): void {
      this.durationTime = value;
    },
    startTimer(): void {
      if (this.getStopTime !== 0) {
        const startTime =
          performance.now() - this.getStopTime + this.getStartTime;
        this.setStartTime(startTime);
      } else {
        this.setStartTime(performance.now());
      }
      this.intervalId = setInterval(() => {
        const currMs = performance.now();
        if (this.getStartTime !== undefined) {
          const currDurationMs = currMs - this.getStartTime;
          this.setDurationTime(currDurationMs);
        } else {
          return;
        }
      }, 10);
    },
    stopTimer(): void {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.setStopTime(performance.now());
      } else {
        console.log("no start");
        return;
      }
      return;
    },
    resetTimer(): void {
      if (this.intervalId != null) {
        clearInterval(this.intervalId);
      } else {
        console.log("no start");
        return;
      }
      this.$reset();
    },
  },
});
