import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Book from "./pages/Book";
import History from "./pages/History";

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <BrowserRouter>
      <Navbar loggedIn={!!token} onLogout={logout} />

      <Routes>
        {token == null ? (
          <>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard token={token} />} />
            <Route path="/book" element={<Book token={token} />} />
            <Route path="/history" element={<History token={token} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
