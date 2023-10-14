import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import MenuIcon from "@/svg/MenuIcon";
import { getBankName } from "@/util/getBankName";
import getInvestmentBankLogo from "@/util/getInvestmentBankLogo";
import Image from "next/image";
import styled from "styled-components";
import Button from "../common/Button";
import { myAccountType } from "@/service/apiService";
import { FC, useState } from "react";
import AddAccount from "./AddAccount";
import { BottomSheet } from "../common/bottomSheet/BottomSheet";
import BottomSheetAccountMenu from "../common/bottomSheet/BottomSheetAccountMenu";

interface AccountsProps {
  myAccounts: myAccountType[];
}

const Accounts: FC<AccountsProps> = (props) => {
  const { myAccounts } = props;
  const [isShowingAddModal, setIsShowingAddModal] = useState(false);
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<myAccountType>({
    id: "",
    agentId: 0,
    registeredAt: "",
  });

  return (
    <>
      <Description>
        <h4>신규 개설 계좌가 있으신가요?</h4>
        <p>
          보유 계좌를 추가하고 더 정확한
          <br /> 공모주 일정을 확인하세요.
        </p>
      </Description>
      <AccountList>
        <h4>보유 계좌</h4>
        {myAccounts.map((account: myAccountType) => (
          <AccountItem key={account.id}>
            <AccountItemLogo>
              <Image
                width={60}
                height={60}
                src={getInvestmentBankLogo(account.agentId)}
                alt={getBankName(account.agentId) ?? "logo"}
              />
            </AccountItemLogo>
            <AccountItemInfo>
              <div>
                <h6>{getBankName(account.agentId)}</h6>
                <p>{account.registeredAt} 개설</p>
              </div>
              <MenuIcon
                onClick={() => {
                  setIsShowingMenu(true);
                  setSelectedAccount(account);
                }}
              />
            </AccountItemInfo>
          </AccountItem>
        ))}
      </AccountList>
      <ButtonSection>
        <Button width="100%" $font="BUTTON1_SEMIBOLD" onClick={() => setIsShowingAddModal(true)}>
          보유 계좌 추가
        </Button>
      </ButtonSection>
      <AddAccount visible={isShowingAddModal} setInvisible={() => setIsShowingAddModal(false)} />
      <BottomSheet visible={isShowingMenu} handleOverlayClick={() => setIsShowingMenu(false)}>
        <BottomSheetAccountMenu selectedAccount={selectedAccount} handleClose={() => setIsShowingMenu(false)} />
      </BottomSheet>
    </>
  );
};

export default Accounts;

const Description = styled.article`
  background-color: ${colors.GRAY[5]};
  padding: 24px 20px 20px 20px;

  h4 {
    color: ${colors.WHITE};
    margin-bottom: 12px;
    ${getFonts("H4_SEMIBOLD")}
  }

  p {
    color: ${colors.GRAY[2]};
    ${getFonts("H6_REGULAR")}
  }
`;

const AccountList = styled.div`
  margin-top: 32px;
  padding-inline: 16px;
  padding-bottom: 80px;

  h4 {
    ${getFonts("H4_SEMIBOLD")}
    padding-bottom: 12px;
  }
`;

const AccountItem = styled.div`
  display: flex;
  border: 1px solid ${colors.GRAY[2]};
  border-radius: 16px;
  margin-bottom: 12px;
`;

const AccountItemLogo = styled.div`
  padding: 10px;
  border-right: 1px solid ${colors.GRAY[2]};
`;

const AccountItemInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 21px 9px 21px 12px;

  h6 {
    ${getFonts("H6_SEMIBOLD")}
    color: ${colors.FONT_LIGHT.PRIMARY};
    margin-bottom: 4px;
  }

  p {
    ${getFonts("CAPTION1_REGULAR")}
    color: ${colors.FONT_LIGHT.SECONDARY};
  }
`;

const ButtonSection = styled.section`
  position: fixed;
  width: 343px;
  bottom: 0;
  margin: 16px 16px 20px 16px;
`;
