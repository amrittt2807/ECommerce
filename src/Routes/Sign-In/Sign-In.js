import { signInWithGoogle, createUserDocumentFromAuth, } from "../../Utils/Firebase/firebase.util";
const SignIn = () => {
  const googleSignIn = async () => {
    const {user} = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>This is signin</h1>
      <button onClick={googleSignIn}>Google Sign in Pop UP</button>
    </div>
  );
};
export default SignIn;
