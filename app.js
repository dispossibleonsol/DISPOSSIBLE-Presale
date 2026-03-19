let provider;
let publicKey;
let connection;

window.onload = () => {
  connection = new solanaWeb3.Connection(CONFIG.rpcUrl, "confirmed");
};

// 🔗 CONNECT WALLET
async function connectWallet() {
  provider = window.solana;

  if (!provider) {
    alert("Install Phantom Wallet!");
    return;
  }

  const resp = await provider.connect();
  publicKey = resp.publicKey;

  document.getElementById("wallet").innerText =
    "Connected: " + publicKey.toString();
}

// 💰 BUY TOKENS (REAL SOL TRANSFER)
async function buyTokens() {

  if (!provider) {
    alert("Connect wallet first!");
    return;
  }

  const amount = 0.1; // SOL amount
  const lamports = amount * solanaWeb3.LAMPORTS_PER_SOL;

  const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: new solanaWeb3.PublicKey(CONFIG.presaleWallet),
      lamports
    })
  );

  try {
    const signature = await provider.signAndSendTransaction(transaction);
    await connection.confirmTransaction(signature);

    alert("✅ Purchase successful!");

  } catch (err) {
    console.error(err);
    alert("❌ Transaction failed");
  }
}
