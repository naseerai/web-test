import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      alert(error.message);
    } else {
      navigate("/admin-myaccess"); // Go to admin after login
    }
    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: "#faf9f7", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "150px 20px" }}>
        <form onSubmit={handleLogin} style={{ background: "#fff", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Login</h2>
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} 
            style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ddd" }} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} 
            style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ddd" }} />
          <button type="submit" disabled={loading} style={{ width: "100%", padding: "12px", background: "#f47c20", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;