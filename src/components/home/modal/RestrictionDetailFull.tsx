import { FullScreenModalDescription } from "@/components/account/AddAccount";
import FullScreenModal from "@/components/common/FullScreenModal";
import RelatedBankBox from "@/components/common/RelatedBankBox";
import colors from "@/styles/colors";
import { getBankName } from "@/util/getBankName";
import { getRelatedBankListCnt, getRelatedBankMap } from "@/util/getRelatedBankList";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import { FC } from "react";

interface RestrictionDetailFullProps {
  isShowingDetailModal: boolean;
  isShowingRestrictionBottomSheet: number;
  handleClose: () => void;
}

const RestrictionDetailFull: FC<RestrictionDetailFullProps> = (props) => {
  const { isShowingDetailModal, isShowingRestrictionBottomSheet, handleClose } = props;
  return (
    <FullScreenModal visible={isShowingDetailModal} setInvisible={handleClose}>
      <FullScreenModalDescription>
        <h2>
          다음 증권사들은 연계된
          <br /> 은행을 통해 개설 제한 없이
          <br /> 신규 계좌를 만들 수 있어요.
        </h2>
        <p>
          {getBankName(isShowingRestrictionBottomSheet)} 외 {getRelatedBankListCnt() - 1} 개 증권사들은 20일 이내에 계좌
          개설 내역이 있을 경우, 신규 계좌 개설을 제한하지만 일부 증권사는 연계된 은행을 통해 제한없이 만들 수 있어요.
        </p>
      </FullScreenModalDescription>
      {Array.from(getRelatedBankMap()).map(([k]) => (
        <RelatedBankBox key={k} name={k} />
      ))}
      <ModalCaption>*증권사 별 연계 은행은 시기에 따라 변경될 수 있습니다.</ModalCaption>
    </FullScreenModal>
  );
};

export default RestrictionDetailFull;

const ModalCaption = styled.div`
  ${getFonts("BODY1_REGULAR")}
  color: ${colors.FONT_LIGHT.TERIARY};
`;
