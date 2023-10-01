// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
    import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
    import { Database, getDatabase, set, ref,child, update, onValue,get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";    
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
        measurementId: "G-4JEF0J07Y3",
        databaseURL: "https://sasehackathon2023-default-rtdb.firebaseio.com"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const database = getDatabase(app);
    

    var email;
    var password;
    
    
    function register(){
        email = document.getElementById("username").value
        password = document.getElementById("password").value
    
        if(validate_email(email) == false || validate_password(password) == false){
            alert("Your email or password are not valid")
            return
        }
    
        createUserWithEmailAndPassword(auth,email,password).then(function(){
            var user = auth.currentUser
            var db = getDatabase();
            var user_data = {
                email: email,
                name: email,
                last_login : Date.now(),
                points: 0
            }
    
            set(ref(db, 'users/' + user.uid),user_data).then(() => {alert("User Created!");window.location.replace("https://rferrell03.github.io/saseHackathon2023")
        });
            alert("User Created!")
            console.log("Wow it worked!")
        }).catch(function(error){
            var error_code = error.code
            var error_message = error.message
        })
        

    }
    
    
    
    function validate_email(email){
       
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

    
    var registerButton = document.getElementById("register");
    if(registerButton != null){
        registerButton.addEventListener("click", function() {
            // Call the register function when the button is clicked
            register();
        });
    }
    var loginButton = document.getElementById("login");
    if(loginButton != null){
    loginButton.addEventListener("click", function() {
        // Call the register function when the button is clicked
        login();
    });}

    function login(){
        email = document.getElementById('username').value
        password = document.getElementById("password").value

        signInWithEmailAndPassword(auth,email,password).then(function(){
            var user = auth.currentUser
            var db= getDatabase();
            var user_data = {
                last_login : Date.now()
            }
    
            update(ref(db , 'users/' + user.uid), user_data).then(() => window.location.replace("https://rferrell03.github.io/saseHackathon2023"));
        }).catch(function(error){
            var error_code = error.code
            var error_message = error.message
        })

    }

    function checkSignIn(){
        var user = auth.currentUser;
        if(user){
            return true;
        }else{
            return false;
        }
    }

    function profileButton(){
        var signedIn = checkSignIn();
        if(signedIn){
         window.location.replace("https://rferrell03.github.io/saseHackathon2023/profile.html");
        }else{
         window.location.replace("https://rferrell03.github.io/saseHackathon2023/signin.html");
     
        }
     }

     var profButton = document.getElementById("profileButton");
     if(profButton != null){
    profButton.addEventListener("click", function() {
        // Call the register function when the button is clicked
        profileButton();
    });}

    var profName = document.getElementById("user");
    if(profName != null){
        var user = auth.currentUser
        var uid = user.uid;
        const db= getDatabase();
        get(child(db, `users/${uid}/name`)).then((snapshot) => {
            if (snapshot.exists()) {
              var userName = snapshot.val();
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
        profName.innerHTML = userName;
    }