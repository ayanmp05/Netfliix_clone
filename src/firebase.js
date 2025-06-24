// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNT_n0jgVIBHj1OZ_Yib57m6KH_LbZjU8",
  authDomain: "netflix-clone-13b4e.firebaseapp.com",
  projectId: "netflix-clone-13b4e",
  storageBucket: "netflix-clone-13b4e.firebasestorage.app",
  messagingSenderId: "302288737649",
  appId: "1:302288737649:web:9c4aa3b75fd5801eae52d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Implementing authentication
const auth = getAuth(app);
// Configure firestore
const db = getFirestore(app);

// User Sign Up function
const signup = async (name, email, password) => {
  try {
    //Getiing user response
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    // Find the user detail and store it in User.
    const user = resp.user;
    // Store it firebase database
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    // If try fails then this executes and give an error
    console.log(error);
    //Using toastify method
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

//User Log in function
const login = async (email, password) => {
  try {
    //To login to web
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // If try fails then this executes and give an error
    console.log(error);
    //Using toastify method
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

//Sign Out function
const logout = () => {
  signOut(auth);
}

//Export it to get access in other pages
export { auth, db, login, signup, logout };