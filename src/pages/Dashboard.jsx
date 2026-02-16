import { useEffect, useState } from "react";
import api from "../api/axios";
import Card from "../components/Card";

function Dashboard() {
  const [stats, setStats] = useState({
    total_employees: 0,
    present_today: 0,
    absent_today: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("dashboard/");
        setStats(res.data);
      } catch (error) {
        console.error("Error fetching dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading)
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loader}></div>
      </div>
    );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dashboard Overview</h2>

      <div style={styles.cardWrapper}>
        <Card
          title="Total Employees"
          value={stats.total_employees}
          color="#3b82f6"
        />
        <Card
          title="Present Today"
          value={stats.present_today}
          color="#22c55e"
        />
        <Card
          title="Absent Today"
          value={stats.absent_today}
          color="#ef4444"
        />
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
  heading: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "25px",
    color: "#0f172a",
  },
  cardWrapper: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  loader: {
    width: "40px",
    height: "40px",
    border: "5px solid #e2e8f0",
    borderTop: "5px solid #3b82f6",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default Dashboard;
