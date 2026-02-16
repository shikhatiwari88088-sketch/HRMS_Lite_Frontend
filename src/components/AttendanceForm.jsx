import { useState, useEffect } from "react";
import api from "../api/axios";

function AttendanceForm({ refresh }) {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("employees/");
        setEmployees(res.data);
      } catch (error) {
        console.error("Error fetching employees");
      }
    };
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("attendance/", form);
      setError("");
      refresh();
      setForm({
        employee: "",
        date: "",
        status: "Present",
      });
    } catch (err) {
      setError("Attendance already marked or error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.heading}>Mark Attendance</h3>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Employee</label>
        <select
          name="employee"
          value={form.employee}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <button type="submit" style={styles.button}>
        Mark Attendance
      </button>

      {error && <div style={styles.error}>{error}</div>}
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  heading: {
    marginBottom: "10px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#475569",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#22c55e",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
  error: {
    marginTop: "10px",
    padding: "8px",
    background: "#fee2e2",
    color: "#b91c1c",
    borderRadius: "6px",
    fontSize: "14px",
  },
};

export default AttendanceForm;
