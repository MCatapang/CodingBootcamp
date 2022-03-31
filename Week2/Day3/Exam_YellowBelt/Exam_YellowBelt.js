// BANNER SCROLL
var bannerImage = document.getElementById('banner');

function scrollRight() {
    if (bannerImage.src.match("images/cafe-neko.png")) {
        bannerImage.src = "images/pixel-ninjas-2.png";
    }
    else {
        bannerImage.src = "images/stonepunk.png";
    }
}

function scrollLeft() {
    if (bannerImage.src.match("images/cafe-neko.png")) {
        bannerImage.src = "images/stonepunk.png";
    }
    else {
        bannerImage.src = "images/pixel-ninjas-2.png";
    }
}




// CART COUNT
var clicks = 0;

function increaseCartCount() {
    clicks += 1;
    document.getElementById("cartCount").innerHTML = clicks;
}




// ALERT BOX
function alertBox() {
    alert("This game is supported on Linux");
}