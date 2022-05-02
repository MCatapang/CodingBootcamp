async function getUserData() {
    // var response = await fetch("https://api.github.com/users/adion81");      // original URL
    var response = await fetch("https://www.healthcare.gov/api/glossary.json");    // test URL
    var userData = await response.json();
    console.log(userData);  // check console log to see how API JSON data is organized
    var userInfoContainer = document.getElementById("userInfoContainer");
    // for(let key in userData) {       // for loop can be commented out to convert getUserData() into a function made to display API JSON data
    //     var div = document.createElement("div");
    //     div.innerHTML = key.toUpperCase() + " is " + userData[key];
    //     userInfoContainer.appendChild(div);
    // }
    return userData;
}