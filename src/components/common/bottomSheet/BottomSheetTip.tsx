import { FC } from "react";
import { BottomSheetTitle } from "./BottomSheetTitle";
import Button from "../Button";
import styled from "styled-components";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { BottomSheetButton } from "./BottomSheetGuide";
import { getRelatedBankList, getRelatedBankListCnt } from "@/util/getRelatedBankList";

interface BottomSheetTipProps {
  /**
   * 증권사 이름
   */
  investmentBankName: string;
  /**
   * 더보기 버튼 클릭 핸들러
   */
  handleButtonClick: () => void;
  /**
   * 닫기 버튼 클릭 핸들러
   */
  handleClose: () => void;
}

export const BottomSheetTip: FC<BottomSheetTipProps> = (props) => {
  const { investmentBankName, handleButtonClick, handleClose } = props;
  const relatedBanks: string[] = getRelatedBankList(investmentBankName);
  const relatedBanksText = relatedBanks.reduce(
    (acc, cur, idx) => (idx < relatedBanks.length - 1 ? acc + cur + ", " : acc + cur),
    "",
  );

  return (
    <>
      <BottomSheetTitle>
        <h2>제한 해제 팁</h2>
      </BottomSheetTitle>
      <BottomSheetTipContent>
        <p>
          <span>{investmentBankName}</span>은 다음 앱을 통해 개설 제한없이 신규 개좌 개설이 가능해요.
        </p>
        <RelatedBankList>{relatedBanksText} 앱</RelatedBankList>
        <p>
          {investmentBankName} 외 {getRelatedBankListCnt() - 1} 개 증권사들은 20일 이내에 계좌 개설 내역이 있을 경우,
          신규 계좌 개설을 제한하지만 일부 증권사는 연계된 은행을 통해 제한없이 만들 수 있어요.
        </p>
      </BottomSheetTipContent>
      <MoreButton color="secondary" width="100%" $font="BUTTON1_SEMIBOLD" onClick={handleButtonClick}>
        다른 증권사 팁 더보기
      </MoreButton>
      <BottomSheetButton color="secondary" fill={false} width="100%" $font="BUTTON1_REGULAR" onClick={handleClose}>
        닫기
      </BottomSheetButton>
    </>
  );
};

const BottomSheetTipContent = styled.div`
  ${getFonts("BODY1_REGULAR")}
  color: ${colors.FONT_LIGHT.SECONDARY};
  margin-bottom: 24px;

  span {
    color: ${colors.FONT.PRIMARY};
  }
`;

const RelatedBankList = styled.div`
  margin-block: 16px;
  padding: 20px;
  background-color: ${colors.GRAY[1]};
  border: 1px solid ${colors.GRAY[2]};
  border-radius: 6px;
  color: ${colors.FONT_LIGHT.PRIMARY};
  ${getFonts("H5_SEMIBOLD")};
`;

const MoreButton = styled(Button)`
  margin-bottom: 8px;
`;
