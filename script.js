document.getElementById("power-btn").addEventListener("click", () => {
  const confirmExit = confirm("Exit TvFlix?");
  if (confirmExit) {
    window.close();
    alert("TvFlix closed.");
  }
});
