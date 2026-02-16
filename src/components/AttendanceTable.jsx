function AttendanceTable({ records }) {
  const getStatusStyle = (status) => {
    if (status.toLowerCase() === "present") {
      return {
        background: "#dcfce7",
        color: "#166534",
      };
    } else {
      return {
        background: "#fee2e2",
        color: "#991b1b",
      };
    }
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Employee</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="3" style={styles.empty}>
                No attendance records found
              </td>
            </tr>
          ) : (
            records.map((rec) => (
              <tr key={rec.id} style={styles.tr}>
                <td style={styles.td}>{rec.employee}</td>
                <td style={styles.td}>
                  {new Date(rec.date).toLocaleDateString()}
                </td>
                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.badge,
                      ...getStatusStyle(rec.status),
                    }}
                  >
                    {rec.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "12px",
    background: "#1e293b",
    color: "white",
    fontWeight: "500",
    fontSize: "14px",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "14px",
  },
  tr: {
    transition: "background 0.2s ease",
  },
  empty: {
    padding: "20px",
    textAlign: "center",
    color: "#64748b",
  },
  badge: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
  },
};

export default AttendanceTable;
