
    //     import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
    //     import { getDatabase,set,get,child } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
    //     const firebaseConfig = {
    //       apiKey: "AIzaSyDHevXDhFPArnT7YT1k71j5bImLBYb1Yjc",
    //       authDomain: "hecathon-d404c.firebaseapp.com",
    //       projectId: "hecathon-d404c",
    //       storageBucket: "hecathon-d404c.appspot.com",
    //       messagingSenderId: "991837108175",
    //       appId: "1:991837108175:web:7622be53936565741844ba",
    //       measurementId: "G-H630EZ00RL"
    //     };
    //      const app = initializeApp(firebaseConfig);
    //      const db = getDatabase(app)
    
    //  document.getElementById('submit').addEventListener('click',function(e){
    //     set(ref(db,'user/'+ document.getElementById('firstName').value),
    //     {
    //         firstName:document.getElementById('firstName').value,
    //         lastName:document.getElementById('lastName').value,
    //         email:document.getElementById('email').value,
    //         password:document.getElementById('password')
            
    //     })
    //     alert('login succesfull !');
    //  })


    // =============================================================================================
  
    
//     import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
//     import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
//     import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
//     import {getStorage, ref as storageRef, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js"
    
//         const firebaseConfig = {
//           apiKey: "AIzaSyDHevXDhFPArnT7YT1k71j5bImLBYb1Yjc",
//           authDomain: "hecathon-d404c.firebaseapp.com",
//           projectId: "hecathon-d404c",
//           storageBucket: "hecathon-d404c.appspot.com",
//           messagingSenderId: "991837108175",
//           appId: "1:991837108175:web:7622be53936565741844ba",
//           measurementId: "G-H630EZ00RL"
//         };
//          const app = initializeApp(firebaseConfig);
//          const db = getDatabase(app)
//         const auth = getAuth();//===============
//          const storage = getStorage()//==========
    
//      document.getElementById('submit').addEventListener('click',function(e){
//         // ==================email passwod

//         // const auth = getAuth(app);
//         let firstName = document.getElementById('firstName').value;
//         let lastName = document.getElementById('lastName').value;
//         let email = document.getElementById('email').value;
//         let password = document.getElementById('password').value;
//         let repeatPassword = document.getElementById('repeatPassword').value;

//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//          const user = userCredential.user;
//          console.log(user.email);
//          alert('signup succesfully')
    
//          })
//          .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//         alert('rejected')
    
//         });

// // ===================login
//        let email1 = document.getElementById('email').value;
//         let password1 = document.getElementById('password').value;
//        const auth = getAuth();
//     signInWithEmailAndPassword(auth, email1, password1)
//      .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user.email);
//     alert('succes')
//     })
//     .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode,errorMessage);
//     alert('reject')
//   });







//         e.preventDefault();
//          set(ref(db,'user/'+ document.getElementById('firstName').value),
//         {
//             firstName:document.getElementById('firstName').value,
//             lastName:document.getElementById('lastName').value,
//             email:document.getElementById('email').value,
//             password:document.getElementById('password'). value,
//             repeatPassword:document.getElementById('repeatPassword').value
            
//         })
//         alert('login succesfull !');
//         // ======================
        
    //  })
