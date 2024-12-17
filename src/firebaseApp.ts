import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth"
import { getFirestore } from "firebase/firestore";

// 지역변수로 app이라는 변수 선언
export let app: FirebaseApp;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// import 할때마다 app을 이니셜라이즈하는거는 비효율적이라서 이렇게 선언
// 초기화가 되었으면 초기화된 앱을 가져오고, 아니라면 다시 초기화를 시킴
try {
  app = getApp("app")
} catch (e) {
  app = initializeApp(firebaseConfig, "app")
}

export const db = getFirestore(app);
