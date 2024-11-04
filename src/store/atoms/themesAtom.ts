import { atom } from "recoil";

export const themesAtom = atom({
  key: "themesAtom",
  default: localStorage.getItem("theme"),
});
