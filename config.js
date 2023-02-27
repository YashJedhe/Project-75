import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAluVQcAEmX8qNAj7HKg3OVTawhQkl3t3c",
  authDomain: "e-riddingapp.firebaseapp.com",
  projectId: "e-riddingapp",
  storageBucket: "e-riddingapp.appspot.com",
  messagingSenderId: "849759492878",
  appId: "1:849759492878:web:7d8f1de1135c16f29c955f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
