import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-iuRjh7hs3vDwW-FRZ-ychuiQuKKPADE",
  authDomain: "crownclothing-ashish.firebaseapp.com",
  projectId: "crownclothing-ashish",
  storageBucket: "crownclothing-ashish.appspot.com",
  messagingSenderId: "553838964376",
  appId: "1:553838964376:web:18c51b9692ea759906aaed",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
export const createAuthUserWithEmailAndPassword= async( email, password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
  
}

export const SignInAuthUserWithEmailAndPassword= async( email, password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
  
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { name, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        name,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const signUserOut = async ()=> await signOut(auth)
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);