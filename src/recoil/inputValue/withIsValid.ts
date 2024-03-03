import { selector } from "recoil";

import { validateRomanNumeralChordString } from "$utils/chordUtils";

import inputValueAtom from "./atom";

const withIsValid = selector({
  key: "inputValueWithIsValid",
  get: ({ get }) => {
    const inputValue = get(inputValueAtom);

    return validateRomanNumeralChordString(inputValue);
  },
});

export default withIsValid;
