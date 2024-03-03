import styled from "styled-components";

import pxToRem from "$utils/pxToRem";

export const Container = styled.div`
  display: block;
  margin: ${pxToRem(24)} auto;
  width: fit-content;
`;

export const SelectorContainer = styled.div`
  align-items: center;
  display: flex;
  margin: ${pxToRem(16)} 0;
`;

export const Select = styled.select`
  font-size: ${pxToRem(16)};
  margin-inline-end: ${pxToRem(16)};
  padding: ${pxToRem(8)};
  width: ${pxToRem(127)};
`;

export const RadioInput = styled.input`
  margin-inline-end: ${pxToRem(4)};
`;

export const RadioLabel = styled.label`
  &:not(:last-child) {
    margin-inline-end: ${pxToRem(8)};
  }
`;

export const EnharmonicInputContainer = styled.div`
  height: ${pxToRem(20)};
`;
