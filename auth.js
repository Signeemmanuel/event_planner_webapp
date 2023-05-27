var token = localStorage.getItem('token');
    
if(!token) {
    
    window.location.href = 'user/login.html';
}
else {
    console.log(token);
}
