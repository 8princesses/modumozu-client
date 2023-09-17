export const fonts = {
  H1_BOLD: {
    size: "26px",
    weight: 700,
    height: "31px",
    spacing: "0px",
  },
  H1_SEMIBOLD: {
    size: "26px",
    weight: 600,
    height: "31px",
    spacing: "-0.2px",
  },
  H1_REGULAR: {
    size: "26px",
    weight: 400,
    height: "31px",
    spacing: "-0.2px",
  },
  H2_BOLD: {
    size: "24px",
    weight: 700,
    height: "30px",
    spacing: "0px",
  },
  H2_SEMIBOLD: {
    size: "24px",
    weight: 600,
    height: "30px",
    spacing: "-0.2px",
  },
  H2_REGULAR: {
    size: "26px",
    weight: 400,
    height: "30px",
    spacing: "-0.2px",
  },
  H3_BOLD: {
    size: "20px",
    weight: 700,
    height: "24px",
    spacing: "0px",
  },
  H3_SEMIBOLD: {
    size: "20px",
    weight: 600,
    height: "24px",
    spacing: "-0.3px",
  },
  H3_REGULAR: {
    size: "20px",
    weight: 400,
    height: "24px",
    spacing: "-0.3px",
  },
  H4_BOLD: {
    size: "18px",
    weight: 700,
    height: "21px",
    spacing: "-0.3px",
  },
  H4_SEMIBOLD: {
    size: "18px",
    weight: 600,
    height: "21px",
    spacing: "-0.3px",
  },
  H4_REGULAR: {
    size: "18px",
    weight: 400,
    height: "21px",
    spacing: "-0.3px",
  },
  H5_BOLD: {
    size: "15px",
    weight: 700,
    height: "20px",
    spacing: "-0.3px",
  },
  H5_SEMIBOLD: {
    size: "15px",
    weight: 600,
    height: "20px",
    spacing: "-0.3px",
  },
  H5_MEDIUM: {
    size: "15px",
    weight: 500,
    height: "20px",
    spacing: "-0.3px",
  },
  H5_REGULAR: {
    size: "15px",
    weight: 400,
    height: "20px",
    spacing: "-0.3px",
  },
  H6_BOLD: {
    size: "14px",
    weight: 700,
    height: "19px",
    spacing: "-0.3px",
  },
  H6_SEMIBOLD: {
    size: "14px",
    weight: 600,
    height: "19px",
    spacing: "-0.3px",
  },
  H6_REGULAR: {
    size: "14px",
    weight: 400,
    height: "19px",
    spacing: "-0.3px",
  },
  BODY1_BOLD: {
    size: "15px",
    weight: 700,
    height: "23px",
    spacing: "-0.4px",
  },
  BODY1_SEMIBOLD: {
    size: "15px",
    weight: 600,
    height: "23px",
    spacing: "-0.34x",
  },
  BODY1_REGULAR: {
    size: "15px",
    weight: 400,
    height: "23px",
    spacing: "-0.34x",
  },
  BODY2_BOLD: {
    size: "12px",
    weight: 700,
    height: "normal",
    spacing: "-0.4px",
  },
  BODY2_SEMIBOLD: {
    size: "12px",
    weight: 600,
    height: "normal",
    spacing: "-0.4px",
  },
  BODY2_REGULAR: {
    size: "12px",
    weight: 400,
    height: "normal",
    spacing: "-0.34x",
  },
  BODY3_BOLD: {
    size: "11px",
    weight: 700,
    height: "normal",
    spacing: "-0.4px",
  },
  BODY3_REGULAR: {
    size: "11px",
    weight: 400,
    height: "normal",
    spacing: "-0.4px",
  },
  BUTTON1_BOLD: {
    size: "14px",
    weight: 700,
    height: "14px",
    spacing: "-0.34x",
  },
  BUTTON1_SEMIBOLD: {
    size: "14px",
    weight: 600,
    height: "14px",
    spacing: "-0.34x",
  },
  BUTTON1_REGULAR: {
    size: "14px",
    weight: 400,
    height: "14px",
    spacing: "-0.4px",
  },
  BUTTON2_BOLD: {
    size: "12px",
    weight: 700,
    height: "12px",
    spacing: "-0.3px",
  },
  BUTTON2_SEMIBOLD: {
    size: "12px",
    weight: 600,
    height: "12px",
    spacing: "-0.3px",
  },
  BUTTON2_REGULAR: {
    size: "12px",
    weight: 400,
    height: "12px",
    spacing: "-0.3px",
  },
  CAPTION1_BOLD: {
    size: "13px",
    weight: 700,
    height: "15px",
    spacing: "-0.4px",
  },
  CAPTION1_SEMIBOLD: {
    size: "13px",
    weight: 600,
    height: "15px",
    spacing: "-0.4px",
  },
  CAPTION1_MEDIUM: {
    size: "13px",
    weight: 500,
    height: "15px",
    spacing: "-0.4px",
  },
  CAPTION1_REGULAR: {
    size: "13px",
    weight: 400,
    height: "15px",
    spacing: "-0.4px",
  },
  CAPTION2_BOLD: {
    size: "10px",
    weight: 700,
    height: "10px",
    spacing: "-0.4px",
  },
  CAPTION2_SEMIBOLD: {
    size: "10px",
    weight: 600,
    height: "10px",
    spacing: "-0.4px",
  },
  CAPTION2_REGULAR: {
    size: "10px",
    weight: 400,
    height: "10px",
    spacing: "-0.4px",
  },
};

export type FontTypes = keyof typeof fonts;

export const getFonts = (font: FontTypes) => {
  return `
    font-size: ${fonts[font].size};
    font-weight: ${fonts[font].weight};
    line-height: ${fonts[font].height};
    letter-spacing: ${fonts[font].spacing};
  `;
};
export default fonts;
