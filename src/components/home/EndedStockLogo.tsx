import Image from "next/image";
import { FC } from "react";
import { styled } from "styled-components";

interface LogoProps {
  path: string;
  isPublic: boolean;
}

const EndedStockLogo: FC<LogoProps> = (props) => {
  const { path, isPublic } = props;
  return (
    <LogoImage>
      <Image src={path} width="100" height="100" alt="company logo" />
    </LogoImage>
  );
};

export default EndedStockLogo;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165.5px;
  height: 120px;
  background: linear-gradient(0deg, #f7f8f9, #f7f8f9), linear-gradient(0deg, #e8ebed, #e8ebed);
  border: 1px solid #e8ebed;
  border-radius: 12px;
  margin-bottom: 8px;
`;
