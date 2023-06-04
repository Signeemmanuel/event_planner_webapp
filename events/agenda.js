
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
        url: `http://127.0.0.1:8000/events/agenda/${idParam}/`,
        dataType: 'json',
        headers: { 'Authorization': 'Token ' + token },
        success: function (data) {

            // console.log(data);
            populateFields(data)
        },
        error: function (error) {
            console.log(console.error(error));
        }
    });
}

function populateFields(data) {
    console.log(data);
    
    // $.map(data, function (data_i, index) {
    //     $("#activities").append(`
    //     <tr class="inner-box">
    //         <td><p>${index}</p></td>
    //         <td>
    //             <p>${data_i.activity_name}</p>
    //         </td><th scope="row">
    //             <div class="event-date">
    //                 <span>${data_i.time}</span>
                    
    //             </div>
    //         </th>
    //         <th scope="row">
    //             <div class="event-date">
    //                 <span>${data_i.date}</span>
                
    //             </div>
    //         </th>
    //         <td>
    //             <div class="primary-btn">
    //                 <a class="btn btn-style mb-2" data-toggle="modal" data-target="#editAgenda" class=" mr-1" data-toggle="tooltip" title="" data-original-title="Edit">Edit</a>
    //                 <a class="btn btn-style-red mb-2" data-toggle="modal" data-target="#deleteAgenda" class=" mr-1" data-toggle="tooltip" title="" data-original-title="Edit">Delete</a>
    //             </div>
    //         </td>
    //     </tr>
    //     `)
        
    // });

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        console.log(data.activity_name);
        let item = `
        <tr class="inner-box">
            <td><p>1</p></td>
            <td>
                <p>${data[i].activity_name}</p>
            </td><th scope="row">
                <div class="event-date">
                    <span>${data[i].time}</span>
                    
                </div>
            </th>
            <th scope="row">
                <div class="event-date">
                    <span>${data[i].date}</span>
                
                </div>
            </th>
            <td>
                <div class="primary-btn">
                    <a class="btn btn-style mb-2" data-toggle="modal" data-target="#editAgenda" class=" mr-1" data-toggle="tooltip" title="" data-original-title="Edit">Edit</a>
                    <a class="btn btn-style-red mb-2" data-toggle="modal" data-target="#deleteAgenda" class=" mr-1" data-toggle="tooltip" title="" data-original-title="Edit">Delete</a>
                </div>
            </td>
        </tr>
        `
        $("#activities").append(item);
    }
}