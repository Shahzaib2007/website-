let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll =  function() {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase,ref ,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAc7ICTh0m0uQtbx16h7YzOJtIAD3lP-nY",
    authDomain: "aaa-project-b5f72.firebaseapp.com",
    databaseURL: "https://aaa-project-b5f72-default-rtdb.firebaseio.com",
    projectId: "aaa-project-b5f72",
    storageBucket: "aaa-project-b5f72.appspot.com",
    messagingSenderId: "335463608121",
    appId: "1:335463608121:web:8f40fb95268f3d44c942e8",
    measurementId: "G-M60EZ8XQJ5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase ();

  var email =document.getElementById("email");
  var name =document.getElementById("name");
  var number =document.getElementById("number");

  window.add = function(){
    var obj = {
        number:number.value,
        name:name.value,
        email:email.value,
    };
    console.log(obj);
    obj.id = Math.random().toString().slice(2)
    const taskRef = ref(database, `task/${obj.id}/`);
    set(taskRef,obj);
 };
    add();