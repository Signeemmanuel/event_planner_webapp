var token = localStorage.getItem('token');

console.log(token, !token);
if (token != 'null'  && token) {
    window.location.href = "./user/index.html";
}

else {
    console.log(token, !token);
}