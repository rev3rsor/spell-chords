export const ROOT_FONT_SIZE = 16;

const pxToRem = (px: number): string => `${px / ROOT_FONT_SIZE}rem`;

export default pxToRem;
