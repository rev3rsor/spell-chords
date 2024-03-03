import { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import rootKeyAtom from "$recoil/rootKey";
import rootTonalityAtom, { TONALITIES, Tonality } from "$recoil/rootTonality";
import { type Keys, MAJOR_KEY_OPTIONS, MINOR_KEY_OPTIONS } from "$utils/keys";
import {
  Container,
  EnharmonicInputContainer,
  RadioInput,
  RadioLabel,
  Select,
  SelectorContainer,
} from "./styles";
import { getEnharmonic } from "$utils/chordUtils";

const tonalityLabels: Record<Tonality, string> = {
  major: "Major",
  minor: "Minor",
};

const RootKeySelector = () => {
  const [rootKey, setRootKey] = useRecoilState(rootKeyAtom);
  const [rootTonality, setRootTonality] = useRecoilState(rootTonalityAtom);

  const [keyOptions, setKeyOptions] = useState<Keys[]>(
    rootTonality === "major" ? MAJOR_KEY_OPTIONS : MINOR_KEY_OPTIONS
  );

  const enharmonic = getEnharmonic(rootKey);

  useEffect(() => {
    const newKeyOptions =
      rootTonality === "major" ? MAJOR_KEY_OPTIONS : MINOR_KEY_OPTIONS;

    if (!newKeyOptions.includes(rootKey)) {
      setRootKey(getEnharmonic(rootKey)!);
    }

    setKeyOptions(newKeyOptions);
  }, [rootTonality]);

  return (
    <Container>
      <label htmlFor="key-selector">Select root key:</label>
      <br />
      <SelectorContainer>
        <Select
          id="key-selector"
          onChange={(evt) => setRootKey(evt.target.value as Keys)}
          value={
            keyOptions.includes(rootKey) ? rootKey : getEnharmonic(rootKey)
          }
        >
          {keyOptions.map((key) => (
            <option key={key} value={key}>
              {(() => {
                const minorSuffix = rootTonality === "minor" ? "m" : "";
                const enharmonic = getEnharmonic(key);

                return `${key}${minorSuffix}${
                  enharmonic ? ` (${enharmonic}${minorSuffix})` : ""
                }`;
              })()}
            </option>
          ))}
        </Select>

        {TONALITIES.map((tonality) => (
          <Fragment key={tonality}>
            <RadioInput
              checked={tonality === rootTonality}
              id={tonality}
              name="tonality"
              onChange={(evt) => setRootTonality(evt.target.value as Tonality)}
              type="radio"
              value={tonality}
            />
            <RadioLabel htmlFor={tonality}>
              {tonalityLabels[tonality]}
            </RadioLabel>
          </Fragment>
        ))}
      </SelectorContainer>

      <EnharmonicInputContainer>
        {enharmonic ? (
          <>
            <input
              id="use-enharmonic"
              defaultChecked={false}
              name="use-enharmonic"
              onChange={() => setRootKey((prev) => getEnharmonic(prev)!)}
              type="checkbox"
            />
            <label htmlFor="use-enharmonic">Use enharmonic</label>
          </>
        ) : null}
      </EnharmonicInputContainer>
    </Container>
  );
};

export default RootKeySelector;
