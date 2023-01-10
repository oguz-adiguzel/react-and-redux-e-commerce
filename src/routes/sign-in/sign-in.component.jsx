import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-in.style.scss'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div className="signin-container">
            <h1 className="signin-title">Sign-in Google</h1>
            <button className="signin-btn" onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;