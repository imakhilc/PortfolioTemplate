import {URLS} from './urls';
import {getCall} from '../../../helpers/utils';
import {PortfolioDataType} from '../utils/types';

export const getPortfolioList = async () => {
  const reponse: PortfolioDataType = await getCall(URLS.listingApi);
  return reponse;
};
