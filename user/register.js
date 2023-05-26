$(document).ready(function () {
    var token = localStorage.getItem('token');
    
    if(!token) {
        console.log("you are not authenticated")
    }
    $("#register-form").submit(function (e) { 
        e.preventDefault();
        var formdata = {
            username: $("input[name='user_name']"),
            password: $("input[name='password']"),
            email: $("input[name='email']"),
            first_name: $("input[name='first_name']"),
            last_name: $("input[name='last_name']"),
            contact: $("input[name='contact']"),
        };
        
        register();
        function register() {
            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/register/",
                data: formdata,
                success: function (response) {
                    localStorage.setItem('token', response.token);
                    // Navigate to home page
                    window.location("./home.html")
                    console.log(response)
                },
                error: function (error) {
                    console.log(console.error());        
                }
            });
        }
    });

});



