import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const timerShowStore = defineStore({
  id: "timerShow",
  state: () => ({
    isShow: false as boolean,
  }),
  getters: {
    getShowState(state): boolean {
      return state.isShow;
    },
  },
  actions: {
    setShowState() {
      const route = useRoute();
      const name = String(route.name);
      const result: boolean = name == "game" ? true : false;
      this.isShow = result;
    },
  },
});
