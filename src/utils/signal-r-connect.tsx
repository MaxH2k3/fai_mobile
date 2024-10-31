import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import 'react-native-url-polyfill/auto';

const connectToSignalR = async (token: string, hubName: string) => {
  const connection = new HubConnectionBuilder()
    .withUrl(`https://fai-ai.azurewebsites.net/${hubName}`, {
      withCredentials: false,
      accessTokenFactory: () => token,
    })
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build();

  try {
    await connection.start();
    console.log('Connected to SignalR');
  } catch (err) {
    console.error('Error connecting to SignalR:', err);
  }

  return connection;
};

export default connectToSignalR;
