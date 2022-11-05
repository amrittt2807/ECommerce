import { useEffect} from "react";
import "./Authentication.styles.scss"
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogle,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../Utils/Firebase/firebase.util";
import SignUpForm from "../../Components/SignUp-Form/SignUpForm";

import Button from "../../Components/Button/Button";
import SignInForm from "../../Components/SignIn-Form/SignInForm";

const Authenticaiton = () => {
  useEffect(() => {
    async function _getRedirectResult() {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    _getRedirectResult();
  }, []);

  const googleSignIn = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm googleSignIn={googleSignIn} />      

      {/* <button className="GoogleButton" onClick={signInWithGoogleRedirect}>
        <img src="https://img.icons8.com/color/48/null/google-logo.png" />
      </button> */}

       {/* <button onClick={googleSignIn}>Google Sign in Pop UP</button>  */}
        <SignUpForm />
    </div>
  );
};
export default Authenticaiton;
