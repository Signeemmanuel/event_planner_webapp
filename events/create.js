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
    $("#create-form").submit(function (e) { 
        e.preventDefault();
        
        var formData = {
            name: $("input[name='EventName']").val(),
            date: $("input[name='event_date']").val(),
            location: $("input[name='event_location']").val(),
            description: $('#message').val(),
            time: $('input[name="event_time"]').val(),
            user: userID,
        };
        
        createEvent();
        function createEvent() {
            console.log(formData);
            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/events/",
                data: formData,
                headers: {'Authorization': 'Token ' + token},
                success: function (response) {
                    
                    // Navigate to home page
                    window.location.href = './index.html';
                    console.log(response);
                },
                error: function (error) {
                    console.log(console.error(error));
                }
            });
        }
    });

});



