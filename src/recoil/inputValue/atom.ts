import { atom } from "recoil";

const inputValueAtom = atom({
  key: "inputValue",
  default: "",
});

export default inputValueAtom;
