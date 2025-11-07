import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Book from "./pages/Book";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";


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
            <Route path="/about" element={<About />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard token={token} />} />
            <Route path="/book" element={<Book token={token} />} />
            <Route path="/history" element={<History token={token} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contact" element={<Contact />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
