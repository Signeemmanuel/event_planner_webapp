$(document).ready(function () {
    var token = localStorage.getItem('token');
    
    if(!token) {
        console.log("you are not authenticated")
    }
    else {
        console.log(token);
    }
    $("#create-form").submit(function (e) { 
        e.preventDefault();
        var formData = {
            name: $("input[name='EventName']").val(),
            date: $("input[name='event_date']").val(),
            location: $("input[name='event_location']").val(),
            date: $("input[name='event_date']").val(),
            date: $("input[name='event_date']").val(),
            date: $("input[name='event_date']").val(),
            date: $("input[name='event_date']").val(),
        };
        // var formData = $(this).serialize();
        login();
        function login() {
            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/login/",
                data: formData,
                success: function (response) {
                    localStorage.setItem('token', response.token);
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



