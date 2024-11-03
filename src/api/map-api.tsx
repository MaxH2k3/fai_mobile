import axios from "axios";
import { createQueryString, getLocationDetail, getPlacePrediction } from "./api-config";


export const GetMapPrediction = async (params: {
  api_key: string
  input: string,
  location?: string
  limit?: number
  radius?: number
  sessionToken?: string
  more_compount?: boolean
}) => {

  try {
    const queryString = createQueryString(params)
    const response = await axios.get(`${getPlacePrediction}?${queryString}`);

    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        status: error.response.status,
        message: error.response.data.message || 'An error occurred',
        data: error.response.data
      };
    } else {
      return {
        success: false,
        status: 500,
        message: 'An unexpected error occurred',
        data: null
      };
    }
  }
}

export const GetLocationDetail = async (params: {
  api_key: string
  place_id: string
  session_id?: string
}) => {

  try {
    const queryString = createQueryString(params)
    const response = await axios.get(`${getLocationDetail}?${queryString}`);

    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        status: error.response.status,
        message: error.response.data.message || 'An error occurred',
        data: error.response.data
      };
    } else {
      return {
        success: false,
        status: 500,
        message: 'An unexpected error occurred',
        data: null
      };
    }
  }
}
