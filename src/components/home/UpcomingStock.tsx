import { ReactNode, useState } from "react";
import { FC } from "react";
import HeartIcon from "@/svg/HeartIcon";
import styled from "styled-components";
import colors from "@/styles/colors";
import MoneyIcon from "@/svg/MoneyIcon";
import BankIcon from "@/svg/BankIcon";
import { getFonts } from "@/styles/fonts";
import DangerIcon from "@/svg/DangerIcon";
import Button from "../common/Button";
import { getBankName } from "@/util/getBankName";
import Badge from "../common/Badge";
import { useSetRecoilState } from "recoil";
import { ToastAtom } from "@/recoil/toastState";
import { modifyInterestingStock } from "@/api/interesting";
import { getDiffDate } from "@/util/getDiffDate";

interface UpcomingStockProps {
  children: ReactNode;
}
interface UpcomingStockStatusProps {
  startDate: string;
  endDate: string;
}
interface UpcomingStockCardProps {
  id: number;
  category: string;
  title: string;
  children?: ReactNode;
  price: [number, number];
  account: number[];
  nonRemainAccounts: number[];
  love: boolean;
  cardType: string;
  proposalAgent: number;
  proposalEndDate: string;
  onClick?: () => void;
  handleCardClick?: () => void;
}

const UpcomingStockMain: FC<UpcomingStockProps> = ({ children }) => {
  return <article>{children}</article>;
};
const UpcomingStockStatus: FC<UpcomingStockStatusProps> = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const current = new Date();
  const today = new Date(current.getFullYear() + "-" + (current.getMonth() + 1) + "-" + current.getDate());
  const diff = getDiffDate(startDate);

  if (today < start) {
    return (
      <UpcomingStockStatusWrap>
        <UpcomingStockStatusLabel color={colors.FONT_LIGHT.TERIARY}>D - {diff} </UpcomingStockStatusLabel>
        <span>{`청약일 ${start.getMonth() + 1 + "월 " + start.getDate() + "일"}`}</span>
      </UpcomingStockStatusWrap>
    );
  }
  if (today <= end) {
    return (
      <UpcomingStockStatusWrap>
        <Dot />
        <UpcomingStockStatusLabel color={colors.FONT.ACCENT}> 진행 중 </UpcomingStockStatusLabel>
        <span>{`마감일 ${end.getMonth() + 1 + "월 " + end.getDate() + "일"}`}</span>
      </UpcomingStockStatusWrap>
    );
  }
};
const UpcomingStockCard: FC<UpcomingStockCardProps> = (props) => {
  const {
    id,
    category,
    title,
    price,
    love,
    account,
    nonRemainAccounts,
    cardType,
    onClick,
    proposalEndDate,
    proposalAgent,
    handleCardClick,
  } = props;
  const endDate = new Date(proposalEndDate);
  const [pinned, setPinned] = useState(love);
  const setToastString = useSetRecoilState(ToastAtom);

  const renderSubscription = () => {
    switch (cardType) {
      case "B":
        return (
          <UpcomingStockSubscriptionWrap>
            <UpcomingStockSubscriptionDisableWrap>
              <DangerIcon />
              <UpcomingStockSubscriptionDisableText>청약불가</UpcomingStockSubscriptionDisableText>
              <UpcomingStockSubscriptionText>계좌 개설 가능 기간이 지났어요.</UpcomingStockSubscriptionText>
            </UpcomingStockSubscriptionDisableWrap>
          </UpcomingStockSubscriptionWrap>
        );
      case "C":
        return (
          <UpcomingStockSubscriptionWrap>
            <span>
              <UpcomingStockSubscriptionDateText>
                {getBankName(proposalAgent)?.slice(0, -2) + " "}
              </UpcomingStockSubscriptionDateText>
              <UpcomingStockSubscriptionText>
                {endDate.getMonth() + 1 + "월" + endDate.getDate() + "일까지 개설 필요"}
              </UpcomingStockSubscriptionText>
            </span>
            <Button shape="round" size="small" onClick={onClick}>
              계좌 개설
            </Button>
          </UpcomingStockSubscriptionWrap>
        );
      case "E":
        return (
          <UpcomingStockSubscriptionWrap>
            <UpcomingStockSubscriptionText>신규 계좌 개설이 제한되었습니다.</UpcomingStockSubscriptionText>
            <Button color="secondary" shape="round" size="small" onClick={onClick}>
              제한 해제
            </Button>
          </UpcomingStockSubscriptionWrap>
        );
      default:
        return null;
    }
  };

  return (
    <UpcomingStockCardWarp>
      <UpcomingStockCardClick
        onClick={(e) => {
          handleCardClick && handleCardClick();
        }}
      >
        <UpcomingStockCardTop>
          <div>
            <UpcomingStockCardTopCategory>{category}</UpcomingStockCardTopCategory>
            <UpcomingStockCardTopTitle>{title}</UpcomingStockCardTopTitle>
          </div>
          {pinned && (
            <HeartButton
              onClick={() => {
                modifyInterestingStock(id);
                setPinned((prev) => !prev);
                setToastString("관심 공모주에서 삭제되었어요.");
              }}
            >
              <HeartIcon.fill color={colors.ON.PRIMARY} />
            </HeartButton>
          )}
        </UpcomingStockCardTop>
        <UpcomingStockCardInfos>
          <UpcomingStockCardInfoItem>
            <MoneyIcon />
            <span>
              {price[0] === 0 || price[1] === 0
                ? "공모가 확인 중"
                : `${price[0].toLocaleString()}원 ~ ${price[1].toLocaleString()}원`}
            </span>
          </UpcomingStockCardInfoItem>
          <UpcomingStockCardInfoItem>
            <BankIcon />
            <UpcomingStockCardInfoAccountList>
              <UpcomingStockCardInfoAccountListItem>
                {account.length > 0 && (
                  <>
                    <span>
                      {account.slice(0, 2).map((id) => getBankName(id)) +
                        (account.length > 2 ? ` 외 ${account.length - 2}개` : "")}
                    </span>
                    <Badge type="primary">보유</Badge>
                  </>
                )}
              </UpcomingStockCardInfoAccountListItem>
              <UpcomingStockCardInfoAccountListItem>
                {nonRemainAccounts.length > 0 && (
                  <>
                    <span>
                      {nonRemainAccounts.slice(0, 2).map((id) => getBankName(id)) +
                        (nonRemainAccounts.length > 2 ? ` 외 ${nonRemainAccounts.length - 2}개` : "")}
                    </span>
                    <Badge type="secondary">미보유</Badge>
                  </>
                )}
              </UpcomingStockCardInfoAccountListItem>
            </UpcomingStockCardInfoAccountList>
          </UpcomingStockCardInfoItem>
        </UpcomingStockCardInfos>
      </UpcomingStockCardClick>

      {renderSubscription()}
    </UpcomingStockCardWarp>
  );
};

