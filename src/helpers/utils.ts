import axios from 'axios';

export const getCall = async (url: string) => {
  try {
    const response = await axios.get(url);
    return {error: false, response: response.data.data};
  } catch (e: any) {
    return {error: true, message: e.message};
  }
};
