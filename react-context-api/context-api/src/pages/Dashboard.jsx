import { useAuth } from "../hooks/useAuth";
import { useFetch } from "../hooks/useFetch";
import "./Dashboard.css";


function Dashboard() {
  const { isAuthenticated } = useAuth();

  const { data, loading, error } = useFetch("/data.json");

  if (!isAuthenticated) 
  {
    return <h2>You must log in to view this page.</h2>;
  }

  if (loading) 
    return <p>Loading...</p>;

  if (error) 
    return <p>Error loading data</p>;


  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <table  className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => 
          (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard