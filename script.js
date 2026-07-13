// Exit button
document.getElementById("power-btn").addEventListener("click", () => {
  const confirmExit = confirm("Exit TvFlix?");
  if (confirmExit) {
    window.close();
    alert("TvFlix closed.");
  }
});

// Movie card click
const movieCards = document.querySelectorAll(".movie-card");
const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("video-player");
const closeVideo = document.getElementById("close-video");

movieCards.forEach(card => {
  card.addEventListener("click", () => {
    const videoSrc = card.getAttribute("data-video");
    videoPlayer.src = videoSrc;
    videoModal.style.display = "flex";
    videoPlayer.play();
  });
});

// Close video
closeVideo.addEventListener("click", () => {
  videoPlayer.pause();
  videoPlayer.src = "";
  videoModal.style.display = "none";
});

// Optional: allow ESC key to close video
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.style.display === "flex") {
    videoPlayer.pause();
    videoPlayer.src = "";
    videoModal.style.display = "none";
  }
});
