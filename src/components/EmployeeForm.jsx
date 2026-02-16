import { useState } from "react";
import api from "../api/axios";

function EmployeeForm({ refresh }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("employees/", form);
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: "",
      });
      setError("");
      refresh();
    } catch (err) {
      setError("Error creating employee");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.heading}>Add New Employee</h3>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Employee ID</label>
        <input
          name="employee_id"
          value={form.employee_id}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Full Name</label>
        <input
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Department</label>
        <input
          name="department"
          value={form.department}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.button}>
        Add Employee
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
    transition: "0.2s",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#3b82f6",
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

export default EmployeeForm;
