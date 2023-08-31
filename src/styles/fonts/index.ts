export const fonts = {
  H1: {
    size: "32px",
    weight: 700,
    height: "38px",
  },
  H2_BOLD: {
    size: "26px",
    weight: 700,
    height: "31px",
  },
  H2_SEMIBOLD: {
    size: "26px",
    weight: 600,
    height: "31px",
  },
  H2_REGULAR: {
    size: "26px",
    weight: 400,
    height: "31px",
  },
  H3_BOLD: {
    size: "22px",
    weight: 700,
    height: "30px",
  },
  H3_SEMIBOLD: {
    size: "22px",
    weight: 600,
    height: "30px",
  },
  H3_REGULAR: {
    size: "22px",
    weight: 400,
    height: "30px",
  },
  H4_BOLD: {
    size: "18px",
    weight: 700,
    height: "24px",
  },
  H4_SEMIBOLD: {
    size: "18px",
    weight: 600,
    height: "24px",
  },
  H4_REGULAR: {
    size: "18px",
    weight: 400,
    height: "24px",
  },
  H5_BOLD: {
    size: "15px",
    weight: 700,
    height: "19px",
  },
  H5_SEMIBOLD: {
    size: "15px",
    weight: 600,
    height: "19px",
  },
  H5_REGULAR: {
    size: "15px",
    weight: 400,
    height: "19px",
  },
  BODY1_BOLD: {
    size: "15px",
    weight: 700,
    height: "23px",
  },
  BODY1_SEMIBOLD: {
    size: "15px",
    weight: 600,
    height: "23px",
  },
  BODY1_REGULAR: {
    size: "15px",
    weight: 400,
    height: "23px",
  },
  BODY2_BOLD: {
    size: "12px",
    weight: 700,
    height: "normal",
  },
  BODY2_SEMIBOLD: {
    size: "12px",
    weight: 600,
    height: "normal",
  },
  BODY2_REGULAR: {
    size: "12px",
    weight: 400,
    height: "normal",
  },
  BODY3_BOLD: {
    size: "11px",
    weight: 700,
    height: "normal",
  },
  BODY3_REGULAR: {
    size: "11px",
    weight: 400,
    height: "normal",
  },
  BUTTON1_BOLD: {
    size: "14px",
    weight: 700,
    height: "14px",
  },
  BUTTON1_REGULAR: {
    size: "14px",
    weight: 400,
    height: "14px",
  },
  BUTTON2_BOLD: {
    size: "11px",
    weight: 700,
    height: "11px",
  },
  BUTTON2_REGULAR: {
    size: "11px",
    weight: 400,
    height: "11px",
  },
  CAPTION_BOLD: {
    size: "10px",
    weight: 700,
    height: "normal",
  },
  CAPTION_REGULAR: {
    size: "10px",
    weight: 400,
    height: "normal",
  },
};

type FontTypes = keyof typeof fonts;

export const getFonts = (font: FontTypes) => {
  return `
    font-size: ${fonts[font].size};
    font-weight: ${fonts[font].weight};
    line-height: ${fonts[font].height};
  `;
};
export default fonts;
