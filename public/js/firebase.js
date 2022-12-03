import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite";

const firebaseApp = initializeApp({
    /* config */
    apiKey: "AIzaSyD0EMq_-PUZicuV8HGFL6b_Ve3oB57wKCk",
    authDomain: "manderindlistatistik.firebaseapp.com",
    databaseURL: "https://manderindlistatistik-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "manderindlistatistik",
    storageBucket: "manderindlistatistik.appspot.com",
    messagingSenderId: "573052958756",
    appId: "1:573052958756:web:474332466b4194e062c0b1",
    measurementId: "G-FPVWJG66N4",
});
const db = getFirestore(firebaseApp);

export async function getSlicesFromFirebase() {
    const slices = collection(db, "slices");
    const slices_data = await getDocs(slices);
    const sliceList = slices_data.docs.map((doc) => doc.data());
    console.log(typeof sliceList, "FIREBASE LIST");
    return sliceList;
}

export async function addNewSliceToFirebase(amount) {
    console.log("We add a new slice to firebase with amount: " + amount);
    const data = {
        amount: parseInt(amount),
    };
    const slices = collection(db, "slices");
    await addDoc(slices, data);
}
