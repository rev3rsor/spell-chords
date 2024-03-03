import { atom } from "recoil";

import { type Keys } from "$utils/keys";

const DEFAULT_KEY = "C";

const rootKeyAtom = atom<Keys>({
  key: "rootKey",
  default: DEFAULT_KEY,
});

export default rootKeyAtom;
