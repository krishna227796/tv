function playVideo(element) {
    const container = element.parentElement;
    const iframe = container.querySelector("iframe");

    iframe.src = iframe.dataset.src;
    iframe.style.display = "block";

    element.remove();
}
