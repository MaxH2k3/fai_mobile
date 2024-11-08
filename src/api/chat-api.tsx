import axios from "axios";
import { getChatHistory } from "./api-config";

export const GetChatHistory = async ({
  chatId,
  page,
  eachPage,
}: {
  chatId: string;
  page: number;
  eachPage: number;
}) => {
  try {
    const response = await axios.get(`${getChatHistory}`, { params: { chatId, page, eachPage } });
    const paginationHeader = response.headers['x-pagination'];
    const metadata = JSON.parse(paginationHeader || '{}');
    return {
      success: true,
      status: response.status,
      data: {
        data: response.data,
        currentPage: metadata.CurrentPage,
        eachPage: metadata.EachPage,
        totalElements: metadata.TotalItems,
        totalPage: metadata.TotalPages
      }
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