import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

type Color = "primary" | "secondary";
type Size = "large" | "small";
type Shape = "rectangle" | "round";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 색상
   */
  color?: Color;
  /**
   * 크기
   */
  size?: Size;
  /**
   * 모양
   * 사각형, 타원
   */
  shape?: Shape;
  /**
   * 버튼 내부 색 여부
   */
  fill?: boolean;
  /**
   * 크기 default = auto
   */
  width?: string;
  /**
   * 비활성화 여부
   */
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { disabled = false, children, width = "auto%", onClick, ...rest } = props;
  return (
    <ButtonStyle {...rest} width={width} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const getColor = ({ color = "primary", fill = true, disabled = false }: ButtonProps) => {
  if (disabled) {
    return getDisabled(fill);
  }
  if (color === "primary") {
    if (fill) {
      return `
        background-color: ${colors.BLUE[5]};
        color: ${colors.WHITE};
        &: hover {
          opacity: 0.8;
        }
        &: active {
          background-color: ${colors.BLUE[6]}
        }
      `;
    }
    return `
      background-color: ${colors.WHITE};
      border: 1px solid ${colors.BLUE[1]};
      color: ${colors.BLUE[5]};
      &: hover {
        opacity: 0.8;
      }
      &: active {
        background-color: rgba(212, 226, 254, 0.50);
      }
    `;
  }
  if (fill) {
    return `
      background-color: ${colors.GRAY[6]};
      color: ${colors.WHITE};
      &: hover {
        opacity: 0.8;
      }
      &: active {
        background-color: ${colors.GRAY[7]}
      }
    `;
  }
  return `
    background-color: ${colors.WHITE};
    border: 1px solid ${colors.GRAY[2]};
    color: ${colors.FONT_LIGHT.PRIMARY};
    &: hover {
      opacity: 0.8;
    }
    &: active {
      background-color: ${colors.GRAY[1]}
    }
  `;
};
const getDisabled = (fill = true) => {
  if (fill) {
    return `
      background-color: ${colors.GRAY[6]};
      color:${colors.WHITE};
    `;
  }
  return `
    background-color: ${colors.WHITE};
    color:${colors.FONT_LIGHT.PRIMARY};
    outline: 1px solid ${colors.GRAY[2]}
  `;
};
const getShape = ({ shape = "rectangle", size = "large" }: ButtonProps) => {
  if (size === "small") {
    if (shape === "rectangle") {
      return `
        ${getSize(size)}
        border-radius: 4px;
      `;
    }
    return `
        ${getSize(size)}
        border-radius: 16px;
      `;
  }
  if (shape === "rectangle") {
    return `
        ${getSize(size)}
        border-radius: 6px;
      `;
  }
  return `
  ${getSize(size)}
  border-radius: 23px;
`;
};
const getSize = (size: Size = "large") => {
  if (size === "large") {
    return `
      height: 46px;
      padding: 16px 20px;
    `;
  }
  return `
    height: 28px;
    padding: 8px 16px;
  `;
};

const ButtonStyle = styled.button<ButtonProps>`
  box-sizing: border-box;
  outline: 0;
  border: 0;
  ${(props) => `
    width: ${props.width};
    ${props.size === "large" ? getFonts("BUTTON1_BOLD") : getFonts("BUTTON2_BOLD")}
    ${getColor(props)}
    ${getShape(props)} 
  `};
`;
