export type HoldingItemType = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};

export type PortfolioDataType = {
  error?: boolean;
  message?: boolean;
  response?: {
    userHolding: Array<HoldingItemType>;
  };
};

export type SizeType = 'tiny' | 'small' | 'medium' | 'large' | 'huge';
