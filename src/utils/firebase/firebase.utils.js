import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6U8Dn-3FiWOwvp8IfjwxphPSoIyN3P6Q",
  authDomain: "kral-giyim-61482.firebaseapp.com",
  projectId: "kral-giyim-61482",
  storageBucket: "kral-giyim-61482.appspot.com",
  messagingSenderId: "760175181812",
  appId: "1:760175181812:web:4f08105380a83b4a47c3a1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider)
}

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log('Kullanıcı hatası', error.message);
    }
  }
  return userDocRef
}

