import { useEffect, useState } from "react";
import api from "../api/axios";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

function Attendance() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAttendance = async () => {
    try {
      const res = await api.get("attendance/");
      setRecords(res.data);
    } catch (error) {
      console.error("Error fetching attendance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Attendance Management</h2>
        <p style={styles.subtitle}>
          Track and manage employee attendance records
        </p>
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.formSection}>
          <AttendanceForm refresh={fetchAttendance} />
        </div>

        <div style={styles.tableSection}>
          {loading ? (
            <p>Loading attendance records...</p>
          ) : (
            <AttendanceTable records={records} />
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

export default Attendance;
