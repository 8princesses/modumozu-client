import { ReactNode } from "react";
import { FC } from "react";
import HeartIcon from "@/svg/HeartIcon";
import styled from "styled-components";
import colors from "@/styles/colors";
import MoneyIcon from "@/svg/MoneyIcon";
import BankIcon from "@/svg/BankIcon";
import { getFonts } from "@/styles/fonts";
import DangerIcon from "@/svg/DangerIcon";
import Button from "../common/Button";

interface UpcomingStockProps {
  children: ReactNode;
}
interface UpcomingStockStatusProps {
  status: boolean;
  children: string;
}
type Subscription = "disable" | "able" | "limit";
interface UpcomingStockCardProps {
  category: string;
  title: string;
  children?: ReactNode;
  price: [number, number];
  account: string;
  love: boolean;
  subscription?: Subscription;
  date?: string;
  onClick?: () => void;
}

const UpcomingStockMain: FC<UpcomingStockProps> = ({ children }) => {
  return <article>{children}</article>;
};
const UpcomingStockStatus: FC<UpcomingStockStatusProps> = ({ status, children }) => {
  // TODO 날짜 어떻게 처리할 지
  if (status) {
    return (
      <UpcomingStockStatusWrap>
        <Dot />
        <UpcomingStockStatusLabel color={colors.FONT.ACCENT}> 진행 중 </UpcomingStockStatusLabel>
        <span>{`마감일 ${children}`}</span>
      </UpcomingStockStatusWrap>
    );
  }
  return (
    <UpcomingStockStatusWrap>
      <UpcomingStockStatusLabel color={colors.FONT_LIGHT.TERIARY}>D - 5 </UpcomingStockStatusLabel>
      <span>{`청약일 ${children}`}</span>
    </UpcomingStockStatusWrap>
  );
};
const UpcomingStockCard: FC<UpcomingStockCardProps> = (props) => {
  const { category, title, price, love, account, subscription, onClick, date = "" } = props;

  const renderSubscription = () => {
    switch (subscription) {
      case "able":
        return (
          <UpcomingStockSubscriptionWrap>
            <span>
              <UpcomingStockSubscriptionDateText>{date}</UpcomingStockSubscriptionDateText>
              <UpcomingStockSubscriptionText>까지 계좌를 개설해주세요.</UpcomingStockSubscriptionText>
            </span>
            <Button shape="round" size="small" onClick={onClick}>
              계좌 개설
            </Button>
          </UpcomingStockSubscriptionWrap>
        );
      case "disable":
        return (
          <UpcomingStockSubscriptionWrap>
            <UpcomingStockSubscriptionDisableWrap>
              <DangerIcon />
              <UpcomingStockSubscriptionDisableText>청약불가</UpcomingStockSubscriptionDisableText>
              <UpcomingStockSubscriptionText>계좌 개설 가능 기간이 지났어요.</UpcomingStockSubscriptionText>
            </UpcomingStockSubscriptionDisableWrap>
          </UpcomingStockSubscriptionWrap>
        );
      case "limit":
        return (
          <UpcomingStockSubscriptionWrap>
            <UpcomingStockSubscriptionText>신규 계좌 개설이 제한되었습니다.</UpcomingStockSubscriptionText>
            <Button color="secondary" shape="round" size="small" onClick={onClick}>
              계좌 개설
            </Button>
          </UpcomingStockSubscriptionWrap>
        );
      default:
        return null;
    }
  };

  // TODO 보유한 계좌의 데이터가 어떤 형식으로 오는지 에상이 안되서 아직 개발 x
  return (
    <UpcomingStockCardWarp>
      <UpcomingStockCardTop>
        <div>
          <UpcomingStockCardTopCategory>{category}</UpcomingStockCardTopCategory>
          <UpcomingStockCardTopTitle>{title}</UpcomingStockCardTopTitle>
        </div>
        {love && (
          <div>
            <HeartIcon color={colors.ON.PRIMARY} />
          </div>
        )}
      </UpcomingStockCardTop>
      <UpcomingStockCardInfos>
        <UpcomingStockCardInfoItem>
          <MoneyIcon />
          <span>{`${price[0].toLocaleString()}원 ~ ${price[1].toLocaleString()}원`}</span>
        </UpcomingStockCardInfoItem>
        <UpcomingStockCardInfoItem>
          <BankIcon />
          <UpcomingStockCardInfoAccountList>
            <UpcomingStockCardInfoAccountListItem>
              <span>{account}</span>
            </UpcomingStockCardInfoAccountListItem>
            <UpcomingStockCardInfoAccountListItem>
              <span>{account}</span>
            </UpcomingStockCardInfoAccountListItem>
          </UpcomingStockCardInfoAccountList>
        </UpcomingStockCardInfoItem>
      </UpcomingStockCardInfos>
      {!!subscription && renderSubscription()}
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
  & + & {
    margin-top: 3px;
  }
  ${getFonts("H6_REGULAR")}
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
export default Object.assign(UpcomingStockMain, {
  status: UpcomingStockStatus,
  cardWrap: UpcomingStockCard,
});
