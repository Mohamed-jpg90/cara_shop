let user= document.querySelector("#username")
let password= document.querySelector("#password")
let login=document.querySelector("#sign_in")
let getuser=localStorage.getItem("user name")
let getPassword=localStorage.getItem("password")

login.addEventListener("click", function(){

if (user.value==''||password.value==""){
    alert("please enter the value")
}
else{
    if(user.value.trim()==getuser.trim() && password.value==getPassword){
        window.location="index.html"
    }
    else{
        alert("the user name or password is wrong")
    }
}


})