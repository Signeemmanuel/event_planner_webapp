token = localStorage.getItem("token")

let querySearch = window.location.search
let urlParams = new URLSearchParams(querySearch)
var idParam = urlParams.get("id")



GetReport();
function GetReport() {
    $.ajax({
        type: "GET",
        url: `http://127.0.0.1:8000/events/report/${idParam}`,
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
const populateFields = (data) => {
    $("#report_headen").text(`Event Report for ${data.event_name}`)
    $("#event_name").text(data.event_name)
    $("#event_location").text(data.event_location)
    $("#event_time").text(data.event_time)
    $("#event_date").text(data.event_date)
    $("#budget").text(data.total_cost)
    $("#attendance").text(data.attendance)
    $("#summary").text(data.summary)
}