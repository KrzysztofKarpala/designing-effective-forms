
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "#",
  authDomain: "#",
  projectId: "#",
  storageBucket: "#",
  messagingSenderId: "#",
  appId: "#"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");


const userSignIn = async () => {
    signInWithPopup(auth,
    provider).then((result) => {
    const user = result.user;
    console.log(user);
    }).catch((error) => {
    alert(error.code + error.message)
    })
}

const userSignOut = async () => {
    signOut(auth).then(() => {
    alert("You have been signed out!")
    }).catch((error) => {
    alert(error.code + error.message)
    })
    }
    

onAuthStateChanged(auth, (user) => {
    if (user) {
    alert("You are authenticated with Google");
    console.log(user);
    firstName.value = user.displayName.split(" ")[0];
    lastName.value = user.displayName.split(" ")[1];
    inputEmail.value = user.email;
    }
})


    
signInButton.addEventListener("click",
userSignIn);
signOutButton.addEventListener("click",
userSignOut);

