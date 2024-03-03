import styled from "styled-components";

import pxToRem from "$utils/pxToRem";

const BUTTON_SIZE = 40;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${pxToRem(8)};
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: ${pxToRem(BUTTON_SIZE / 4)};
  margin: ${pxToRem(16)} 0;
`;

interface ButtonProps {
  $highlight?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: ${pxToRem(BUTTON_SIZE / 2)};
  border: ${pxToRem(2)} solid black;
  height: ${pxToRem(BUTTON_SIZE)};
  min-width: fit-content;
  padding: ${pxToRem(8)};
  width: ${pxToRem(BUTTON_SIZE)};

  &:hover {
    cursor: pointer;
  }

  ${({ $highlight }) =>
    $highlight
      ? `
          background-color: palegreen;

          &:hover {
            background-color: springgreen;
          }
        `
      : `
          background-color: gainsboro;

          &:hover {
            background-color: silver;
          }
        `};
`;
