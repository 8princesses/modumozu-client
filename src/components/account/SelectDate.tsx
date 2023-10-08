import Button from "../common/Button";
import { BottomSheet } from "../common/bottomSheet/BottomSheet";
import { BottomSheetTitle } from "../common/bottomSheet/BottomSheetTitle";

interface SelectDateProps {
  handleClose: () => void;
}

const SelectDate = (props: SelectDateProps) => {
  const { handleClose } = props;
  return (
    <BottomSheet handleOverlayClick={handleClose}>
      <div>
        <BottomSheetTitle>
          <h2>계좌 개설일을 선택해주세요.</h2>
        </BottomSheetTitle>
        <ul>
          <li>계좌 개설일을 알려주시면 청약 가능한 공모주를 정확하게 알려드려요.</li>
          <li>
            유진증권, 삼성증권, 키움증권, 한화투자증권을 제외한 증권사들은 20일 내에 계좌 개설 내역이 있을 경우 신규
            계좌 개설을 제한하고 있어요.
          </li>
        </ul>
        <input type="date" placeholder="개설일 선택" />
        <div>
          <Button color="primary" width="100%" $font="BUTTON1_SEMIBOLD" disabled={true} onClick={handleClose}>
            선택완료
          </Button>
          <Button color="secondary" fill={false} width="100%" $font="BUTTON1_REGULAR" onClick={handleClose}>
            닫기
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default SelectDate;
