function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

let totalSol = 0;

function buyTokens() {
  totalSol += Math.random() * 0.5;

  document.getElementById("raised").innerText =
    totalSol.toFixed(2) + " SOL raised";

  document.getElementById("progress-bar").style.width =
    (totalSol / 10 * 100) + "%";
}

// countdown timer
setInterval(() => {
  const end = new Date("2026-04-01").getTime();
  const now = new Date().getTime();
  const diff = end - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "Ended";
    return;
  }

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer").innerText = h + "h " + m + "m left";
}, 1000);
