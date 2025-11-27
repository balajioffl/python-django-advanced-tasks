import './Dashboard.css';

function Dashboard() {

  const handleLogout = () => {
    localStorage.removeItem("access");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <h1>Protected User Dashboard</h1>
      <h2>Welcome ! you are a authenticated user !</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
