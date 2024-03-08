import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getDatabase, ref, set, onValue, push  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// import { getStorage, ref as stref} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNZ5rMQONMni6sLvNEyIX19Ss96Tuax_0",
    authDomain: "live-coding-7fce1.firebaseapp.com",
    projectId: "live-coding-7fce1",
    storageBucket: "live-coding-7fce1.appspot.com",
    messagingSenderId: "908767745762",
    appId: "1:908767745762:web:5fa66fdd08466f0d0ef0bb",
    databaseURL:"https://live-coding-7fce1-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const storage = getStorage()
// const database = getDatabase(app);


function submitTodo() {
    let inputOne = document.getElementById("todo").value
    let inputTwo = document.getElementById("description").value
    let date = new Date
    console.log(date);
    let object = { inputOne, inputTwo, date }
    console.log(object);
    // let dbRef = push(ref(database, `table`))
    // let saved = set(dbRef, object)
    // if (saved) {
    //     enter.style.display = "block"
    //     console.log("Saved successfully");
    // } else {
    //     console.log("failed to save");
    // }
    if (inputOne === '' || inputTwo === '') {
        view.style.display = "block"
    } else {
        view.style.display = "none"
        show.innerHTML =""
        for (i=0; i < cart.length; i++) {
            var element = cart[i]
            show.innerHTML = `<div class="border border-2 shadow-sm mx-5">
                            <h2><label for="">Todo:</label></h2>
                                <h3>${inputOne}</h3>
                            <h2><label for="">Todo Description:</label></h2>
                                <h3>${inputTwo}</h3>
                            <p> ${date}</p>
                            <button onclick="delete">Edit</button>
                        <div>
                    `
        } 
    }
    document.getElementById("todo").value = ""
    document.getElementById("description").value = ""
}
window.submitTodo = submitTodo
// let newRef = ref(database, `table`)
// onValue(newRef, (snapshot) => {
//     let data = snapshot.val()
//     console.log(data);
//     show.innerHTML =""
//         for(let key in data){
//         if(data.hasOwnProperty(key)){
//             let todo = data[key];
            
//             show.innerHTML += `
//             <h3 class="text-center">${todo.inputOne}</h3>
//             <h5 class="text-center" >${todo.inputTwo}</h5>
//             <p class="text-center">${todo.time}, ${todo.date}</p>


//         `
//         }
//     }
// })

// function delete() {
//     todorray.splice(0, todorray.length);
//     cart()
// }




