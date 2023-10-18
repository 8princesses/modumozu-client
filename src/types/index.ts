export interface Inter {
  /**
   * 이건 이럴 떄 쓰는 거예요
   */
  value: string;
}

export interface myAccountType {
  id: string;
  agentId: number;
  registeredAt: string;
}

export interface StockInfoType {
  id: number;
  pinned: true;
  status: string;
  offerBeginAt: string;
  offerEndAt: string;
  name: string;
  category: string;
  minDesiredOfferPrice: number;
  maxDesiredOfferPrice: number;
  fixedOfferPrice: number;
  remainAgents: number[];
  nonRemainAgents: number[];
  proposal: {
    cardType: string;
    proposalTyp: string;
    needAt: string;
    agentId: number;
  };
}

export interface UpcomingStockType {
  totalIpoCount: number;
  activeIpoCount: number;
  ipos: StockInfoType[];
}

export interface EndedStockType {
  id: number;
  logo: string;
  name: string;
  status: string;
  listingAt: string;
  comparedRate: number;
}

export interface StockCountInfoType {
  total: number;
  ready: number;
  inProgress: number;
  done: number;
}

export interface InterestingStockType {
  count: StockCountInfoType;
  ipos: StockInfoType[];
}

export interface AgentRegisterType {
  agentId: number;
  registeredAt: string;
}
