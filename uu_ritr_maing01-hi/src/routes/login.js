import React, { useState } from "react";
import Calls from "../calls.js";
import { withRoute } from "uu_plus4u5g02-app";

// ======================
// 🎨 ŠTÝLY
// ======================
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#111",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#111",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
    width: "100%",
    maxWidth: "360px",
    textAlign: "center",
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#ccc",
    fontSize: "20px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "16px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#222",
    color: "white",
    fontSize: "16px",
    outline: "none",
  },
  button: {
    width: "100%",
    backgroundColor: "#f7931e",
    border: "none",
    borderRadius: "10px",
    padding: "12px 0",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#ffa733",
  },
  error: {
    color: "#ff5555",
    marginBottom: "10px",
  },
};

// ======================
// 🧩 CUSTOM KOMPONENTY
// ======================
const LoginLogo = () => (
  <div>
    <img
      src="../assets/MatchUPlogo.png"
      alt="MatchUP Logo"
      style={styles.logo}
    />
    <div style={styles.title}>MatchUP</div>
    <div style={styles.subtitle}>Log in</div>
  </div>
);

const LoginInput = ({ type = "text", placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={styles.input}
  />
);

const LoginButton = ({ text, onClick, loading }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.button,
        ...(hover ? styles.buttonHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={loading}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

const LoginError = ({ message }) => (
  message ? <div style={styles.error}>{message}</div> : null
);

const LoginForm = ({ onSubmit, username, setUsername, password, setPassword, error, loading }) => (
  <form onSubmit={onSubmit}>
    <LoginInput placeholder="Username" value={username} onChange={setUsername} />
    <LoginInput
      type="password"
      placeholder="Password"
      value={password}
      onChange={setPassword}
    />
    <LoginError message={error} />
    <LoginButton text="Login" loading={loading} />
  </form>
);

// ======================
// 🚀 HLAVNÝ KOMPONENT
// ======================
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await Calls.PlayerCreate({ name: username, password: password });
      sessionStorage.setItem("player", JSON.stringify(res));
      window.location.href = "/tournaments";
    } catch (e) {
      console.log(e);
      setError(e.message);
    }

    setLoading(false);
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <LoginLogo />
        <LoginForm
          onSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
}
