export type Keys = `${"A" | "B" | "C" | "D" | "E" | "F" | "G"}${
  | ""
  | "♯"
  | "♭"}`;

export const MAJOR_KEY_OPTIONS: Keys[] = [
  "C",
  "D♭",
  "D",
  "E♭",
  "E",
  "F",
  "F♯",
  "G",
  "A♭",
  "A",
  "B♭",
  "B",
];

export const MINOR_KEY_OPTIONS: Keys[] = [
  "C",
  "C♯",
  "D",
  "E♭",
  "E",
  "F",
  "F♯",
  "G",
  "G♯",
  "A",
  "B♭",
  "B",
];

export const ENHARMONICS: [Keys, Keys][] = [
  ["C♯", "D♭"],
  ["D♯", "E♭"],
  ["F♯", "G♭"],
  ["G♯", "A♭"],
  ["A♯", "B♭"],
];

export const CIRCLE_OF_FIFTHS: Keys[] = [
  "F♭",
  "C♭",
  "G♭",
  "D♭",
  "A♭",
  "E♭",
  "B♭",
  "F",
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F♯",
  "C♯",
  "G♯",
  "D♯",
  "A♯",
  "E♯",
  "B♯",
];

/** Index of C, the major key with no sharps or flats, in `CIRCLE_OF_FIFTHS */
export const MAJOR_CENTRE = CIRCLE_OF_FIFTHS.indexOf("C");

/** Index of A, the minor key with no sharps or flats, in `CIRCLE_OF_FIFTHS */
export const MINOR_CENTRE = CIRCLE_OF_FIFTHS.indexOf("A");

/** Index of F, the first letter in the sharp key signature, in `CIRCLE_OF_FIFTHS */
export const SHARP_START = CIRCLE_OF_FIFTHS.indexOf("F");

/** Index of B, the first letter in the flat key signature, in `CIRCLE_OF_FIFTHS */
export const FLAT_START = CIRCLE_OF_FIFTHS.indexOf("B");
