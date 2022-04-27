async function getUserData() {
    var response = await fetch("https://api.github.com/users/adion81");
    var userData = await response.json();
    var userInfoContainer = document.getElementById("userInfoContainer");
    for(let key in userData) {
        var div = document.createElement("div");
        div.innerHTML = key.toUpperCase() + " is " + userData[key];
        userInfoContainer.appendChild(div);
    }
    return userData;
}