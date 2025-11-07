import { Link } from "react-router-dom";

function Home() {
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "10px",
    },
    subtext: {
      color: "#555",
      marginBottom: "30px",
    },
    quickActions: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
      marginBottom: "30px",
    },
    btn: {
      padding: "12px 22px",
      backgroundColor: "#0077ff",
      color: "white",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "0.2s",
    },
    btnHover: {
      backgroundColor: "#005fcc",
    },
    statsBox: {
      display: "inline-block",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      textAlign: "left",
      minWidth: "250px",
      backgroundColor: "#fafafa",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    statTitle: {
      marginBottom: "10px",
      fontSize: "18px",
    },
    statItem: {
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Appointment System</h2>
      <p style={styles.subtext}>Manage your bookings effortlessly.</p>

      <div style={styles.quickActions}>
        <Link
          to="/book"
          style={styles.btn}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005fcc")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0077ff")}
        >
          📅 Book Appointment
        </Link>
        <Link
          to="/history"
          style={styles.btn}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005fcc")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0077ff")}
        >
          🧾 View History
        </Link>
        <Link
          to="/profile"
          style={styles.btn}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005fcc")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0077ff")}
        >
          👤 My Profile
        </Link>
      </div>

      <div style={styles.statsBox}>
        <h3 style={styles.statTitle}>Quick Stats</h3>
        <p style={styles.statItem}>
          Total Appointments: <b>3</b>
        </p>
        <p style={styles.statItem}>
          Next Appointment: <b>2025-11-10</b>
        </p>
      </div>
    </div>
  );
}

export default Home;
