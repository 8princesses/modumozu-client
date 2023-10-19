import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import BankIcon from "@/svg/BankIcon";
import { getRelatedBankList } from "@/util/getRelatedBankList";
import styled from "styled-components";

const RelatedBankBox = ({ name }: { name: string }) => {
  return (
    <BoxWrapper>
      <BoxTitle>
        <BankIcon width={20} height={20} color={colors.ON.PRIMARY} />
        <h5>{name}</h5>
      </BoxTitle>
      <BoxContent>
        {getRelatedBankList(name).map((item, idx) => (
          <span key={item}>{(idx !== 0 ? ", " : "") + item}</span>
        ))}
      </BoxContent>
    </BoxWrapper>
  );
};

export default RelatedBankBox;

const BoxWrapper = styled.div``;

const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  ${getFonts("H5_SEMIBOLD")}
  color: ${colors.FONT.PRIMARY};
  margin-bottom: 8px;

  h5 {
    margin-left: 4px;
  }
`;

const BoxContent = styled.div`
  background-color: ${colors.WHITE};
  padding: 20px 16px 20px 16px;
  border: 1px solid ${colors.GRAY[2]};
  border-radius: 6px;
  margin-bottom: 24px;
`;
