
// console.log(firebase.database())
function signUppage() {
    window.location.href = './index.html'
}
function signInpage() {
    window.location.href = "./signin.html"

}
var userUid;
let signUp = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var resturant = document.getElementById('rest').value
    var country = document.getElementById('country').value
    var city = document.getElementById('city').value
    // console.log(email,password,resturant,country,city);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            userUid =user.uid
            var obj = {
                email,
                password,
                resturant,
                country,
                city
            }
                firebase.database().ref('AllUsers').child(userUid).set(obj)
                alert("Registration Sucessfull")
                window.location.href="./signin.html"
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
}

let signIn = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    console.log(email)
    console.log(password)
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            localStorage.setItem('email',email)
            localStorage.setItem('pass',password)
            localStorage.setItem('userId',user.uid)
            alert("Login Sucessfull")
            if(email === "admin@gmail.com"){
                window.location.href="./admin.html"
            }else{
                window.location.href="./user.html"
            }
            // ...
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage)
        });

}

