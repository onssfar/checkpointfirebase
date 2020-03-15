document.querySelector(".form").addEventListener("submit",function(e){
    e.preventDefault()
    submit()
})
var firebaseConfig = {
    apiKey: "AIzaSyBzaRlfnZnFqc88ziZ4qVo7jpVwC-RFunI",
    authDomain: "checkpoint-b961d.firebaseapp.com",
    databaseURL: "https://checkpoint-b961d.firebaseio.com",
    projectId: "checkpoint-b961d",
    storageBucket: "checkpoint-b961d.appspot.com",
    messagingSenderId: "1061806180866",
    appId: "1:1061806180866:web:8180fbed91cd37598d351b",
    measurementId: "G-Y7EC7QS12Q"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // 1 import libaries 

    // 2 create database var
        let database=firebase.database()
    // 3 set a reference 
       let ref =database.ref("contact")
       function submit(){
    // 4 prepare data 
     let data={
         name:document.querySelector("#name").value,
         email :document.querySelector("#email").value,
         phone :document.querySelector("#phone").value,
         track :document.querySelector("#track").value,
     }
    // 5 upload data 
       ref.push(data)
       }