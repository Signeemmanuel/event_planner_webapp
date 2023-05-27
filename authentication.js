$(document).ready(function () {
    var token = localStorage.getItem('token');
    // var userID = localStorage.getItem('userID');
    
    if(token) {
        window.location.href = "../user/login.html";
    }

    else {
        console.log(token);
    }
})