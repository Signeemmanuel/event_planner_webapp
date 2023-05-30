
var token = localStorage.getItem('token');
var userID = localStorage.getItem('userID');

if (!token) {
    console.log("you are not authenticated")
}
else {
    console.log(token);
    console.log(userID);
}

let querySearch = window.location.search;
let urlParams = new URLSearchParams(querySearch)

let idParam = urlParams.get("id")
console.log(idParam)

GetEventsDetails(idParam);
function GetEventsDetails(id) {
    $.ajax({
        type: "GET",
        url: `http://127.0.0.1:8000/api/events/${id}/`,
        dataType: 'json',
        headers: { 'Authorization': 'Token ' + token },
        success: function (data) {

            console.log(data);
            populateFields(data)
        },
        error: function (error) {
            console.log(console.error(error));
        }
    });
}

function populateFields(data) {

    $("#event-name").text(data.name);
    $("#event_details").text(data.description);
    $("#organiser").text(data.user_id);
    
}

