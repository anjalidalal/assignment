import { getUser } from "../component/Redux/Action";
import store from "../component/Redux/Store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5dMt7ifTlC24nrSSJt7ACRamTq0Xatgo",
  authDomain: "ekko-b2624.firebaseapp.com",
  projectId: "ekko-b2624",
  storageBucket: "ekko-b2624.appspot.com",
  messagingSenderId: "1009803345472",
  appId: "1:1009803345472:web:d38b7d6ba6800563eda9a5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export const signIn = async () => {
  try {
    const result = await auth.signInWithPopup(provider);
    store.dispatch(
      getUser({
        displayName: result.user.displayName,
        email: result.user.email,
        id: result.user.uid,
        photo: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
      })
    );
  } catch (error) {
    store.dispatch(getUser(null));
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    store.dispatch(getUser(null));
  } catch (error) {
    console.log(error);
    store.dispatch(getUser(null));
  }
};

export { auth };
