import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:4000";

function Dashboard({ token }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/appointments/my`, { headers: { token } })
      .then(res => {
        if (Array.isArray(res.data)) {
          setAppointments(res.data);
        } else {
          setAppointments([]);
        }
      });
  }, [token]);

  console.log("TOKEN:", token);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Total appointments: <b>{appointments.length}</b></p>
      {appointments.length > 0 && (
        <p>Last booked on: <b>{appointments[appointments.length - 1].date}</b></p>
      )}
    </div>
  );
}

export default Dashboard;
