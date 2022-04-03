import { defineStore } from "pinia";
import { codeStore } from "./code";
import { authStore } from "./auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  Timestamp,
} from "firebase/firestore";

const db = getFirestore();
interface Record {
  lang: string;
  level: string;
  score: number;
  time: number;
  missType: object;
  code: string;
  createdAt: Timestamp;
}

export const userStore = defineStore({
  id: "user",
  state: () => ({
    name: "" as string,
    lang: "" as string,
    level: "" as string,
    time: 0 as number,
    score: 100 as number,
    missTypes: new Map<string, number>(),
    canStartGame: true as boolean,
    records: {} as object,
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
    getRecordsLength(state): number {
      return Object.keys(state.records).length;
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
    setRecords(value: object) {
      this.records = value;
    },
    async getDbRecords() {
      const auth = authStore();
      const docRef = doc(db, "Record", auth.getDisplayname);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const dbRecords = docSnap.data() as object;
        this.setRecords(dbRecords);
      } else {
        console.log("No such document!");
      }
      alert("レコードを取得");
    },
    createRecord(): Record {
      const code = codeStore();
      const record: Record = {
        lang: this.lang,
        level: this.level,
        score: this.score,
        time: this.time,
        // objectへ変更後、Object.fromEntriesを削除
        missType: Object.fromEntries(this.missTypes),
        code: code.fullCode,
        createdAt: Timestamp.fromDate(new Date()),
      };
      return record;
    },
    async saveRecord() {
      const currRecord = this.createRecord();
      await this.getDbRecords();
      const saveRecord: object = {
        [this.getRecordsLength]: currRecord,
      };
      console.log(saveRecord);
      try {
        const auth = authStore();
        // ドキュメントが存在して、新しいデータを統合 merge:true
        // ドキュメントが存在して、新しいデータを上書き merge:false
        await setDoc(doc(db, "Record", auth.getDisplayname), saveRecord, {
          merge: true,
        });
        alert("保存しました");
      } catch (error) {
        console.log("ドキュメントへ追加時のエラー: ", error);
      }
    },
  },
});
