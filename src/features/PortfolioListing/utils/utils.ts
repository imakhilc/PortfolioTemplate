import {HoldingItemType} from './types';

export const getTotalValues = (list: Array<HoldingItemType>) => {
  let totalInvestment = 0,
    totalCurrentValue = 0,
    todayPnL = 0;
  list?.forEach(holding => {
    totalInvestment += holding.avgPrice * holding.quantity;
    totalCurrentValue += holding.ltp * holding.quantity;
    todayPnL += (holding.close - holding.ltp) * holding.quantity;
  });
  const totalPnL = totalCurrentValue - totalInvestment;
  return {totalInvestment, totalCurrentValue, totalPnL, todayPnL};
};

export const getCurrentValues = (item: HoldingItemType) => {
  const currentValue = item.ltp * item.quantity;
  const investmentValue = item.avgPrice * item.quantity;
  const profitAndLoss = currentValue - investmentValue;
  return {currentValue, investmentValue, profitAndLoss};
};
