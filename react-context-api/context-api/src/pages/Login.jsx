import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "./Login.css";


export default function Login() {
    
  const { login } = useAuth();
  const [name, setName] = useState("");

  const handleLogin = () => {
    const dummyUser = { name };
    const dummyToken = "jwt-token-123";

    login(dummyUser,dummyToken);
  };

  return (

    <div className="login-container">

      <h1>Login</h1>

      <input className="login-input" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />

      <button className="login-btn" onClick={handleLogin}>Login</button>

    </div>

  );
}
