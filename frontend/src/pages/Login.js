import { useState } from "react";
import axios from "axios";

const API = "http://localhost:4000";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!email || !password) return alert("Fill all fields");

    const res = await axios.post(`${API}/auth/login`, { email, password });

    if (res.data.token) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
    } else {
      alert(res.data.error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
