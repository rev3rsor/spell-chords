import { Tonality } from "$recoil/rootTonality";
import {
  type Keys,
  CIRCLE_OF_FIFTHS,
  ENHARMONICS,
  FLAT_START,
  MAJOR_CENTRE,
  MINOR_CENTRE,
  SHARP_START,
} from "./keys";

const letters = ["A", "B", "C", "D", "E", "F", "G"] as const;

export const getEnharmonic = (key: Keys) => {
  const enharmonicPair = ENHARMONICS.find((pair) => pair.includes(key));
  return enharmonicPair?.find((value) => value !== key);
};

export const MAJOR_CHORDS = ["I", "II", "III", "IV", "V", "VI", "VII"];
export const MINOR_CHORDS = MAJOR_CHORDS.map((chord) => chord.toLowerCase());

export const MAJOR_DIATONIC_CHORDS = ["I", "ii", "iii", "IV", "V", "vi", "vii"];
export const MINOR_DIATONIC_CHORDS = ["i", "ii", "III", "iv", "v", "VI", "VII"];

export const ALLOWED_PREFIXES = ["♯", "♭"];

export const ALLOWED_SUFFIXES = [
  "maj7",
  "min7",
  "7",
  "dim7",
  "dim",
  "°", // placeholder open circle for diminished
  "ø",
  "sus2",
  "sus4",
  "sus",
];

const BASE_ROMAN_NUMERAL_REGEX = "IV|(?:I|V)I{0,2}|iv|(?:i|v)i{0,2}";

const TEST_ROMAN_NUMERAL_REGEX = `(?:${ALLOWED_PREFIXES.join(
  "|"
)})?\\b(?:${BASE_ROMAN_NUMERAL_REGEX})(?:${ALLOWED_SUFFIXES.join("|")})?\\b`;

const REPLACE_ROMAN_NUMERAL_REGEX = `(${ALLOWED_PREFIXES.join(
  "|"
)})?\\b(${BASE_ROMAN_NUMERAL_REGEX})(${ALLOWED_SUFFIXES.join("|")})?\\b`;

const validateRomanNumeralChord = (chordToTest: string) => {
  // create new instance of regex to avoid storing index
  return new RegExp(TEST_ROMAN_NUMERAL_REGEX, "g").test(chordToTest);
};

export const validateRomanNumeralChordString = (chordString: string) => {
  return chordString.trim().split(/\s+/).every(validateRomanNumeralChord);
};

export const getChordFromRomanNumeral = (
  romanNumeral: string,
  rootKey: Keys,
  rootTonality: Tonality,
  prefix?: string,
  suffix?: string
) => {
  const isMinorChord = MINOR_CHORDS.includes(romanNumeral);

  // zero indexed scale degree
  const scaleDegree = isMinorChord
    ? MINOR_CHORDS.indexOf(romanNumeral)
    : MAJOR_CHORDS.indexOf(romanNumeral);

  // positive for sharps, negative for flats, 0 with neither
  const keySignature =
    rootTonality === "minor"
      ? CIRCLE_OF_FIFTHS.indexOf(rootKey) - MINOR_CENTRE
      : CIRCLE_OF_FIFTHS.indexOf(rootKey) - MAJOR_CENTRE;

  const isFlatKey = keySignature < 0;

  const baseLetter = rootKey[0] as (typeof letters)[number];
  const newBaseLetter =
    letters[(letters.indexOf(baseLetter) + scaleDegree) % letters.length];

  let accidental = isFlatKey
    ? CIRCLE_OF_FIFTHS.indexOf(newBaseLetter) >= FLAT_START + keySignature + 1
      ? "♭"
      : ""
    : CIRCLE_OF_FIFTHS.indexOf(newBaseLetter) <= SHARP_START + keySignature - 1
    ? "♯"
    : "";

  // minor chords are written as natural minor, but use the sharpened seventh unless specified
  if (
    (rootTonality === "minor" &&
      ["VII", "vii"].includes(romanNumeral) &&
      !prefix) ||
    prefix === "♯"
  ) {
    switch (accidental) {
      case "♭":
        accidental = "";
        break;
      case "":
        accidental = "♯";
        break;
      case "♯":
        accidental = "𝄪";
        break;
    }
  } else if (prefix === "♭") {
    switch (accidental) {
      case "♭":
        accidental = "𝄫";
        break;
      case "":
        accidental = "♭";
        break;
      case "♯":
        accidental = "";
        break;
    }
  }

  return `${newBaseLetter}${accidental}${
    suffix || (isMinorChord ? "m" : "")
  }`.padEnd(3, " ");
};

export const replaceChordsFromRomanNumeralString = (
  romanNumeralString: string,
  rootKey: Keys,
  rootTonality: Tonality
) => {
  return romanNumeralString.replaceAll(
    new RegExp(REPLACE_ROMAN_NUMERAL_REGEX, "g"),
    (match, prefix, romanNumeral, suffix) =>
      getChordFromRomanNumeral(
        romanNumeral,
        rootKey,
        rootTonality,
        prefix,
        suffix
      )
  );
};
