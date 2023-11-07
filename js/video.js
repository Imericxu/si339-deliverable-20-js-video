const video = document.getElementById("player1");
video.setAttribute("preload", "auto");

const playBtn = document.getElementById("play");
const volumeSlider = document.getElementById("slider");
const volumeLbl = document.getElementById("volume");
// Play the video and display the volume on click
playBtn.addEventListener("click", () => {
  video.play();
  volumeLbl.innerHTML = Math.round(video.volume * 100) + "%";
});

const pauseBtn = document.getElementById("pause");
// Pause the video and clear the volume information on click
pauseBtn.addEventListener("click", () => {
  // Pause the video and clear the volume information
  video.pause();
});

const slowerBtn = document.getElementById("slower");
// Slow down the video by 10% on click
slowerBtn.addEventListener("click", () => {
  // Round to 2 decimal places
  video.playbackRate =
    Math.round(Math.max(video.playbackRate - 0.1, 0.1) * 100) / 100;
  console.log(video.playbackRate);
});

const fasterBtn = document.getElementById("faster");
// Speed up the video by 10% on click
fasterBtn.addEventListener("click", () => {
  // Round to 2 decimal places
  video.playbackRate = Math.round((video.playbackRate + 0.1) * 100) / 100;
  console.log(video.playbackRate);
});

const skipBtn = document.getElementById("skip");
// Skip ahead 10 seconds on click. Reset to start if past end of video
skipBtn.addEventListener("click", () => {
  const newTime = video.currentTime + 10;
  video.currentTime = newTime > video.duration ? 0 : newTime;
});

const muteBtn = document.getElementById("mute");
// Toggle mute on/off on click
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.innerHTML = video.muted ? "Unmute" : "Mute";
});

// Update volume when slider changes
volumeSlider.addEventListener("change", () => {
  // Update volume
  video.volume = volumeSlider.value / 100;
  volumeLbl.innerHTML = Math.round(video.volume * 100) + "%";
});

const oldSchoolBtn = document.getElementById("vintage");
// Add the oldSchool class to the video element on click
oldSchoolBtn.addEventListener("click", () => {
  video.classList.add("oldSchool");
});

const origBtn = document.getElementById("orig");
// Remove the oldSchool class from the video element on click
origBtn.addEventListener("click", () => {
  video.classList.remove("oldSchool");
});
