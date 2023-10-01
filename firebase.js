// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD7Ipkvax0TNUAlHZU0PhU4h1wjxUbHlMM",
        authDomain: "sasehackathon2023.firebaseapp.com",
        projectId: "sasehackathon2023",
        storageBucket: "sasehackathon2023.appspot.com",
        messagingSenderId: "238103124299",
        appId: "1:238103124299:web:10332be33328a2cd3fb0ce",
        measurementId: "G-4JEF0J07Y3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    
    
    
    function register(){
        email = document.getElementById("username").value
        password = document.getElementById("password").value
    
        if(validate_email(email) == false || validate_password(password) == false){
            alert("Your email or password are not valid")
            return
        }
    
        auth.createUserWithEmailAndPassword(email,password).then(function(){
            var user = auth.currentUser
            var database_ref = database.ref()
            var user_data = {
                email: email,
                last_login : Date.now()
            }
    
            database_ref.child('users/' + user.uid).set(user_data)
            alert("User Created!")
        }).catch(function(error){
            var error_code = error.code
            var error_message = error.message
        })
    }
    
    
    
    function validate_email(email){
       expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
       if(expression.test(email) == true){
        return true
       } else{
        return false
       }
    }
    
    function validate_password(password){
        if(password < 6){
            return false
        }else{
            return true
        }
    }
    
    function validate_field(field){
        if(field = null){
            return false
        } 
        if(field.length <= 0){
            return false;
        } else {
            return true;
        }
    }