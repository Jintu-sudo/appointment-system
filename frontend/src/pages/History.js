import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:4000";

function History({ token }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/appointments/my`, { headers: { token } })
      .then(res => {
        const data = res.data;

        if (Array.isArray(data)) {
          setAppointments(data);
        } else {
          console.log("Unexpected response:", data);
          setAppointments([]);
        }
      })
      .catch(err => {
        console.log("Fetch error:", err);
        setAppointments([]);
      });
  }, [token]);

  return (
    <div className="container">
      <h2>Your Appointment History</h2>

      {appointments.length === 0 ? (
        <p>No appointments booked yet</p>
      ) : (
        appointments.map((a, i) => (
          <div className="appointment-box" key={i}>
            <b>{a.date}</b><br />
            {a.reason}
          </div>
        ))
      )}
    </div>
  );
}

export default History;
