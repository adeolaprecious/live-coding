import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

// function signO =() = {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });
// }

function submitTodo(){
    alert("hi")
    let inputOne= document.getElementById("todo").value
    let inputTwo =document.getElementById("description").valuesh
    let date = new Date
    console.log(date);
    let object = {inputOne, inputTwo, date}
    console.log(object);
    if(inputOne==='' || inputTwo===''){
        view.style.display="block"
    }else{
        show.innerHTML
    }
}
window.submitTodo=submitTodo


