// import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

// const connectToSignalR = async (token: string, hubName: string) => {
//     const connection = new HubConnectionBuilder()
//         .withUrl(`https://fai-ai.azurewebsites.net/${hubName}`, {
//             // headers: {
//             //     Authorization: `Bearer ${token}`
//             // }
//             withCredentials: false,
//             accessTokenFactory: () => `${token}`,
//         })
//         .withAutomaticReconnect()
//         .configureLogging(LogLevel.Information)
//         .build();

//     try {
//         await connection.start();
//         console.log('FAI connected');
//     } catch (err) {
//         console.error('Error connecting to SignalR:', err);
//     }

//     return connection;
// };

// export default connectToSignalR;