var token = localStorage.getItem('token');
// var userID = localStorage.getItem('userID');

console.log(token, !token);
if (token == 'null'  || !token) {
    window.location.href = "../user/login.html";
}

else {
    console.log(token, !token);
}
