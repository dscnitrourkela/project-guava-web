import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCl2mXPS8VjX5iilPaAJ9Qql6WrF0JnIxg',
  authDomain: 'guava-auth.firebaseapp.com',
  projectId: 'guava-auth',
  storageBucket: 'guava-auth.appspot.com',
  messagingSenderId: '344367371806',
  appId: '1:344367371806:web:b9a4ac61f087edf082400f',
  measurementId: 'G-B6MYC6CL00',
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
console.log(process.env.REACT_APP_NAME);
const firebaseInit = firebase.initializeApp(firebaseConfig);
export default firebaseInit;
