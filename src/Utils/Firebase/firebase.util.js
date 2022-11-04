import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc  } from "firebase/firestore";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-iuRjh7hs3vDwW-FRZ-ychuiQuKKPADE",
  authDomain: "crownclothing-ashish.firebaseapp.com",
  projectId: "crownclothing-ashish",
  storageBucket: "crownclothing-ashish.appspot.com",
  messagingSenderId: "553838964376",
  appId: "1:553838964376:web:18c51b9692ea759906aaed"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:'select_account'
});
export const auth = getAuth();
export const signInWithGoogle= ()=>signInWithPopup(auth, provider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};