import { GetChatHistory } from "../chat-api";

export const useChatHistory = ({
  chatId,
  page,
  eachPage
}: {
  chatId: string,
  page: number,
  eachPage: number
}) => {
  const queryKey = ['chat history', {
    chatId,
    page,
    eachPage
  }];
  const queryFn = async () => {
    return GetChatHistory({
      chatId: chatId,
      page: page,
      eachPage: eachPage
    });
  };

  return { queryKey, queryFn };
};