const UpcomingStockStatusWrap = styled.div`
  display: flex;
  align-items: center;
  ${getFonts("H6_SEMIBOLD")}
`;
const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${colors.FONT.ACCENT};
  margin-right: 4px;
`;

const UpcomingStockStatusLabel = styled.span<{ color: string }>`
  margin-right: 6px;
  color: ${({ color }) => color};
`;

const UpcomingStockCardClick = styled.div`
  cursor: pointer;
`;

const UpcomingStockCardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UpcomingStockCardTopCategory = styled.span`
  color: ${colors.FONT.PRIMARY};
  ${getFonts("CAPTION1_SEMIBOLD")}
`;
const UpcomingStockCardTopTitle = styled.strong`
  display: block;
  margin-top: 3px;
  ${getFonts("H3_SEMIBOLD")}
`;
const UpcomingStockCardInfos = styled.ul`
  margin-top: 20px;
  ${getFonts("H6_REGULAR")}
  color:${colors.FONT_LIGHT.PRIMARY}
`;
const UpcomingStockCardInfoItem = styled.li`
  display: flex;
  gap: 0 4px;
  & + & {
    margin-top: 7px;
  }
  ${getFonts("H6_REGULAR")}
`;
const UpcomingStockCardInfoAccountList = styled.ul``;
const UpcomingStockCardInfoAccountListItem = styled.li`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 3px;
  }
  ${getFonts("H6_REGULAR")}
  span {
    margin-right: 4px;
  }
`;
const UpcomingStockCardWarp = styled.div`
  margin-top: 12px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 1px 8px 0px rgba(27, 29, 31, 0.08);
  background-color: ${colors.WHITE};
`;
const UpcomingStockSubscriptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid ${colors.GRAY[2]};
`;
const UpcomingStockSubscriptionText = styled.span`
  ${getFonts("H6_REGULAR")}
  color:${colors.FONT_LIGHT.SECONDARY};
`;
const UpcomingStockSubscriptionDisableWrap = styled.span`
  display: inline-flex;
  align-items: center;
`;
const UpcomingStockSubscriptionDisableText = styled.span`
  ${getFonts("H6_SEMIBOLD")}
  margin-left: 2px;
  margin-right: 8px;
  color: ${colors.FONT_LIGHT.PRIMARY};
`;
const UpcomingStockSubscriptionDateText = styled.span`
  ${getFonts("H6_SEMIBOLD")}
  color: ${colors.FONT_LIGHT.PRIMARY};
`;
const HeartButton = styled.div`
  cursor: pointer;
`;
export default Object.assign(UpcomingStockMain, {
  status: UpcomingStockStatus,
  cardWrap: UpcomingStockCard,
});
