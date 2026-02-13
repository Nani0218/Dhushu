const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const can = document.getElementById("can");

// MOVE "NO" BUTTON
noBtn.addEventListener("mouseover", () => {
  moveNoButton();
});

function moveNoButton() {
  const container = document.querySelector(".containar");
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// YES BUTTON CLICK → Immediate Redirect
yesBtn.addEventListener("click", () => {
  window.location.href = "page2.html";
});
