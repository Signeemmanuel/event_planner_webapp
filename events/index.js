$(document).ready(function () {
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
            url: "http://127.0.0.1:8000/api/events/",
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
        for (let i = 0; i < data.length; i++) {
            // var newDiv = document.querySelector()
            // newDiv.textContent = 'Div ' + i;
            // document.body.appendChild(newDiv);
            var item = `
                <div class="col-lg-4 col-md-6 mb-2-6">
                    <article class="card card-style2">
                        <a href="details.html?id=${data[i].id}" class="read-more">
                            <div class="card-img">
                                <img class="rounded-top" src="../assets/images/event1.jpg" alt="...">
                                <div class="date"><span>24</span>JUNE</div>
                            </div>
                            <div class="card-body">
                                <h3 class="h3"><a href="details.html">${data[i].name}</a></h3>
                                <p class="display-30">${data[i].description} </p><br>
                                <a class="event-link" href="details.html?id=${data[i].id}">Read More</a>                        
                            </div>
                        </a>
                    </article>
                </div>
            `;

            $(".event_list").append(item);
            console.log(data[i]);
          }
    }

});
