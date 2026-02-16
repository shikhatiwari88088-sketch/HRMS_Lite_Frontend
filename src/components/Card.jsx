function Card({ title, value, color = "#3b82f6" }) {
  return (
    <div style={{ ...styles.card, borderTop: `5px solid ${color}` }}>
      <div style={styles.content}>
        <h4 style={styles.title}>{title}</h4>
        <h1 style={{ ...styles.value, color }}>{value}</h1>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: "16px",
    width: "260px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  content: {
    textAlign: "left",
  },
  title: {
    marginBottom: "12px",
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "500",
    letterSpacing: "0.5px",
  },
  value: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1e293b",
  },
};

export default Card;
