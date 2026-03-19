let provider;
let publicKey;

// connect wallet
async function connectWallet() {
  provider = window.solana;

  if (!provider) {
    alert("Install Phantom!");
    return;
  }

  const resp = await provider.connect();
  publicKey = resp.publicKey;

  document.getElementById("wallet").innerText =
    "Connected: " + publicKey.toString();
}

// check how much user bought
async function checkClaim() {

  const res = await fetch("/api/save");
  const data = await res.json();

  const user = data.find(
    b => b.wallet === publicKey.toString()
  );

  if (!user) {
    document.getElementById("eligible").innerText =
      "❌ No purchase found";
    return;
  }

  const tokens = user.amount * 1000000;

  document.getElementById("eligible").innerText =
    "✅ You can claim " + tokens + " DSP";
}

// simulate claim
async function claimTokens() {

  document.getElementById("result").innerText =
    "⚠️ Tokens will be sent manually or via backend later";
}
