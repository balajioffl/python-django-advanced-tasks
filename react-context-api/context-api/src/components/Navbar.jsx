import { useAuth } from "../hooks/useAuth";
import "./Navbar.css";  

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <h3 className="logo">My App</h3>

      <div className="nav-right">
        {isAuthenticated ? (
          <>
            <span className="username">Logged in as: {user.name}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <span className="username">Not logged in</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;