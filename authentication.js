var token = localStorage.getItem('token');

if (!token) {
    window.location.href = "../user/index.html";
}
else {
    console.log(token, !token);
}

function logout() {
  localStorage.removeItem("token");
  console.log("You are Logged Out!");
  window.location.href = "../user/index.html";
}