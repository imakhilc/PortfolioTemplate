import {SizeType} from '../features/PortfolioListing/utils/types';
import {normalize} from './utils';

export const STRINGS = {
  rupee: '₹',
  holdingTitle: 'Upstox Holding',
  ltp: 'LTP',
  pAndL: 'P/L',
  currentV: 'Current Value',
  totalInv: 'Total Investment',
  todayPAndLoss: "Today's Profit & Loss",
  pAndLoss: 'Profit & Loss',
  wrong: 'Something Went Wrong!',
  tryAgain: 'Try Again',
};

export const FONT_SIZE: {[key in SizeType]: number} = {
  tiny: normalize(8),
  small: normalize(12),
  medium: normalize(14),
  large: normalize(16),
  huge: normalize(24),
};

export const COLORS = {
  darkest: '#222',
  dark: '#333',
  light: '#fafafa',
  primaryLight: '#9370DB',
  primaryDark: '#555',
};
