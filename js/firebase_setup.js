import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyD0EMq_-PUZicuV8HGFL6b_Ve3oB57wKCk",
authDomain: "manderindlistatistik.firebaseapp.com",
databaseURL: "https://manderindlistatistik-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "manderindlistatistik",
storageBucket: "manderindlistatistik.appspot.com",
messagingSenderId: "573052958756",
appId: "1:573052958756:web:474332466b4194e062c0b1",
measurementId: "G-FPVWJG66N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);