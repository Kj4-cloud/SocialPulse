export default function UpgradeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Upgrade to Pro</h2>
        <p style={styles.subtitle}>
          Unlock advanced analytics, AI insights, and revenue tracking.
        </p>

        <div style={styles.priceBox}>
          <span style={styles.price}>₹500</span>
          <span style={styles.month}>/ month</span>
        </div>

        <ul style={styles.features}>
          <li>✔ AI-powered content predictions</li>
          <li>✔ Reel-level revenue tracking</li>
          <li>✔ Best posting time recommendations</li>
          <li>✔ Audience sentiment analysis</li>
          <li>✔ Downloadable performance reports</li>
          <li>✔ Trend & hashtag suggestions</li>
        </ul>

        <button style={styles.button}>Upgrade Now</button>

        <p style={styles.note}>
          Cancel anytime. No hidden charges.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0b0f1a",
    padding: "40px",
  },
  card: {
    background: "linear-gradient(145deg, #0f172a, #020617)",
    borderRadius: "20px",
    padding: "32px",
    width: "320px",
    boxShadow: "0 0 40px rgba(99,102,241,0.3)",
    color: "white",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: "14px",
    marginBottom: "20px",
  },
  priceBox: {
    display: "flex",
    alignItems: "baseline",
    gap: "6px",
    marginBottom: "20px",
  },
  price: {
    fontSize: "40px",
    fontWeight: "800",
    color: "#a78bfa",
  },
  month: {
    fontSize: "14px",
    color: "#9ca3af",
  },
  features: {
    listStyle: "none",
    padding: 0,
    marginBottom: "24px",
    lineHeight: "1.8",
    fontSize: "14px",
    color: "#e5e7eb",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
    background:
      "linear-gradient(90deg, #ec4899, #8b5cf6, #6366f1)",
    color: "white",
    fontSize: "16px",
  },
  note: {
    fontSize: "12px",
    color: "#9ca3af",
    textAlign: "center",
    marginTop: "12px",
  },
};
