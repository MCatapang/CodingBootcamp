console.log("page loaded...");

// function videoHover(element) {
//     element.play;
// }

var myVideo = document.getElementById("neonSignVideo")

myVideo.addEventListener("mouseover", function() {
    this.play();
}   
);

myVideo.addEventListener("mouseleave", 
    function() {
    this.pause();
}
);