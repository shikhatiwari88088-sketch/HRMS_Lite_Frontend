import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>HRMS Lite</h2>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link} activeclassname="active">
          Dashboard
        </NavLink>

        <NavLink to="/employees" style={styles.link}>
          Employees
        </NavLink>

        <NavLink to="/attendance" style={styles.link}>
          Attendance
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2.5rem",
    background: "linear-gradient(90deg, #0f172a, #1e293b)",
    color: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  logo: {
    fontWeight: "600",
    letterSpacing: "1px",
  },
  links: {
    display: "flex",
    gap: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#cbd5e1",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
};

export default Navbar;
