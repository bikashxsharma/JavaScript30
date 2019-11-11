// select all the element
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filed");
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



// function to play video or pause
function togglePlay (){
    const method = video.paused ? "play" : "pause";
    video[method]();
 
}

// function to change button icon play and pause
function updateButton(){
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.innerHTML=icon;
}


// add event listener

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);