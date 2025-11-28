import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isAuthenticated } = useAuth();

  return (
   
   <>
      <Navbar />

      {isAuthenticated ? <Dashboard /> : <Login />}
    </>

  );
}

export default App;
