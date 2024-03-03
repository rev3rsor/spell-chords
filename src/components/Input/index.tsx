import { useRecoilState, useRecoilValue } from "recoil";

import { TextArea } from "$components/styles/TextArea";
import inputValueAtom, { withIsValid } from "$recoil/inputValue";
import rootTonalityAtom from "$recoil/rootTonality";
import {
  MAJOR_CHORDS,
  MAJOR_DIATONIC_CHORDS,
  MINOR_CHORDS,
  MINOR_DIATONIC_CHORDS,
} from "$utils/chordUtils";

import { Button, ButtonRow, Label } from "./styles";

const Input = () => {
  const rootTonality = useRecoilValue(rootTonalityAtom);
  const [inputValue, setInputValue] = useRecoilState(inputValueAtom);
  // const isInputValueValid = useRecoilValue(withIsValid);

  const handleChordButtonClick = (chord: string) => {
    setInputValue((prev) =>
      /\S$/.test(prev) ? `${prev} ${chord}` : `${prev}${chord}`
    );
  };

  const handleBackspaceButtonClick = () => {
    setInputValue((prev) => prev.replace(/\w+\s*$/, ""));
  };

  const handleEnterButtonClick = () => {
    setInputValue((prev) => `${prev}\n`);
  };

  const handleClearButtonClick = () => {
    setInputValue("");
  };

  return (
    <>
      <Label>
        Type, paste or click to enter chords.
        <br />
        Highlighted chords are diatonic chords (in the {rootTonality} scale).
      </Label>

      <ButtonRow>
        {MAJOR_CHORDS.map((chord) => (
          <Button
            $highlight={(rootTonality === "major"
              ? MAJOR_DIATONIC_CHORDS
              : MINOR_DIATONIC_CHORDS
            ).includes(chord)}
            key={chord}
            onClick={() => handleChordButtonClick(chord)}
          >
            {chord}
          </Button>
        ))}
      </ButtonRow>
      <ButtonRow>
        {MINOR_CHORDS.map((chord) => (
          <Button
            $highlight={(rootTonality === "major"
              ? MAJOR_DIATONIC_CHORDS
              : MINOR_DIATONIC_CHORDS
            ).includes(chord)}
            key={chord}
            onClick={() => handleChordButtonClick(chord)}
          >
            {chord}
          </Button>
        ))}
      </ButtonRow>
      <ButtonRow>
        <Button onClick={handleBackspaceButtonClick} title="Backspace">
          ⌫
        </Button>
        <Button onClick={handleEnterButtonClick} title="Enter">
          ↵
        </Button>
        <Button onClick={handleClearButtonClick}>Clear</Button>
      </ButtonRow>
      <TextArea
        rows={4}
        onChange={(evt) => setInputValue(evt.target.value)}
        placeholder="Type chords in Roman numeral notation e.g. I, vi"
        value={inputValue}
      />
    </>
  );
};

export default Input;
