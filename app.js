let totalSol = 0;
const recentBuyers = [];

async function connectWallet() {
  const provider = window.solana;
  if (!provider) {
    alert("Phantom wallet not found!");
    return;
  }
  const resp = await provider.connect();
  document.getElementById("status").innerText = "Connected: " + resp.publicKey.toString();
}

async function buyTokens() {
  if (CONFIG.mockMode) {
    const fakeAmount = Math.random() * 0.5 + 0.1;
    totalSol += fakeAmount;
    const fakeWallet = "User" + Math.floor(Math.random()*1000);
    recentBuyers.push({ wallet: fakeWallet, amount: fakeAmount.toFixed(3) });
    renderProgress();
    renderBuyers();
    return;
  }

  // TODO: Add real Solana transaction code here
}

function renderProgress() {
  const percentage = Math.min((totalSol / CONFIG.targetSol) * 100, 100);
  document.getElementById("progress-bar").style.width = percentage + "%";
}

function renderBuyers() {
  const list = document.getElementById("buyer-list");
  list.innerHTML = recentBuyers.map(b => `<li>${b.wallet}: ${b.amount} SOL</li>`).join("");
}

function claim() {
  if (CONFIG.mockMode) {
    document.getElementById("result").innerText = "🎁 Airdrop simulated successfully!";
    return;
  }

  // TODO: Add real claim logic here
}
