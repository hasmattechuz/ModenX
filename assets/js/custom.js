function videoPlayer() {
  const video = document.querySelector("#video-player");
  const toggleBtn = document.querySelector("#btn-toggle1");

  toggleBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      toggleBtn.textContent = "Pause";
    } else {
      video.pause();
      toggleBtn.textContent = "Play";
    }
  });
}

videoPlayer();