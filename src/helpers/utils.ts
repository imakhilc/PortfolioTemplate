import axios from 'axios';
import {Dimensions, PixelRatio} from 'react-native';

export const normalize = (size: number) => {
  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  const scale = SCREEN_WIDTH / 375;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const getCall = async (url: string) => {
  try {
    const response = await axios.get(url);
    return {error: false, response: response.data.data};
  } catch (e: any) {
    return {error: true, message: e.message};
  }
};

export const roundOff = (number?: number) => {
  return number?.toFixed(2);
};
