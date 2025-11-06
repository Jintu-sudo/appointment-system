import { useState } from "react";
import axios from "axios";

const API = "/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (!name || !email || !password) return alert("Fill all fields");

    const res = await axios.post(`${API}/auth/signup`, { name, email, password });
    alert(res.data.message || res.data.error);
  };

  return (
    <div className="container">
      <h2>Create Account</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={signup}>Signup</button>
    </div>
  );
}

export default Signup;
