var token = localStorage.getItem('token');
    
if (!token) {
    console.log("You are not authenticated")
} else {
    window.location.href = "./events/index.html";
}