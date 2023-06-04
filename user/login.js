$(document).ready(function () {
    var token = localStorage.getItem('token');
    var userID = localStorage.getItem('userID');
    
    if(!token) {
        console.log("you are not authenticated")
    }
    $("#login-form").submit(function (e) { 
        e.preventDefault();
        var formData = {
            username: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
        };
        // var formData = $(this).serialize();
        login();
        function login() {
            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/users/login/",
                data: formData,
                success: function (response) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('userID', response.user_info.id);
                    // Navigate to home page
                    window.location.href = './index.html';

                    // console.log(response);
                },
                error: function (error) {
                    var errorEl = document.getElementById("error");
                    console.log(console.error(error));
                    return errorEl.style.display = 'block';
                            
                }
            });
        }
    });

});



