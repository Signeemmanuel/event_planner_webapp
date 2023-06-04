var token = localStorage.getItem('token');
var userID = localStorage.getItem('userID');

if (!token) {
    console.log("you are not authenticated")
}
else {
    console.log(token);
    console.log(userID);
}
GetEvents();
function GetEvents() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8000/events/event/",
        dataType: 'json',
        headers: { 'Authorization': 'Token ' + token },
        success: function (data) {

            // Navigate to home page
            // window.location.href = './index.html';
            console.log(data);
            populateFields(data)
        },
        error: function (error) {
            console.log(console.error(error));
        }
    });
}

function populateFields(data) {
    let urlParams = new URLSearchParams()

    for (let i = 0; i < data.length; i++) {
        // var newDiv = document.querySelector()
        // newDiv.textContent = 'Div ' + i;
        // document.body.appendChild(newDiv);

        // urlParams.set("id", data[i].id);
        // let detailUrl = `details.html?${urlParams.toString()}`;
        // var item = `
        //         <div class="col-lg-4 col-md-6 mb-2-6 mt-5 mb-5">
        //             <article class="card card-style2">
        //                 <a href=${url} class="read-more">
        //                     <div class="card-img">
        //                         <img class="rounded-top" src="../assets/images/event1.jpg" alt="...">
        //                         <div class="date"><span>24</span>JUNE</div>
        //                     </div>
        //                     <div class="card-body">
        //                         <h3 class="h3"><a href=${url}</a></h3>
        //                         <p class="display-30">${data[i].description} </p><br>
        //                         <a class="event-link" href=${url}>Read More</a>                        
        //                     </div>
        //                 </a>
        //             </article>
        //         </div>
        //     `;

        let event_name = data[i].name
        let event_date = data[i].date
        let item = `
        <tr>
            <td class="p-0 text-center">
                ${i + 1}
            </td>
            <td>${event_name}</td>
            <td>${event_date}</td>
            <td class="text-center">
                <span style="font-size:25px">00</span> <br> <a href="rsvp.html?id=${data[i].id}" class="color font-weight-bold">View RSVPs</a>
            </td>
            <td>
                <span style="font-size:25px">00</span>
            </td>
            <td>
                <a href="agenda.html?id=${data[i].id}"  class="color mr-1" data-toggle="tooltip" title="" data-original-title="agenda"><i class="fas fa-calendar"> View Agenda</i></a>
            </td>                  
            <td>
                <a href="report.html?id=${data[i].id}"  class="color mr-1" data-toggle="tooltip" title="" data-original-title="report"><i class="fas fa-calendar"> View Report</i></a>
            </td>                                  
            <td>
                <a href="details.html?id=${data[i].id}"  class="color mr-1" data-toggle="tooltip" title="" data-original-title="report"><i class="fas fa-calendar"> View Event</i></a>
            </td>                                                
        </tr>
        `
        $("#event_list").append(item);
        console.log(data[i]);
    }
}


