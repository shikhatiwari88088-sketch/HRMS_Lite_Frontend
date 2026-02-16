import api from "../api/axios";

function EmployeeTable({ employees, refresh }) {
  const handleDelete = async (employee_id) => {
    try {
      await api.delete(`employees/${employee_id}/`);
      refresh();
    } catch (error) {
      console.error("Error deleting employee");
    }
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Department</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="5" style={styles.empty}>
                No employees found
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.id} style={styles.tr}>
                <td style={styles.td}>{emp.employee_id}</td>
                <td style={styles.td}>{emp.full_name}</td>
                <td style={styles.td}>{emp.email}</td>
                <td style={styles.td}>{emp.department}</td>
                <td style={styles.td}>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
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
  deleteBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
    fontSize: "13px",
  },
};

export default EmployeeTable;
