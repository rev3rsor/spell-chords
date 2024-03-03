import { atom } from "recoil";

export type Tonality = "major" | "minor";

export const TONALITIES: Tonality[] = ["major", "minor"];

export const DEFAULT_TONALITY = "major";

const rootTonalityAtom = atom<Tonality>({
  key: "rootTonality",
  default: DEFAULT_TONALITY,
});

export default rootTonalityAtom;
