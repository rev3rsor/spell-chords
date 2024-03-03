import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { TextArea } from "$components/styles/TextArea";
import inputValueAtom, { withIsValid } from "$recoil/inputValue";
import rootKeyAtom from "$recoil/rootKey";
import rootTonalityAtom from "$recoil/rootTonality";
import { replaceChordsFromRomanNumeralString } from "$utils/chordUtils";

import { Label } from "./styles";

const Output = () => {
  const rootKey = useRecoilValue(rootKeyAtom);
  const rootTonality = useRecoilValue(rootTonalityAtom);
  const inputValue = useRecoilValue(inputValueAtom);
  const isValidInputValue = useRecoilValue(withIsValid);

  const [lastValidResult, setLastValidResult] = useState("");

  useEffect(() => {
    if (!inputValue) {
      setLastValidResult("");
    } else if (inputValue && isValidInputValue) {
      setLastValidResult(
        replaceChordsFromRomanNumeralString(inputValue, rootKey, rootTonality)
      );
    }
  }, [rootKey, inputValue, isValidInputValue]);

  return (
    <Label>
      Result
      <TextArea readOnly rows={4} value={lastValidResult} />
    </Label>
  );
};

export default Output;
