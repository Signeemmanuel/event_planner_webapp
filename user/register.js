$(document).ready(function () {
    var token = localStorage.getItem('token');
    var userID = localStorage.getItem('userID');
    
    if(!token) {
        console.log("you are not authenticated")
    }
    else {
        console.log(token);
        console.log(userID);
    }
    $("#register-form").submit(function (e) { 
        e.preventDefault();
        var formData = {
            username: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
            email: $("input[name='email']").val(),
            first_name: $("input[name='first_name']").val(),
            last_name: $("input[name='last_name']").val(),
            contact: $("input[name='contact']").val(),
        };
        // var formData = $(this).serialize();
        register();
        function register() {
            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/register/",
                data: formData,
                success: function (response) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('userID', response.user_info.id);
                    // Navigate to home page
                    window.location.href = './index.html';
                    // console.log(response);
                },
                error: function (error) {
                    console.log(console.error(error));        
                }
            });
        }
    });

});



