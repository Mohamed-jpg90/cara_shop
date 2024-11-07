let user=document.querySelector("#username")
let password=document.querySelector("#password")
let email=document.querySelector("#email")
let sin_up=document.querySelector("#sign_in")
sin_up.addEventListener('click',function(){
if(user.value===""||password.value===""||email.value===""){
    alert('please enter the valus')
}
else{
    localStorage.setItem("user name",user.value)
    localStorage.setItem("password",password.value)
    localStorage.setItem("email",email.value)

    window.location = "login.html"
}

})
