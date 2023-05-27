var token = localStorage.getItem('token');
    
if(!token) {
    
    window.location.href = './index.html';
}
else {
    console.log(token);
}