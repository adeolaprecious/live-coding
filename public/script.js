
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNZ5rMQONMni6sLvNEyIX19Ss96Tuax_0",
    authDomain: "live-coding-7fce1.firebaseapp.com",
    projectId: "live-coding-7fce1",
    storageBucket: "live-coding-7fce1.appspot.com",
    messagingSenderId: "908767745762",
    appId: "1:908767745762:web:5fa66fdd08466f0d0ef0bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            if (user) {
                window.location.href = 'dashboard.html'
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}
window.signGoogle = signGoogle
