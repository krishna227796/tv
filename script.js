// Exit button
document.getElementById("power-btn").addEventListener("click", () => {
  const confirmExit = confirm("Exit TvFlix?");
  if (confirmExit) {
    window.close();
    alert("TvFlix closed.");
  }
});

const movieCards = document.querySelectorAll(".movie-card");
const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("video-player");
const closeVideo = document.getElementById("close-video");

movieCards.forEach(card => {
  card.addEventListener("click", () => {
    const videoSrc = card.getAttribute("data-video");
    videoPlayer.src = videoSrc; // iframe embed link
    videoModal.style.display = "flex";
  });
});

closeVideo.addEventListener("click", () => {
  videoPlayer.src = ""; // stop video
  videoModal.style.display = "none";
});
