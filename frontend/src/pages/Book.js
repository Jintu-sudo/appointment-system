import { useState } from "react";
import axios from "axios";

const API = "http://localhost:4000";

function Book({ token }) {
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const book = async () => {
    if (!date || !reason) return alert("Fill all fields");

    const res = await axios.post(
      `${API}/appointments/create`,
      { date, reason },
      { headers: { token } }
    );
    alert(res.data.message);
  };

  return (
    <div className="container">
      <h2>Book Appointment</h2>
      <input type="date" onChange={e=>setDate(e.target.value)} />
      <input placeholder="Reason" onChange={e=>setReason(e.target.value)} />
      <button onClick={book}>Book</button>
    </div>
  );
}

export default Book;
