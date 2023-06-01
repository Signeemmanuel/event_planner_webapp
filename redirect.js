var token = localStorage.getItem('token');
    
if (token) {
    window.location.href = "../events/index.html";
}else {
    console.log("you are not authenticated")
}