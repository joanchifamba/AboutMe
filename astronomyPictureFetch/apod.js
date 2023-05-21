document.addEventListener("DOMContentLoaded", function () {
    var viewButton = document.getElementById("view_button");
    viewButton.addEventListener("click", getPicture);
})
function getPicture() {
    var date = document.getElementById("date").value;
    var url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + date;

    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error:" + response.status);
            }
        })
        .then(showPicture)
        .catch(noPicture);
}

function showPicture(data) {
    document.getElementById("pic").src = data.url;
    document.getElementById("title").src = data.title;
}

function noPicture(error) {
    alert(error.messege);
}



