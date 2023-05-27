const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', () => {
  // Remove the token from localStorage
  localStorage.removeItem('token');
  
  // Redirect the user to the login page
  window.location.href = '/login.html';
});