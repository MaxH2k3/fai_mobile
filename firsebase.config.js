// firebaseConfig.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDFp9ZtodQSLyLc7Tgyuk21lg2Q3vr_1Rw',
  authDomain: 'fashionaiinovation.firebaseapp.com',
  projectId: 'fashionaiinovation',
  storageBucket: 'fashionaiinovation.appspot.com',
  messagingSenderId: '970213479693',
  appId: '1:970213479693:android:3eece4206adc53a47f4c44',
  databaseURL: 'https://fashionaiinovation.firebaseio.com', // Thêm databaseURL tại đây
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase; // Export firebase mặc định
