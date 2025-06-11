import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please fill in both fields");
      return;
    }

    setError("");

    console.log(formData); //Maybe sending the error made it not work?
    // have we pushed?
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>LOG IN</h1>
      {error && <div style={{ color: "red" }}>{error}</div>} HAHAAHAHAHHA HOW DO
      I WRITE A FKING COMMENT
      <label htmlFor="username">Username</label>
      <input
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        type="text"
        name="username"
        value={formData.username}
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        type="password"
        name="password"
        value={formData.password}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
