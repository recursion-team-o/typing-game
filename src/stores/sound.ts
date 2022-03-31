import { defineStore } from "pinia";
import test1 from "@/assets/sound/yoru no zattou.mp3";
import success from "@/assets/sound/success.mp3";
import miss from "@/assets/sound/miss.mp3";
import countDown from "@/assets/sound/countDown.mp3";
import { Howl, Howler } from "howler";

export const soundStore = defineStore({
  id: "sound",
  state: () => ({
    bgm: new Howl({
      src: [test1],
      loop: true,
      volume: 0.5,
      format: ["mp3"],
    }) as Howl,
    success: new Howl({
      src: [success],
      volume: 0.3,
      format: ["mp3"],
    }),
    miss: new Howl({
      src: [miss],
      volume: 0.3,
      format: ["mp3"],
    }),
    countDown: new Howl({
      src: [countDown],
      volume: 0.3,
      format: ["mp3"],
    }),
    bgmStatus: false as boolean,
    muteStatus: true as boolean,
    vol: 0.5 as number,
    volStatus: false as boolean,
  }),
  getters: {
    getMuteStatus(state): boolean {
      return state.muteStatus;
    },
    getVolStatus(state): boolean {
      return state.volStatus;
    },
  },
  actions: {
    onSound(): void {
      if (this.bgmStatus == true) return;
      this.bgmStatus = true;
      this.bgm.play();
    },
    toggleMute(): void {
      if (this.muteStatus == false) {
        this.bgm.mute(true);
        this.success.mute(true);
        this.miss.mute(true);
        this.muteStatus = true;
      } else if (this.muteStatus == true) {
        this.bgm.mute(false);
        this.success.mute(false);
        this.miss.mute(false);
        this.muteStatus = false;
      }
    },
    setVol(value: number): void {
      this.bgm.volume(value);
    },
    onSuccess(): void {
      this.success.play();
    },
    onMiss(): void {
      this.miss.play();
    },
    onCountDown(): void {
      this.countDown.play();
    },
    toggleVol(): void {
      this.volStatus = !this.volStatus;
    },
  },
});
