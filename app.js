let totalSol = 0;
const buyers = [];

function buyTokens() {

  const amount = (Math.random() * 0.5 + 0.1);
  totalSol += amount;

  const wallet = "User" + Math.floor(Math.random() * 9999);

  buyers.unshift({
    wallet: wallet,
    amount: amount.toFixed(3)
  });

  updateUI();
}

function updateUI() {

  // progress bar
  const percent = Math.min((totalSol / CONFIG.targetSol) * 100, 100);
  document.getElementById("progress-bar").style.width = percent + "%";

  // raised text
  document.getElementById("raised").innerText =
    totalSol.toFixed(2) + " SOL raised";

  // buyers list
  document.getElementById("buyer-list").innerHTML =
    buyers.slice(0, 5).map(b =>
      `<li>🟢 ${b.wallet} bought ${b.amount} SOL</li>`
    ).join("");
}

// ⏳ countdown timer
setInterval(() => {

  const end = new Date("2026-04-01").getTime();
  const now = new Date().getTime();

  const diff = end - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "Presale Ended";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer").innerText =
    hours + "h " + minutes + "m remaining";

}, 1000);
