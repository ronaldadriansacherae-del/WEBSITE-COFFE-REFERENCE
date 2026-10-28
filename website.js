function login(){

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if(username === "admin" &&
       password === "1234"){

        window.location.href = "home.html";

    }else{

        document.getElementById("message").innerHTML =
        "Invalid Username or Password!";
    }
}


const modal =
document.getElementById("modal");

const orderBtn =
document.getElementById("orderBtn");

const closeBtn =
document.querySelector(".close");

if(orderBtn){

    orderBtn.onclick = function(){
        modal.style.display = "block";
    }

    closeBtn.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function(event){

        if(event.target == modal){
            modal.style.display = "none";
        }
    }
}

function confirmOrder(){
    alert("Thank you for your order!");
}