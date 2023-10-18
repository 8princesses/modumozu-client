import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import styled from "styled-components";
import Button from "../Button";
import { FC, useState } from "react";
import SelectDate from "@/components/account/SelectDate";
import SmallModalBox from "../SmallModalBox";
import { ModalData, initalModalData } from "@/components/mypage/MenuSection";
import { myAccountType } from "@/types";
import { deleteMyAccount } from "@/api/account";

interface BottomSheetAccountMenuProps {
  /**
   * 수정 대상 계좌
   */
  selectedAccount: myAccountType;
  /**
   * 모달 창 끄기 핸들러
   */
  handleClose: () => void;
}

const BottomSheetAccountMenu: FC<BottomSheetAccountMenuProps> = (props) => {
  const { selectedAccount, handleClose } = props;
  const [isShowingSelectDate, setIsShowingSelectDate] = useState(false);
  const [isShowingDeleteModal, setIsShowingDeleteModal] = useState<ModalData>(initalModalData);

  return (
    <BottomSheetAccountMenuWrapper>
      <BottomSheetButtonGroup>
        <button onClick={() => setIsShowingSelectDate(true)}>개설일 수정</button>
        <button
          onClick={() =>
            setIsShowingDeleteModal({
              title: "계좌를 삭제하시겠습니까?",
              buttonText: ["취소", "확인"],
              handlePrimaryButtonClick: () => setIsShowingDeleteModal(initalModalData),
            })
          }
        >
          계좌 삭제
        </button>
      </BottomSheetButtonGroup>
      <Button color="secondary" width="100%" fill={false} $font="BUTTON1_REGULAR" onClick={handleClose}>
        닫기
      </Button>
      <SelectDate
        selectedAccount={selectedAccount}
        visible={isShowingSelectDate}
        setInvisible={() => setIsShowingSelectDate(false)}
      ></SelectDate>
      <SmallModalBox
        visible={isShowingDeleteModal.title.length > 0}
        title={isShowingDeleteModal.title}
        buttonText={isShowingDeleteModal.buttonText}
        handlePrimaryButtonClick={() => {
          deleteMyAccount(selectedAccount.id);
          window.location.reload();
        }}
        setIsModalShowing={setIsShowingDeleteModal}
      />
    </BottomSheetAccountMenuWrapper>
  );
};

export default BottomSheetAccountMenu;

const BottomSheetButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  button {
    padding-block: 12px;
    width: 100%;
    text-align: left;
    color: ${colors.FONT_LIGHT.PRIMARY};
    ${getFonts("H6_REGULAR")};
  }
`;

const BottomSheetAccountMenuWrapper = styled.div`
  margin-bottom: 20px;
`;
