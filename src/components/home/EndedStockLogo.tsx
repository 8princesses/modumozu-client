import Image from "next/image";
import { FC } from "react";
import { styled } from "styled-components";
import companyLogo from "../../../public/images/company_logo.png";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import NoUi from "@/svg/NoUi";

interface LogoProps {
  path: string;
  isPublic: boolean;
}

const EndedStockLogo: FC<LogoProps> = (props) => {
  const { path, isPublic } = props;
  const logoPath = path.length > 0 ? path : companyLogo;
  return (
    <LogoImage>
      {isPublic && <Overlay>상장 완료</Overlay>}
      {path.length > 0 ? <Image src={logoPath} width="100" height="100" alt="company logo" /> : <NoUi />}
    </LogoImage>
  );
};

export default EndedStockLogo;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 165px;
  height: 120px;
  background: linear-gradient(0deg, #f7f8f9, #f7f8f9), linear-gradient(0deg, #e8ebed, #e8ebed);
  border: 1px solid ${colors.GRAY[2]};
  border-radius: 12px;
  margin-bottom: 8px;
  filter: grayscale(1);
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 165px;
  height: 120px;
  background-color: ${colors.BLACK_TRANSPARENT_SCALE[9]};
  border-radius: 12px;
  color: ${colors.WHITE_TRANSPARENT_SCALE[2]};
  ${getFonts("H4_SEMIBOLD")};
`;
