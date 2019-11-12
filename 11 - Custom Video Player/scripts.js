// select all the element
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


progressBar.style.flexBasis ="0%"; // reset loader to 0%
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

// function to skip 
function skipTime(){
    video.currentTime += parseFloat(this.dataset.skip);
}

//function to change video according to slider
function changeSlider(){
    video[this.name] = this.value;

}
// handle progress bar percentage

function progressHandle(){

    const barPercentage = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis =`${barPercentage}%`; 
   

}
// progress bar scrubbing 
function scrubHandle(e){
    //calculate total scrub length/width in term of video duration
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;

}


// add event listener

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", progressHandle); // updates progress slider flex percentage
skipButtons.forEach(button => button.addEventListener("click", skipTime)); // skips back and forward
ranges.forEach(slider => slider.addEventListener("change", changeSlider)); // volume and speed sliders
ranges.forEach(slider => slider.addEventListener("mousemove", changeSlider))
progress.addEventListener("click", scrubHandle);
progress.addEventListener("mousemove", (e) => mousedown && scrubHandle(e));

let mousedown = false; 

progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
