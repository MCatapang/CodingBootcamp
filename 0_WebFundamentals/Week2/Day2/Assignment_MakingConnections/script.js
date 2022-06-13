console.log("page loaded...");

// Edit Profile

    var fullName = document.getElementById("fullName");

    function changeName() {
        fullName.innerText = "Michael Catapang";
    }




// Remove Requests

// var request1 = document.getElementById("userRequest1");
// var request2 = document.getElementById("userRequest2");

// function removeRequest(id) {
//     id.classList.add("displayNone");
// }




// BONUS: Changing Counter Numbers

var request1 = document.getElementById("userRequest1");
var request2 = document.getElementById("userRequest2");
var requestCounter = document.getElementById("requestCounter");
var connectionCounter = document.getElementById("connectionCounter");

function acceptRequest(id, isAccepted) {
    var request = document.getElementById(id);
    request.remove();
    var requestCount = parseInt(requestCounter.innerText);
    var connectionCount = parseInt(connectionCounter.innerText);
    requestCounter.innerText = --requestCount;
    if (isAccepted) {
        connectionCounter.innerText = ++connectionCount;
    }
}

// function denyRequest(id) {
//     id.classList.add("displayNone");
//     requestCounter.innerText -= 1;
// }