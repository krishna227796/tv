document.getElementById("power-btn").addEventListener("click", () => {
  const confirmExit = confirm("Are you sure you want to exit TvFlix?");
  if (confirmExit) {
    window.close(); // closes the window (works in some browsers)
    alert("TvFlix has been exited."); // fallback message
  }
});
