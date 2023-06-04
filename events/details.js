
$(document).ready(function () {
    var token = localStorage.getItem('token');

    if (!token) {
        $("#action-edith").hide();
        $("#event_budget").hide();
        $("#share-btn").hide();
    }
    else {
        $("#rsvp-btn").hide();
    }
    
    let querySearch = window.location.search;
    let urlParams = new URLSearchParams(querySearch)

    let idParam = urlParams.get("id")
    console.log(idParam)

    GetEventsDetails(idParam);
    function GetEventsDetails(id) {
        $.ajax({
            type: "GET",
            url: `http://127.0.0.1:8000/events/event/${id}/`,
            dataType: 'json',
            headers: { 'Authorization': 'Token ' + token },
            success: function (data) {

                console.log(data);
                populatePage(data);
                populateEdithEventForm(data);
            },
            error: function (error) {
                console.log(console.error(error));
            }
        });
    }

    function populatePage(data) {

        $("#event-name").text(data.name);
        $("#event_details").text(data.description);
        $("#organiser").text(data.user_id);
        $("#time").text(data.time);
        $("#location").text(data.location)
        $("#host-name").text(data.user_first_name + " " + data.user_last_name)
    }

    function populateEdithEventForm(data) {
        $("input[name='event_name']").val(data.name);
        $("input[name='event_date']").val(data.date)
        $("input[name='event_time']").val(data.time)
        $("input[name='event_location']").val(data.location)
        $("input[name='details']").text(data.description)
        $("#details").text(data.description)
    }
    $("#event-edith-form").submit(function (e) {
        e.preventDefault();
        const formData = {
            "name": $("input[name='event_name']").val(),
            "location": $("input[name='event_location']").val(),
            "description": $("#details").val(),
            "time": $("input[name='event_time']").val(),
            "date": $("input[name='event_date']").val(),
        }

        EdithEvent();
        function EdithEvent() {
            $.ajax({
                type: "PATCH",
                url: `http://127.0.0.1:8000/events/event/${idParam}/`,
                data: formData,
                headers: {"Authorization": "Token " + token},
                success: function (response) {
                    // Navigate to home page
                    console.log(response);
                    window.location.reload()
                },
                error: function (error) {
                    console.log(error)
                }
            });
        }
    });

});

$("#edith-event-button").click(function (e) {
    e.preventDefault();

});

