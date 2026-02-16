import { useEffect, useState } from "react";
import api from "../api/axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("employees/");
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Employee Management</h2>
        <p style={styles.subtitle}>
          Add, view and manage your company employees
        </p>
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.formSection}>
          <EmployeeForm refresh={fetchEmployees} />
        </div>

        <div style={styles.tableSection}>
          {loading ? (
            <p>Loading employees...</p>
          ) : (
            <EmployeeTable
              employees={employees}
              refresh={fetchEmployees}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2.5rem",
    background: "#f8fafc",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "25px",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "600",
    color: "#0f172a",
  },
  subtitle: {
    color: "#64748b",
    marginTop: "5px",
  },
  contentWrapper: {
    display: "flex",
    gap: "25px",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  formSection: {
    flex: "1",
    minWidth: "300px",
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
  tableSection: {
    flex: "2",
    minWidth: "400px",
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
};

export default Employees;
