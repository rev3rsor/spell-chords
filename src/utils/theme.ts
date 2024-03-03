export const colours = {};

// browsers always use 16px for rem for media queries
const pxToRemMedia = (px: number) => `${px / 16}rem`;

export const media = {
  smallDown: pxToRemMedia(480),
  smallUp: pxToRemMedia(481),
};
