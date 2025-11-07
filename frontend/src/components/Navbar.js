import { Link } from "react-router-dom";

function Navbar({ loggedIn, onLogout }) {
  return (
    <div className="navbar">
      <div><b>Appointment System</b></div>

      <div>
        {loggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/book">Book</Link>
            <Link to="/history">History</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/contact">Help</Link>
            <a href="#" onClick={onLogout}>Logout</a>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/about">About</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
